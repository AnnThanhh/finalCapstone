/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `BinhLuan`;
CREATE TABLE `BinhLuan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ma_cong_viec` int DEFAULT NULL,
  `ma_nguoi_binh_luan` int DEFAULT NULL,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(500) DEFAULT NULL,
  `sao_binh_luan` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `BinhLuan_Phong` (`ma_cong_viec`),
  KEY `BinhLuan_NguoiDung` (`ma_nguoi_binh_luan`),
  CONSTRAINT `BinhLuan_NguoiDung` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung` (`id`),
  CONSTRAINT `BinhLuan_Phong` FOREIGN KEY (`ma_cong_viec`) REFERENCES `Phong` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `DatPhong`;
CREATE TABLE `DatPhong` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ma_phong` int DEFAULT NULL,
  `ngay_den` datetime DEFAULT NULL,
  `ngay_di` datetime DEFAULT NULL,
  `so_luong_khach` int DEFAULT NULL,
  `ma_nguoi_dat` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `DatPhong_Phong` (`ma_phong`),
  KEY `DatPhong_NguoiDung` (`ma_nguoi_dat`),
  CONSTRAINT `DatPhong_NguoiDung` FOREIGN KEY (`ma_nguoi_dat`) REFERENCES `NguoiDung` (`id`),
  CONSTRAINT `DatPhong_Phong` FOREIGN KEY (`ma_phong`) REFERENCES `Phong` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `NguoiDung`;
CREATE TABLE `NguoiDung` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `pass_word` varchar(200) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `birth_day` varchar(200) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Phong`;
CREATE TABLE `Phong` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_phong` varchar(200) DEFAULT NULL,
  `khach` int DEFAULT NULL,
  `phong_ngu` int DEFAULT NULL,
  `giuong` int DEFAULT NULL,
  `phong_tam` int DEFAULT NULL,
  `mo_ta` varchar(500) DEFAULT NULL,
  `gia_tien` int DEFAULT NULL,
  `may_giat` tinyint(1) DEFAULT NULL,
  `ban_la` tinyint(1) DEFAULT NULL,
  `tivi` tinyint(1) DEFAULT NULL,
  `wifi` tinyint(1) DEFAULT NULL,
  `bep` tinyint(1) DEFAULT NULL,
  `do_xe` tinyint(1) DEFAULT NULL,
  `ho_boi` tinyint(1) DEFAULT NULL,
  `ban_ui` tinyint(1) DEFAULT NULL,
  `ma_vi_tri` int DEFAULT NULL,
  `hinh_anh` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ViTriPhong` (`ma_vi_tri`),
  CONSTRAINT `FK_ViTriPhong` FOREIGN KEY (`ma_vi_tri`) REFERENCES `ViTri` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `ViTri`;
CREATE TABLE `ViTri` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten_vi_tri` varchar(200) DEFAULT NULL,
  `tinh_thanh` varchar(200) DEFAULT NULL,
  `quoc_gia` varchar(200) DEFAULT NULL,
  `hinh_anh` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `BinhLuan` (`id`, `ma_cong_viec`, `ma_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`) VALUES
(1, 1, 2, '2024-07-01 10:00:00', 'Phòng rất đẹp và tiện nghi.', 5);
INSERT INTO `BinhLuan` (`id`, `ma_cong_viec`, `ma_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`) VALUES
(2, 2, 3, '2024-07-02 11:00:00', 'Dịch vụ tốt, giá cả hợp lý.', 4);
INSERT INTO `BinhLuan` (`id`, `ma_cong_viec`, `ma_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`) VALUES
(3, 3, 2, '2024-07-03 12:00:00', 'Phòng rộng rãi, sạch sẽ.', 5);
INSERT INTO `BinhLuan` (`id`, `ma_cong_viec`, `ma_nguoi_binh_luan`, `ngay_binh_luan`, `noi_dung`, `sao_binh_luan`) VALUES
(4, 4, 3, '2024-07-04 13:00:00', 'Rất hài lòng về chất lượng.', 5),
(5, 5, 2, '2024-07-05 14:00:00', 'Giá phòng hơi cao so với mặt bằng chung.', 3),
(6, 6, 3, '2024-07-06 15:00:00', 'Phòng khá ổn, nhưng cần cải thiện wifi.', 4),
(7, 7, 2, '2024-07-07 16:00:00', 'Phòng thoáng mát, đầy đủ tiện nghi.', 5),
(8, 8, 3, '2024-07-08 17:00:00', 'Nhân viên nhiệt tình, thân thiện.', 4),
(9, 9, 2, '2024-07-09 18:00:00', 'Phòng có view đẹp, sạch sẽ.', 5),
(10, 10, 3, '2024-07-10 19:00:00', 'Không gian yên tĩnh, thích hợp nghỉ ngơi.', 5);

INSERT INTO `DatPhong` (`id`, `ma_phong`, `ngay_den`, `ngay_di`, `so_luong_khach`, `ma_nguoi_dat`) VALUES
(41, 2, '2024-07-07 15:00:46', '2024-07-07 15:00:46', 2, 2);
INSERT INTO `DatPhong` (`id`, `ma_phong`, `ngay_den`, `ngay_di`, `so_luong_khach`, `ma_nguoi_dat`) VALUES
(42, 2, '2024-07-03 15:00:00', '2024-07-07 11:00:00', 1, 3);
INSERT INTO `DatPhong` (`id`, `ma_phong`, `ngay_den`, `ngay_di`, `so_luong_khach`, `ma_nguoi_dat`) VALUES
(43, 3, '2024-07-04 16:00:00', '2024-07-08 10:00:00', 4, 2);
INSERT INTO `DatPhong` (`id`, `ma_phong`, `ngay_den`, `ngay_di`, `so_luong_khach`, `ma_nguoi_dat`) VALUES
(44, 4, '2024-07-05 13:00:00', '2024-07-09 14:00:00', 6, 3),
(45, 5, '2024-07-06 12:00:00', '2024-07-10 13:00:00', 1, 2),
(46, 6, '2024-07-07 11:00:00', '2024-07-11 12:00:00', 2, 3),
(47, 7, '2024-07-08 10:00:00', '2024-07-12 11:00:00', 2, 2),
(48, 8, '2024-07-09 09:00:00', '2024-07-13 10:00:00', 2, 3),
(49, 9, '2024-07-10 08:00:00', '2024-07-14 09:00:00', 2, 2),
(50, 10, '2024-07-11 07:00:00', '2024-07-15 08:00:00', 2, 3);

INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `avatar`) VALUES
(2, 'at', 'trinhanthanhtest@gmail.com', '$2b$10$2rvbAdSD72Ad4OCtogG9ROpGQLy0LKcB7XqNTuCyZMvYkhNaFYAia', '', '', '', 'USER', '/public/img/avt/{file.filename}');
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `avatar`) VALUES
(3, 'at', 'trinhanthanhtest1@gmail.com', '$2b$10$TtP.SFCyxD/Q84MUYxnlDunP44mdFE6hFsI/y9f1c5fX0PaEbi3GW', '', '', '', 'USER', NULL);
INSERT INTO `NguoiDung` (`id`, `name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `role`, `avatar`) VALUES
(4, 'at', 'trinhanthanh@gmail.com', '$2b$10$FQX7Ltbf.tzYi2MU0fehwenZD7lmvIq6IbuJ1lqDF8GQKoQyqgQIy', '', '', '', 'ADMIN', NULL);

INSERT INTO `Phong` (`id`, `ten_phong`, `khach`, `phong_ngu`, `giuong`, `phong_tam`, `mo_ta`, `gia_tien`, `may_giat`, `ban_la`, `tivi`, `wifi`, `bep`, `do_xe`, `ho_boi`, `ban_ui`, `ma_vi_tri`, `hinh_anh`) VALUES
(1, 'Phòng Deluxe', 2, 1, 1, 1, 'Phòng sang trọng với đầy đủ tiện nghi hiện đại.', 1000000, 1, 1, 1, 1, 1, 1, 0, 1, 1, '/public/img/phong/1720353200507_biet-thu-don-lap.jpeg');
INSERT INTO `Phong` (`id`, `ten_phong`, `khach`, `phong_ngu`, `giuong`, `phong_tam`, `mo_ta`, `gia_tien`, `may_giat`, `ban_la`, `tivi`, `wifi`, `bep`, `do_xe`, `ho_boi`, `ban_ui`, `ma_vi_tri`, `hinh_anh`) VALUES
(2, 'Phòng Standard', 2, 1, 1, 1, 'Phòng tiêu chuẩn với các tiện nghi cơ bản.', 500000, 0, 0, 1, 1, 0, 1, 0, 0, 2, 'standard.jpg');
INSERT INTO `Phong` (`id`, `ten_phong`, `khach`, `phong_ngu`, `giuong`, `phong_tam`, `mo_ta`, `gia_tien`, `may_giat`, `ban_la`, `tivi`, `wifi`, `bep`, `do_xe`, `ho_boi`, `ban_ui`, `ma_vi_tri`, `hinh_anh`) VALUES
(3, 'Phòng Suite', 4, 2, 2, 2, 'Phòng Suite rộng rãi và sang trọng với hai phòng ngủ.', 2000000, 1, 1, 1, 1, 1, 1, 1, 1, 3, 'suite.jpg');
INSERT INTO `Phong` (`id`, `ten_phong`, `khach`, `phong_ngu`, `giuong`, `phong_tam`, `mo_ta`, `gia_tien`, `may_giat`, `ban_la`, `tivi`, `wifi`, `bep`, `do_xe`, `ho_boi`, `ban_ui`, `ma_vi_tri`, `hinh_anh`) VALUES
(4, 'Phòng Family', 6, 3, 3, 2, 'Phòng gia đình rộng rãi với nhiều tiện nghi.', 3000000, 1, 1, 1, 1, 1, 1, 1, 1, 4, 'family.jpg'),
(5, 'Phòng Single', 1, 1, 1, 1, 'Phòng đơn nhỏ gọn và tiện nghi.', 300000, 0, 0, 1, 1, 0, 1, 0, 0, 5, 'single.jpg'),
(6, 'Phòng Twin', 2, 1, 2, 1, 'Phòng đôi với hai giường đơn.', 600000, 0, 1, 1, 1, 0, 1, 0, 1, 1, 'twin.jpg'),
(7, 'Phòng Double', 2, 1, 1, 1, 'Phòng đôi với một giường đôi.', 700000, 0, 1, 1, 1, 0, 1, 0, 1, 2, 'double.jpg'),
(8, 'Phòng Executive', 2, 1, 1, 1, 'Phòng Executive với tiện nghi cao cấp.', 1200000, 1, 1, 1, 1, 1, 1, 0, 1, 3, 'executive.jpg'),
(9, 'Phòng Superior', 2, 1, 1, 1, 'Phòng Superior với diện tích lớn và tiện nghi.', 800000, 1, 1, 1, 1, 1, 1, 0, 1, 4, 'superior.jpg'),
(10, 'Phòng VIP', 2, 1, 1, 1, 'Phòng VIP sang trọng bậc nhất.', 1500000, 1, 1, 1, 1, 1, 1, 1, 1, 5, 'vip.jpg');

INSERT INTO `ViTri` (`id`, `ten_vi_tri`, `tinh_thanh`, `quoc_gia`, `hinh_anh`) VALUES
(1, 'Hà Nội', 'Hà Nội', 'Việt Nam', 'string');
INSERT INTO `ViTri` (`id`, `ten_vi_tri`, `tinh_thanh`, `quoc_gia`, `hinh_anh`) VALUES
(2, 'TP. Hồ Chí Minh', 'TP. Hồ Chí Minh', 'Việt Nam', 'tphochiminh.jpg');
INSERT INTO `ViTri` (`id`, `ten_vi_tri`, `tinh_thanh`, `quoc_gia`, `hinh_anh`) VALUES
(3, 'Hải Phòng', 'Hải Phòng', 'Việt Nam', 'haiphong.jpg');
INSERT INTO `ViTri` (`id`, `ten_vi_tri`, `tinh_thanh`, `quoc_gia`, `hinh_anh`) VALUES
(4, 'Đà Nẵng', 'Đà Nẵng', 'Việt Nam', 'danang.jpg'),
(5, 'Cần Thơ', 'Cần Thơ', 'Việt Nam', 'cantho.jpg'),
(6, 'An Giang', 'An Giang', 'Việt Nam', 'angiang.jpg'),
(7, 'Bà Rịa - Vũng Tàu', 'Bà Rịa - Vũng Tàu', 'Việt Nam', 'baria-vungtau.jpg'),
(8, 'Bắc Giang', 'Bắc Giang', 'Việt Nam', 'bacgiang.jpg'),
(9, 'Bắc Kạn', 'Bắc Kạn', 'Việt Nam', 'backan.jpg'),
(10, 'Bạc Liêu', 'Bạc Liêu', 'Việt Nam', 'baclieu.jpg'),
(11, 'Bắc Ninh', 'Bắc Ninh', 'Việt Nam', 'bacninh.jpg'),
(12, 'Bến Tre', 'Bến Tre', 'Việt Nam', 'bentre.jpg'),
(13, 'Bình Định', 'Bình Định', 'Việt Nam', 'binhdinh.jpg'),
(14, 'Bình Dương', 'Bình Dương', 'Việt Nam', 'binhduong.jpg'),
(15, 'Bình Phước', 'Bình Phước', 'Việt Nam', 'binhphuoc.jpg'),
(16, 'Bình Thuận', 'Bình Thuận', 'Việt Nam', 'binhthuan.jpg'),
(17, 'Cà Mau', 'Cà Mau', 'Việt Nam', 'camau.jpg'),
(18, 'Cao Bằng', 'Cao Bằng', 'Việt Nam', 'caobang.jpg'),
(19, 'Đắk Lắk', 'Đắk Lắk', 'Việt Nam', 'daklak.jpg'),
(20, 'Đắk Nông', 'Đắk Nông', 'Việt Nam', 'daknong.jpg'),
(21, 'Điện Biên', 'Điện Biên', 'Việt Nam', 'dienbien.jpg'),
(22, 'Đồng Nai', 'Đồng Nai', 'Việt Nam', 'dongnai.jpg'),
(23, 'Đồng Tháp', 'Đồng Tháp', 'Việt Nam', 'dongthap.jpg'),
(24, 'Gia Lai', 'Gia Lai', 'Việt Nam', 'gialai.jpg'),
(25, 'Hà Giang', 'Hà Giang', 'Việt Nam', 'hagiang.jpg'),
(26, 'Hà Nam', 'Hà Nam', 'Việt Nam', 'hanam.jpg'),
(27, 'Hà Tĩnh', 'Hà Tĩnh', 'Việt Nam', 'hatinh.jpg'),
(28, 'Hải Dương', 'Hải Dương', 'Việt Nam', 'haiduong.jpg'),
(29, 'Hậu Giang', 'Hậu Giang', 'Việt Nam', 'haugiang.jpg'),
(30, 'Hòa Bình', 'Hòa Bình', 'Việt Nam', 'hoabinh.jpg'),
(31, 'Hưng Yên', 'Hưng Yên', 'Việt Nam', 'hungyen.jpg'),
(32, 'Khánh Hòa', 'Khánh Hòa', 'Việt Nam', 'khanhhoa.jpg'),
(33, 'Kiên Giang', 'Kiên Giang', 'Việt Nam', 'kiengiang.jpg'),
(34, 'Kon Tum', 'Kon Tum', 'Việt Nam', 'kontum.jpg'),
(35, 'Lai Châu', 'Lai Châu', 'Việt Nam', 'laichau.jpg'),
(36, 'Lâm Đồng', 'Lâm Đồng', 'Việt Nam', 'lamdong.jpg'),
(37, 'Lạng Sơn', 'Lạng Sơn', 'Việt Nam', 'langson.jpg'),
(38, 'Lào Cai', 'Lào Cai', 'Việt Nam', 'laocai.jpg'),
(39, 'Long An', 'Long An', 'Việt Nam', 'longan.jpg'),
(40, 'Nam Định', 'Nam Định', 'Việt Nam', 'namdinh.jpg'),
(41, 'Nghệ An', 'Nghệ An', 'Việt Nam', 'nghean.jpg'),
(42, 'Ninh Bình', 'Ninh Bình', 'Việt Nam', 'ninhbinh.jpg'),
(43, 'Ninh Thuận', 'Ninh Thuận', 'Việt Nam', 'ninhthuan.jpg'),
(44, 'Phú Thọ', 'Phú Thọ', 'Việt Nam', 'phutho.jpg'),
(45, 'Phú Yên', 'Phú Yên', 'Việt Nam', 'phuyen.jpg'),
(46, 'Quảng Bình', 'Quảng Bình', 'Việt Nam', 'quangbinh.jpg'),
(47, 'Quảng Nam', 'Quảng Nam', 'Việt Nam', 'quangnam.jpg'),
(48, 'Quảng Ngãi', 'Quảng Ngãi', 'Việt Nam', 'quangngai.jpg'),
(49, 'Quảng Ninh', 'Quảng Ninh', 'Việt Nam', 'quangninh.jpg'),
(50, 'Quảng Trị', 'Quảng Trị', 'Việt Nam', 'quangtri.jpg'),
(51, 'Sóc Trăng', 'Sóc Trăng', 'Việt Nam', 'soctrang.jpg'),
(52, 'Sơn La', 'Sơn La', 'Việt Nam', 'sonla.jpg'),
(53, 'Tây Ninh', 'Tây Ninh', 'Việt Nam', 'tayninh.jpg'),
(54, 'Thái Bình', 'Thái Bình', 'Việt Nam', 'thaibinh.jpg'),
(55, 'Thái Nguyên', 'Thái Nguyên', 'Việt Nam', 'thainguyen.jpg'),
(56, 'Thanh Hóa', 'Thanh Hóa', 'Việt Nam', 'thanhhoa.jpg'),
(57, 'Thừa Thiên Huế', 'Thừa Thiên Huế', 'Việt Nam', 'thuathienhue.jpg'),
(58, 'Tiền Giang', 'Tiền Giang', 'Việt Nam', 'tiengiang.jpg'),
(59, 'Trà Vinh', 'Trà Vinh', 'Việt Nam', 'travinh.jpg'),
(60, 'Tuyên Quang', 'Tuyên Quang', 'Việt Nam', 'tuyenquang.jpg'),
(61, 'Vĩnh Long', 'Vĩnh Long', 'Việt Nam', 'vinhlong.jpg'),
(62, 'Vĩnh Phúc', 'Vĩnh Phúc', 'Việt Nam', 'vinhphuc.jpg'),
(63, 'Yên Bái', 'Yên Bái', 'Việt Nam', 'yenbai.jpg');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;