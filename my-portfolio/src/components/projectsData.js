import convenienceDangnhap from '../assets/ConvenienceStore/Dangnhap.png';
import convenienceDonhang from '../assets/ConvenienceStore/Donhang.png';
import convenienceDonvi from '../assets/ConvenienceStore/Donvi.png';
import convenienceKhachHang from '../assets/ConvenienceStore/KhachHang.png';
import convenienceKhuyenMai from '../assets/ConvenienceStore/KhuyenMai.png';
import convenienceLoaihang from '../assets/ConvenienceStore/Loaihang.png';
import convenienceNhacungcap from '../assets/ConvenienceStore/Nhacungcap.png';
import convenienceNhanvien from '../assets/ConvenienceStore/Nhanvien.png';
import convenienceNhaphang from '../assets/ConvenienceStore/Nhaphang.png';
import conveniencePhanquyen from '../assets/ConvenienceStore/PhanQuyen.png';
import convenienceSanpham from '../assets/ConvenienceStore/Sanpham.png';
import convenienceThongke from '../assets/ConvenienceStore/Thongke.png';
import convenienceThongtin from '../assets/ConvenienceStore/Thongtin.png';
import convenienceTrangchu from '../assets/ConvenienceStore/Trangchu.png';
import convenienceXuatHang from '../assets/ConvenienceStore/XuatHang.png';

import foodStreetDangnhapAdmin from '../assets/FoodStreet/DangnhapAdmin.png';
import foodStreetDangNhapUser from '../assets/FoodStreet/DangNhapUser.png';
import foodStreetPOIManagement from '../assets/FoodStreet/POIManagement.png';
import foodStreetQuetQR from '../assets/FoodStreet/QuetQR.png';
import foodStreetThongTInUser from '../assets/FoodStreet/ThongTInUser.png';
import foodStreetTour from '../assets/FoodStreet/Tour.png';
import foodStreetTrangChuAdmin from '../assets/FoodStreet/TrangChuAdmin.png';
import foodStreetTrangChuUser from '../assets/FoodStreet/TrangChuUser.png';
import foodStreetUserManagement from '../assets/FoodStreet/UserManagement.png';
import foodStreetVendorManagement from '../assets/FoodStreet/VendorManagement.png';

import watchStoreChucvu from '../assets/WatchStore/Chucvu.png';
import watchStoreDangNhap from '../assets/WatchStore/DangNhap.png';
import watchStoreHangLoai from '../assets/WatchStore/HangLoai.png';
import watchStoreHoadon from '../assets/WatchStore/Hoadon.png';
import watchStoreHoadonsuachua from '../assets/WatchStore/Hoadonsuachua.png';
import watchStoreKhachhang from '../assets/WatchStore/Khachhang.png';
import watchStoreLinhkien from '../assets/WatchStore/Linhkien.png';
import watchStoreNhanVien from '../assets/WatchStore/NhanVien.png';
import watchStorePhieunhap from '../assets/WatchStore/Phieunhap.png';
import watchStoreSanPham from '../assets/WatchStore/SanPham.png';
import watchStoreThongke from '../assets/WatchStore/Thongke.png';
import watchStoreTrangChu from '../assets/WatchStore/TrangChu.png';

const convenienceImages = [
  convenienceDangnhap,
  convenienceDonhang,
  convenienceDonvi,
  convenienceKhachHang,
  convenienceKhuyenMai,
  convenienceLoaihang,
  convenienceNhacungcap,
  convenienceNhanvien,
  convenienceNhaphang,
  conveniencePhanquyen,
  convenienceSanpham,
  convenienceThongke,
  convenienceThongtin,
  convenienceTrangchu,
  convenienceXuatHang,
];

const foodStreetImages = [
  foodStreetDangnhapAdmin,
  foodStreetDangNhapUser,
  foodStreetPOIManagement,
  foodStreetQuetQR,
  foodStreetThongTInUser,
  foodStreetTour,
  foodStreetTrangChuAdmin,
  foodStreetTrangChuUser,
  foodStreetUserManagement,
  foodStreetVendorManagement,
];

const watchStoreImages = [
  watchStoreChucvu,
  watchStoreDangNhap,
  watchStoreHangLoai,
  watchStoreHoadon,
  watchStoreHoadonsuachua,
  watchStoreKhachhang,
  watchStoreLinhkien,
  watchStoreNhanVien,
  watchStorePhieunhap,
  watchStoreSanPham,
  watchStoreThongke,
  watchStoreTrangChu,
];

export const projects = [
  {
    name: 'FreshMart – Convenience Store Management Application',
    type: 'Personal Project',
    role: 'Full-stack Developer',
    tech: 'Java 21, Swing, Hibernate ORM, MySQL/MariaDB, JWT, BCrypt, Apache POI, iTextPDF, JFreeChart',
    summary:
      'A Java Swing desktop application for convenience store management with sales, inventory, customer, HR, promotions, and reporting features.',
    responsibilities: [
      'Designed and implemented the full solution from database schema and business logic to user interface.',
      'Developed authentication and role-based authorization for Admin, Staff, and Manager with dynamic menus by permission.',
      'Integrated password hashing, JWT authentication, and email-based OTP password recovery for secure access.',
      'Implemented revenue reports, sales analytics, and export support for Excel and PDF.',
    ],
    repoUrl: 'https://github.com/maianh-233/ConvenienceStore_Ver2',
    reviewUrl: 'freshmart',
    images: convenienceImages,
  },
  {
    name: 'Watch Store – Watch Store Management System',
    type: 'Team Project',
    role: 'Full-stack Developer',
    tech: 'C#, ASP.NET MVC, Entity Framework, MySQL, HTML, CSS, Bootstrap, jQuery',
    summary:
      'A watch store management system built with ASP.NET MVC to support product management, inventory, invoicing, repair services, and role-based access control.',
    responsibilities: [
      'Contributed to the Admin interface and integrated frontend components with backend APIs.',
      'Collaborated on modules for product management, inventory, invoicing, and repair services.',
      'Supported role-based access control and system reliability through testing and debugging.',
      'Worked with MySQL database schema design to ensure data consistency and stability.',
    ],
    repoUrl: 'https://github.com/langvuong09/WatchStore',
    reviewUrl: 'watch-store',
    images: watchStoreImages,
  },
  {
    name: 'Smart Food Street Guide Platform',
    type: 'Team Project',
    role: 'Full-stack Developer',
    tech: 'Next.js 15, TypeScript, TailwindCSS, Prisma, Playwright',
    summary:
      'A smart food discovery and management platform featuring GPS-based POI discovery, interactive maps, QR codes, and admin CMS management.',
    responsibilities: [
      'Participated in requirements analysis, system architecture, and database design.',
      'Built frontend and backend components with a service-based architecture in Next.js.',
      'Developed an Admin CMS for managing districts, POIs, food tours, media, audio guides, and translations.',
      'Implemented the user-facing web app for POI discovery, interactive maps, and QR code experiences.',
    ],
    repoUrl: 'https://github.com/Quin19FD/foodstreet-guide-platform',
    reviewUrl: 'foodstreet-guide-platform',
    images: foodStreetImages,
  },
];
