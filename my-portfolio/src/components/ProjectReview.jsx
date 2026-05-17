import { useEffect, useRef, useState } from 'react';
import { projects } from './projectsData';

function ProjectReview({ projectName, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const autoPlayTimerRef = useRef(null);
  const project = projects.find((p) => p.name === projectName);

  if (!project) {
    return (
      <div className="project-review-container">
        <div className="review-error">Project not found</div>
      </div>
    );
  }

  const images = project.images || [];
  const hasImages = images.length > 0;

  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  const openImagePreview = (index) => {
    const nextIndex = index % images.length;
    setCurrentImageIndex(nextIndex);
    setPreviewImage(images[nextIndex]);
    stopAutoPlay();
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
    startAutoPlay();
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    stopAutoPlay();
    startAutoPlay();
  };

  const goToPrevious = () => {
    goToImage((currentImageIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    goToImage((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    if (hasImages) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [hasImages, images.length]);

  return (
    <div className="project-review-container">
      <button
        type="button"
        className="review-close-button"
        onClick={onClose}
        aria-label="Close review"
      >
        ✕
      </button>

      <div className="review-left-panel">
        <div className="review-project-header">
          <div>
            <h2 className="review-project-name">{project.name}</h2>
            <p className="review-project-type">{project.type}</p>
          </div>
          <span className="review-project-role">{project.role}</span>
        </div>

        <div className="review-tech">
          <span className="review-label">Technologies</span>
          <p className="review-tech-list">{project.tech}</p>
        </div>

        <div className="review-content">
          <p className="review-summary">{project.summary}</p>
          <div className="review-tasks">
            <span className="review-label">My contributions</span>
            <ul>
              {project.responsibilities.map((task) => (
                <li key={task} className="review-task-item">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="review-right-panel">
        {hasImages ? (
          <>
            <div className="review-carousel">
              <div
                className="review-image-container"
                role="button"
                tabIndex={0}
                onClick={() => openImagePreview(currentImageIndex)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openImagePreview(currentImageIndex);
                  }
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                  className="review-image"
                />
              </div>
              <p className="image-caption">Click image to open a larger preview</p>

              <div className="review-carousel-controls">
                <button
                  type="button"
                  className="carousel-button carousel-prev"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="carousel-button carousel-next"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <div className="review-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="review-thumbnail-list">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>

            {previewImage && (
              <div className="image-preview-dialog" role="dialog" aria-modal="true">
                <div className="image-preview-card">
                  <button
                    type="button"
                    className="image-preview-close-button"
                    onClick={closeImagePreview}
                    aria-label="Close enlarged image"
                  >
                    ✕
                  </button>
                  <img
                    src={previewImage}
                    alt={`Enlarged view of ${project.name}`}
                    className="image-preview"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="review-no-images">
            <p>No images available for this project</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectReview;
