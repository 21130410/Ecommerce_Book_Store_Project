-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 30, 2025 lúc 12:54 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_cdweb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `address`
--

CREATE TABLE `address` (
  `id` bigint(20) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street_address` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `address_seq`
--

CREATE TABLE `address_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `address_seq`
--

INSERT INTO `address_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `level` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `parent_category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `level`, `name`, `parent_category_id`) VALUES
(1, 1, 'Sách thiếu nhi', 1),
(2, 1, 'Sách văn học', 1),
(3, 1, 'Sách lịch sử', 1),
(4, 1, 'Tâm lý kỹ năng', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories_seq`
--

CREATE TABLE `categories_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `categories_seq`
--

INSERT INTO `categories_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_at` datetime(6) DEFAULT current_timestamp(6),
  `parent_comment_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments_seq`
--

CREATE TABLE `comments_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `comments_seq`
--

INSERT INTO `comments_seq` (`next_val`) VALUES
(151);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_mobile` varchar(255) DEFAULT NULL,
  `payment_time` varchar(255) DEFAULT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `payment_status` int(11) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `customer_email`, `customer_mobile`, `payment_time`, `transaction_id`, `total_price`, `payment_status`, `shipping_address`, `order_status`, `user_id`) VALUES
(54, 'Nguyen Hoang Linh', 'nguyenlinhpd1@gmail.com', '033333333333', '20240623110249', 14473658, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602),
(55, 'Nguyen Hoang Linh', 'nguyenlinhpd1@gmail.com', '033333333333', '20240623110249', 14473658, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602),
(56, 'Nguyen Hoang Linh', 'nguyenlinhpd1@gmail.com', '033333333333', '20240623110630', 14473664, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602),
(57, 'Nguyen Hoang Linh', 'nguyenlinhpd1@gmail.com', '033333333333', '20240623110630', 14473664, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602),
(102, 'Nguyen Hoang Linh', 'nguyenlinhpd1@gmail.com', '033333333333', '20240623112852', 14473673, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602),
(103, 'Nguyen Hoang Linh', 'nguyenlinhpd1@gmail.com', '033333333333', '20240623112852', 14473673, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders_seq`
--

CREATE TABLE `orders_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `orders_seq`
--

INSERT INTO `orders_seq` (`next_val`) VALUES
(301);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(54, 54, 4, 1),
(55, 55, 4, 1),
(56, 56, 4, 1),
(57, 57, 4, 1),
(102, 102, 4, 1),
(103, 103, 4, 1),
(152, NULL, 4, 1),
(153, NULL, 4, 1),
(202, NULL, 4, 3),
(203, NULL, 6, 1),
(204, NULL, 4, 3),
(205, NULL, 6, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items_seq`
--

CREATE TABLE `order_items_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `order_items_seq`
--

INSERT INTO `order_items_seq` (`next_val`) VALUES
(301);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `id` bigint(20) NOT NULL,
  `create_at` datetime(6) DEFAULT NULL,
  `expiry_date` datetime(6) DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`id`, `create_at`, `expiry_date`, `token`, `user_id`) VALUES
(2, NULL, '2024-06-24 21:10:06.000000', 'a8eb67c3-9a19-4704-9dec-351d34ba00a3', 502),
(3, NULL, '2024-06-24 21:10:50.000000', '58d5c70d-4b01-47b8-9335-66785d7bcc3d', 502);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens_seq`
--

CREATE TABLE `password_reset_tokens_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `password_reset_tokens_seq`
--

INSERT INTO `password_reset_tokens_seq` (`next_val`) VALUES
(101);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment_information`
--

CREATE TABLE `payment_information` (
  `user_id` bigint(20) NOT NULL,
  `card_number` varchar(255) DEFAULT NULL,
  `cardholder_name` varchar(255) DEFAULT NULL,
  `cvv` varchar(255) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `create_at` datetime(6) DEFAULT current_timestamp(6),
  `description` varchar(255) DEFAULT NULL,
  `discounted_price` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `promotion_percent` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `brand`, `create_at`, `description`, `discounted_price`, `image_url`, `price`, `product_name`, `quantity`, `category_id`, `promotion_percent`) VALUES
(1, 'NXB Kim Đồng', '2024-04-20 10:00:00.000000', 'Trong hơn nửa thế kỉ kể từ ngày ra mắt bạn đọc lần đầu tiên năm 1941, \"Dế Mèn phiêu lưu kí\" là một trong những sáng tác tâm đắc nhất của nhà văn Tô Hoài.', 130000, 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_182274.jpg', 150000, 'Dế Mèn Phiêu Lưu Ký (Tái Bản 2020)', 50, 1, NULL),
(3, 'NXB Kim Đồng\n\n', '2024-04-20 12:00:00.000000', 'Mỗi câu chuyện cổ tích đều mang theo mình một bài học về phẩm chất tốt như: trung thực, can đảm, biết quan tâm và chia sẻ, giúp đỡ lẫn nhau trong cuộc sống, không ngại khó khăn gian khổ,..', 130000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8936067608038.jpg', 150000, 'Truyện Cổ Tích Thế Giới Song Ngữ Hay Nhất\n', 20, 1, NULL),
(4, 'NXB Kim Đồng\n\n', '2024-04-20 13:00:00.000000', '“Quiz! Khoa học kì thú” là bộ tranh truyện học tập, phổ biến kiến thức khoa học dưới dạng tranh truyện màu hài hước.\n\n“Quiz! Khoa học kì thú” được xây dựng dưới hình thức Hỏi và Trả lời, đây là cách ngắn gọn và súc tích nhất đi đến bản chất của sự việc mộ', 139000, 'https://cdn1.fahasa.com/media/catalog/product/q/u/quiz_-khoa-hoc-ki-thu_khoa-hoc-dieu-tra_bia.jpg', 150000, 'Quiz! Khoa Học Kì Thú - Khoa Học Điều Tra', 10, 1, NULL),
(5, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Danh Nhân Thế Giới: Edison (Tái Bản 2022)\n\nThuở nhỏ, nhà phát minh Edison là một cậu bé hay tò mò. Để trứng nở ra gà con, cậu đã ấp trứng như gà mái. Cậu cho bạn uống axít đun sôi với hi vọng bạn bay được lên trời, suýt nữa thì nguy to. Cậu luôn làm khó n', 142000, 'https://cdn1.fahasa.com/media/catalog/product/d/a/danh-nhan-the-gioi---edison.jpg', 150000, 'Danh Nhân Thế Giới - Edison (Tái Bản 2022)\n', 15, 1, NULL),
(6, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Có vô số câu hỏi “vì sao” quanh ta mỗi phút giây. Mỗi ngày giải đáp được một câu trong số ấy thì thú vị biết mấy, kiến thức cùng lòng ham học hỏi trong ta sẽ lớn lên dần. Cuốn sách này là người bạn đắc lực đem đến những điều ngộ nghĩnh ta thường bắt gặp b', 243000, 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_217484.jpg', 250000, 'Gi Gỉ Gì Gi, Cái Gì Cũng Biết - 130 Bí Mật Vui Nhất Cho Tuổi Tiểu Học', 15, 1, NULL),
(7, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Chắc các bạn đã được nghe chuyện Newton nhìn thấy quả táo rơi xuống đất và phát hiện ra “Lực vạn vật hấp dẫn”. Newton còn phát hiện ra rằng Mặt Trăng không rơi vào Trái Đất như quả táo là do khoảng cách và trọng lực mà lực hấp dẫn tác động khác nhau.', 90000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935244869125.jpg', 100000, 'Danh Nhân Thế Giới - Newton (Tái Bản 2022)', 15, 1, NULL),
(8, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Nội dung chính của câu chuyện không lột tả những cảnh chiến trường đẫm máu của thế chiến II, những cảnh giết chóc man rợ… mà đây là câu chuyện về Liesel, cô bé gái mồ côi được làm con nuôi tại phố Thiên Đàng thuộc thành phố Munich.', 273000, 'https://cdn1.fahasa.com/media/catalog/product/2/0/2025_01_06_14_31_09_1-390x510_1.jpg', 290000, 'Kẻ Trộm Sách (Tái Bản 2024)', 15, 2, NULL),
(9, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Một tác phẩm đang được dịch và giới thiệu tại Nhật Bản (theo thông tin từ các báo)…', 175000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8934974178637.jpg', 200000, 'Mắt Biếc (Tái Bản 2022)', 15, 2, NULL),
(10, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', '“Giá mà bọn chúng đưa tôi sang phía bên trái, tôi đã chỉ chết có một lần, chứ không phải chết từng phút, từng giờ, từng ngày. Và không người nào khác phải chết thay tôi.”', 450000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935069923415.jpg', 500000, 'Bác Hana', 15, 2, NULL),
(11, 'NXB Văn Học', '2024-04-20 14:00:00.000000', '“Túp Lều Bác Tôm” là tiểu thuyết chống chế độ nô lệ của nhà văn Mỹ Harriet Beecher Stowe. Tác phẩm kể về cuộc đời thống khổ của một người nô lệ da đen là bác Tôm với chuỗi ngày đen tối. ', 300000, 'https://cdn1.fahasa.com/media/catalog/product/t/u/tup-leu-bac-tom-3d---copy-650x650_1.jpg', 350000, 'Túp Lều Bác Tôm (Tái Bản 2018)', 15, 2, NULL),
(12, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Bảy câu chuyện như bảy lối rẽ vào mê cung bí ẩn, nơi quá khứ và hiện tại đan xen, nơi những lời nguyền, những bí mật bị chôn vùi bỗng trỗi dậy, lôi cuốn nhân vật vào trò chơi định mệnh không lối thoát. Một thế giới Gothic huyễn hoặc đang chờ bạn khám phá…', 200000, 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_y-chuy_n-k_-gothic---bia-mem.jpg', 250000, 'Bảy Chuyện Kể Gothic', 15, 2, NULL),
(13, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Giữa bom đạn chiến tranh, khi mọi thứ đều có thể biến thành tro bụi, điều gì mới thực sự là vĩnh cửu? Một hiệu sách nhỏ bé giữa lòng London vẫn sáng đèn, nơi những trang sách không chỉ cứu rỗi tâm hồn mà còn thắp lên hy vọng. Liệu văn chương có thể trở th', 400000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235242203.jpg', 495000, 'Thư Gửi Nhà Thơ Trẻ', 15, 2, NULL),
(14, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Mồ côi cha từ khi còn nhỏ, Cedric Errol sống nương tựa cùng mẹ trong một ngôi nhà nhỏ giữa con phố yên tĩnh ở New York.', 300000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235240766.jpg', 333000, 'Công Tử Mồ Côi', 15, 2, NULL),
(15, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Mẹ cho con trời đất\n\nMẹ cho con cỏ hoa\n\nMẹ cho con tất cả', 330000, 'https://cdn1.fahasa.com/media/catalog/product/t/r/trang-may-toc-me_bia.jpg', 345000, 'Trắng Mây Tóc Mẹ', 15, 2, NULL),
(16, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Ở độ tuổi ngoài đôi mươi, đã có lúc Tâm Bùi từng ngờ vực bản thân, từng chạm đáy thất vọng. Nhưng trong một khoảnh khắc lóe sáng, Tâm quyết định thay đổi, bằng cách giản dị nhưng cũng đầy thách thức: lên đường.', 180000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235244504.jpg', 220000, 'Bụi Đường Tuổi Trẻ', 15, 2, NULL),
(17, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', '80 Ngày Vòng Quanh Thế Giới không chỉ là tiểu thuyết nổi tiếng gắn với tên tuổi nhà văn Jules Verne, mà còn là một trong những tác phẩm truyền cảm hứng quan trọng cho rất nhiều chuyến đi thực tế khám phá một vòng trái đất ngay trong thế kỷ XIX và tiếp nối', 350000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935236434881.jpg', 500000, '80 Ngày Vòng Quanh Thế Giới', 15, 2, NULL),
(18, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Chuyện Kể Về Mười Cô Gái Ngã Ba Đồng Lộc là câu chuyện có thực về mười cô gái thanh niên xung phong đã khắc ghi tên mình trên một chặng đường lịch sử của dân tộc.', 350000, 'https://cdn1.fahasa.com/media/catalog/product/n/h/nhung-anh-hung-tre-tuoi_chuyen-ke-ve-muoi-co-gai-nga-ba-dong-loc_bia_tb-2024.jpg', 390000, 'Những Anh Hùng Trẻ Tuổi (Tron Bộ)', 15, 3, NULL),
(19, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Triều đại Minh Trị là giai đoạn khai sinh ra nước Nhật mới, chuyển từ quốc gia phong kiến lạc hậu sang một xã hội công nghiệp lập hiến hiện đại, tạo nên một cuộc duy tân thần kì mà cho đến nay vẫn là mô hình châu Á lôi cuốn. ', 300000, 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_9770.jpg', 350000, 'Thiên Hoàng Minh Trị (Bìa Cứng)', 15, 3, NULL),
(20, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Là một thành viên trong ngôi nhà chung Đông Nam Á, song Mianma vẫn là một quốc gia còn nhiều điều mới mẻ đối với người Việt Nam. Nhằm giúp bạn đọc có điều kiện nghiên cứu và tìm hiểu về con người, lịch sử, chính trị, kinh tế, văn hóa, xã hội, những tiềm n', 450000, 'https://cdn1.fahasa.com/media/catalog/product/z/3/z3182972865079_11b0121eced383001505620e7eacf215_1.jpg', 490000, 'Mianma - Lịch Sử Và Hiện Tại', 15, 3, NULL),
(21, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', '“Tiếng sấm Điện Biên Phủ mãi mãi còn rền vang.\r\nViệt Nam – Hồ Chí Minh – Điện Biên Phủ!\r\nLoài người cùng reo vui với Việt Nam.\r\nViệt Nam – Hồ Chí Minh – Điện Biên Phủ!\r\nNhững tiếng nói khẳng định quyền sống, quyền làm người của mọi dân tộc.\r\nNhững tiếng đ', 320000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935352607817.jpg', 333000, 'Sách Kỉ Niệm 70 Năm Chiến Thắng Điện Biên Phủ (Trọn Bộ)', 15, 3, NULL),
(22, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Dân tộc Việt Nam anh hùng đã trải qua hơn bốn ngàn năm lịch sử dựng nước và giữ nước. Với ý chí quật cường ông cha ta đã viết nên những trang sử vàng chói lói làm vẻ vang cho dân tộc ta, đất nước ta.', 250000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935095632008.jpg', 300000, 'Các Triều Đại Việt Nam', 15, 3, NULL),
(23, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Dòng sử Việt trôi xuôi từ thượng nguồn lịch sử, thuở cha Lạc Long Quân kết duyên cùng mẹ Âu Cơ.\r\nTừ quá khứ xa xưa đẫm màu huyền tích, nước Việt đã trải qua xiết bao biến cố thăng trầm.\r\nNhững dấu chân cha ông từ ngày mở nước vẫn còn lưu lại trong thẳm sâ', 450000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935244874389.jpg', 460000, 'Sách Lược Sử Nước Việt Bằng Tranh (Trọn bộ)\r\n', 15, 3, NULL),
(29, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Giận - sách hay nên đọc để chuyển hóa sân hận thành năng lượng tích cực', 180000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8932000133735_1.jpg', 200000, 'Giận (Tái Bản 2023)', 15, 4, NULL),
(30, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Đại dương đen là hành trình nhẫn nại của tác giả Đặng Hoàng Giang cùng người trầm cảm,\r\nkể cho chúng ta câu chuyện vừa dữ dội vừa tê tái về những số phận, mà vì định kiến và sự thiếu hiểu biết của chính gia đình và xã hội, đã bị tước đi quyền được sống vớ', 330000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8938539539505.jpg', 345000, 'Đại Dương Đen (Tái Bản 2025)', 15, 4, NULL),
(31, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Trong sách là những câu chuyện của các chàng trai cô gái trẻ tuổi đang kiên trì tìm kiếm tình yêu và chính mình giữa cuộc sống xô bồ bằng tất thảy sự nhiệt tình, yêu đời. Họ - chỉ là những con người bình thường, chúng ta - có thể nhìn thấy bóng dáng của b', 620000, 'https://cdn1.fahasa.com/media/catalog/product/t/c/tch_-l_-t_i-d_m-kh_c-bi_tuntitled.jpg', 650000, 'Chỉ Là Tôi Dám Khác Biệt', 15, 4, NULL),
(32, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Ai cũng có thể hạnh phúc ngay từ giây phút này. [...]Chỉ có điều, chúng ta không thể hưởng thụ hạnh phúc nếu chỉ đứng yên tại chỗ.', 410000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235244535.jpg', 440000, 'Dám Hạnh Phúc', 15, 4, NULL),
(33, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Lối sống sâu không quan tâm đến bạn đang mặc gì, dùng điện thoại đời nào, hay có bao nhiêu tiền trong tài khoản. Vì thiếu tự tin vào thế giới nội tâm nên chúng ta mới cần đến những thứ bên ngoài đó để chứng minh bản thân mình.', 550000, 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a1-deeplife-ttph.jpg', 560000, 'Deep Life - Sống Sâu Trong Thời Đại Nhanh', 15, 4, NULL),
(34, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Cuốn sách “Hiểu Mình Chọn Nghề” giúp bạn xác định, định vị bản thân và tìm ra nghề nghiệp phù hợp với đam mê và năng lực cá nhân', 620000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390355.jpg', 650000, 'Hiểu Mình Chọn Nghề', 15, 4, NULL),
(35, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Bạn có đang kiệt sức khi phải cố gắng làm hài lòng tất cả mọi người xung quanh?', 410000, 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235244559.jpg', 440000, 'Bớt Nhạy Cảm Để Sống Thanh Thản Hơn', 15, 4, NULL),
(36, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', '5% CHANGE - THAY ĐỔI NHỎ, THÀNH TỰU LỚN: “HƯỚNG DẪN TỰ TRỢ GIÚP” HỮU ÍCH CHO NHỮNG AI CÓ KHÚC MẮC TÂM LÝ CẦN ĐƯỢC GIẢI QUYẾT', 550000, 'https://cdn1.fahasa.com/media/catalog/product/5/_/5_-change-1.jpg', 560000, '5% Change - Thay Đổi Nhỏ, Thành Tựu Lớn', 15, 4, NULL),
(37, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', '“Giác Ngộ” là một trong những tác phẩm tiêu biểu, truyền tải trọn vẹn tinh thần triết lý sống đích thực của Osho – bậc thầy tâm linh nổi tiếng thế giới', 300000, 'https://cdn1.fahasa.com/media/catalog/product/o/s/osho-giac-ngo---full-------t1--2025---outline-02-_1_.jpg', 345000, 'Giác Ngộ', 15, 4, NULL),
(38, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 630000, 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_i-tr_c-_-tccx.jpg', 650000, 'Tự Chủ Cảm Xúc, Làm Chủ Tương Lai', 15, 4, NULL),
(39, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Là chủ đề được bàn tán bởi đông đảo người dùng trên các trang mạng xã hội', 400000, 'https://cdn1.fahasa.com/media/catalog/product/m/a/manifest-tinh-yeu-bia.jpg', 440000, 'Manifest Tình Yêu', 15, 4, NULL),
(40, 'NXB Giáo Dục', '2024-04-20 14:00:00.000000', 'Trở thành Diễn giả ư?\n\nMột ý tưởng điên rồ, bản thân mình làm sao mà có thể trở thành Diễn giả được?', 270000, 'https://cdn1.fahasa.com/media/flashmagazine/images/page_images/bi_mat_nghe_dien_gia/2024_06_11_10_32_43_1-390x510.jpg', 280000, 'Bí Mật Nghề Diễn Giả', 15, 4, NULL),
(41, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Phụ nữ luôn là điều bí ẩn đối với đàn ông. Hiểu được suy nghĩ, cảm xúc và hành vi của họ luôn là một thách thức đối với cánh mày râu.', 318000, 'https://cdn1.fahasa.com/media/catalog/product/a/n/anh-bia-tam-ly-tinh-nu.jpg', 345000, 'Tâm Lý Tính Nữ - Hiểu Phụ Nữ, Hiểu Cả Thế Giới', 15, 4, NULL),
(42, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Cuộc đời của mỗi chúng ta là một quá trình thay đổi từng ngày và luôn thường trực những câu hỏi lớn về sự tồn tại của bản thân, về ý nghĩa của cuộc sống', 420000, 'https://cdn1.fahasa.com/media/catalog/product/t/i/timminhtrongthanhphonoitam1.jpg', 440000, 'Tìm Mình Trong Thành Phố Nội Tâm', 15, 4, NULL),
(43, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Bạn đã bao giờ tự hỏi tại sao đàn ông và phụ nữ lại có những hành vi và cách giao tiếp vô cùng khác biệt chưa?', 510000, 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-tr_c-t_m-l_-kh_c-bi_t-gi_a-_n-_ng-v_-ph_-n_.jpg', 560000, 'Tâm Lý Khác Biệt Giữa Đàn Ông Và Phụ Nữ', 15, 4, NULL),
(44, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Bạn đã bao giờ yêu một kẻ toxic luôn khiến bạn tin rằng mọi lỗi lầm đều do mình, rằng bạn mới là người tồi tệ trong mối quan hệ chưa?', 600000, 'https://cdn1.fahasa.com/media/catalog/product/b/i/bia_muon-kieu-red-flag.jpg', 650000, 'Muôn Kiểu Redflag', 15, 4, NULL),
(45, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Bạn thường lúng túng khi nhận được lời khen ngợi, lo sợ rằng người khác sẽ nghĩ bạn không đủ năng lực nếu bạn làm sai điều gì đó', 415000, 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a_t_m-l_-h_c-k_-m_o-danh.jpg', 440000, 'Tâm Lý Học Kẻ Mạo Danh - 11 Chỉ Dẫn Nhận Diện Và Giải Quyết Những Phản Kháng Tiềm Thức', 15, 4, NULL),
(46, 'NXB Kim Đồng', '2024-04-20 14:00:00.000000', 'Trong cuộc sống thường ngày, chúng ta thường nổi giận vì nhiều nguyên do: công việc không suôn sẻ, chúng ta tức giận.', 330000, 'https://cdn1.fahasa.com/media/catalog/product/-/t/-tin-xu_t-b_n-_i_m-t_nh-n_ng-gi_nb_a-1_1.jpg', 345000, 'Điềm Tĩnh Và Nóng Giận', 15, 4, NULL),
(47, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Bạn có muốn giành phần thắng cuối cùng trong các cuộc tranh luận?', 520000, 'https://cdn1.fahasa.com/media/catalog/product/u/n/untitledthaotungtamly.jpg', 560000, 'Thuật Thao Túng - Góc Tối Ẩn Sau Mỗi Câu Nói', 15, 4, NULL),
(48, 'NXB Văn Học', '2024-04-20 14:00:00.000000', 'Không chỉ là 1 chiếc ốp bảo vệ đơn thuần, ốp lưng UNIQ Transforma cho iPhone kiêm luôn nhiệm vụ của giá đỡ tiện lợi, sử dụng được với tư thế ngang hoặc dọc, thích hợp với nhiều nhu cầu sử dụng khác nhau.\nCơ thể của con người chỉ có một, nhưng “cơ thể” và ', 410000, 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-1---t_-_i_n-tr_i-tim-600.jpg', 440000, 'Từ Điển Trái Tim\n', 15, 4, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_seq`
--

CREATE TABLE `products_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `products_seq`
--

INSERT INTO `products_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ratings`
--

CREATE TABLE `ratings` (
  `id` bigint(20) NOT NULL,
  `rating` double DEFAULT NULL,
  `product_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ratings_seq`
--

CREATE TABLE `ratings_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `ratings_seq`
--

INSERT INTO `ratings_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `user_name`, `password`, `mobile`, `full_name`, `role`, `created_at`) VALUES
(4, 'nguyenlinhpd1111@gmail.com', 'nguyenlinhpd1111', '$2a$10$kWTJIgAnsqT98s9J.Vlv5.XpNlO7zz1a9KDWUOzWtoy5IeYnKIvm2', '0931269904', '123', 'ROLE_USER', NULL),
(5, 'nguyenlinhpd11111@gmail.com', 'nguyenlinhpd11111', '$2a$10$E7FuwjkbhmCWrSDI5i/08uoNLzJP1s32ctJbmxBzozbBM1IzJ4nSW', '0931269904', '123', 'ROLE_USER', NULL),
(7, 'nguyenlinhpd11111111@gmail.com', 'nguyenlinhpd11111111', '$2a$10$Wx12Nz3ttiMQ6bZCMAgKoul4MBXVaZaV5IxcLblPzLerOjRj40xnK', 'nguyenlinhpd11111@gmail.com', '123', 'ROLE_USER', NULL),
(8, 'nguyenlinhpd1111111@gmail.com', 'nguyenlinhpd1111111', '$2a$10$LpzzY/sjqheemTSj4VA8Fuh76uXIR846qo4ii2pz4kJ17.CrYRqne', 'nguyenlinhpd1111111@gmail.com', '123', 'ROLE_USER', NULL),
(9, 'nguyenlinhpd2@gmail.com', 'nguyenlinhpd2', '$2a$10$zkk95Z3WYImXrKfWB4eYQe67hMEiI5V8XhSqhuOOfC8ZxICCewaUO', 'nguyenlinhpd11111@gmail.com', '123', 'ROLE_USER', NULL),
(10, 'nguyenlinhpd22@gmail.com', 'nguyenlinhpd22', '$2a$10$HKAa2vH1DIEKDGhbPlzcuu5WnYFZLFxSOd5JeTkjkDn5UV2ARRYW.', 'nguyenlinhpd11111@gmail.com', '123', 'ROLE_USER', NULL),
(11, 'nguyenlinhpd111121@gmail.com', 'nguyenlinhpd111121', '$2a$10$pvU9vlqGBlDHXpIfj3gQguq9OOyV2IUEd9XjXQt7FbNVzIWiJXtnq', 'nguyenlinhpd11111@gmail.com', '123', 'ROLE_USER', NULL),
(13, 'nguyenlinhpd34@gmail.com', 'nguyenlinhpd34', '$2a$10$hdkKDysnEAs1HkZsvOLVeeASublw1YMf1S/cqWf0oMFpHLzBjMB7m', '0931269904', '123', 'ROLE_USER', NULL),
(14, 'nguyenlinhpd6@gmail.com', 'nguyenlinhpd6', '$2a$10$15uhUdTBAEWJS/xTl3p1suK44b43gqBkz4xRCKstthS2jEorWpqiy', '123', '123', 'ROLE_USER', NULL),
(15, 'nguyenlinhp@gmail.com', 'nguyenlinhp', '$2a$10$2oibT5h77yS.I9IEqqnTru8KfuLYj4nx1lrn.uednL4WVTSag63WC', 'nguyenlinhpd11111@gmail.com', '123', 'ROLE_USER', NULL),
(16, 'nguyenlinhp1@gmail.com', 'nguyenlinhp1', '$2a$10$bcQvGXu8pnrGd7zWcXwCOumQFBwwbUWfTSjCGCBfGHH7bCLMTSeHi', 'nguyenlinhpd11111@gmail.com', '123', 'ROLE_USER', NULL),
(17, 'nguyenlinhpd1111112@gmail.com', 'nguyenlinhpd1111112', '$2a$10$N5Em8uYSY/E5KjuOJSMVxeZ.c3Qd2JlsJOlGYRZ/.7lwbOonsI306', 'nguyenlinhpd1111@gmail.com', '123', 'ROLE_USER', NULL),
(18, 'nguyenlinhpd1a@gmail.com', 'nguyenlinhpd1a', '$2a$10$bT1V689TSfidWeSjxBzmSuyhwa2xEBau9L/DrQF9NgAkCfATW/KCy', '123123123', '123', 'ROLE_USER', NULL),
(19, 'nguyenlinhpd1awe@gmail.com', 'nguyenlinhpd1awe', '$2a$10$oYnb7E7rghmwdSaY1uzPuODT6Fg42xySCalcDaxhQrgic.ewS/zou', '123123123', '123', 'ROLE_USER', NULL),
(20, 'nguyenlinhpad1@gmail.com', 'nguyenlinhpad1', '$2a$10$dpvqaaz1SnFrnR74nPbtJ.HE5fs1TOgSL7P4QFOTrY6gHjfdDiSoa', '123123123', '123', 'ROLE_USER', NULL),
(502, 'tranminh80802@gmail.com', 'tranminh80802', '$2a$10$9PRzwwO0VlJNj0J4iVphg.2fF1b4PMyG8mTkshpq0ENrSq7NloOJW', '0378765888', 'Tran Duc Minh', 'ROLE_USER', NULL),
(602, 'tranmin1122@gmail.com', 'tranmin1122', '$2a$10$suNAU1oVmMdUjPBLDMPs2OY0vF2I7T/H54JMEJ1Av/wsrLKD6YhGm', '0378765888', 'Tran Duc Minh', 'ROLE_USER', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(101);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FK6i66ijb8twgcqtetl8eeeed6v` (`user_id`) USING BTREE;

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FK9il7y6fehxwunjeepq0n7g5rd` (`parent_category_id`) USING BTREE;

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`) USING BTREE;

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FKbioxgbv59vetrxe0ejfubep1w` (`order_id`) USING BTREE,
  ADD KEY `FKocimc7dtr037rh4ls4l95nlfi` (`product_id`) USING BTREE;

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `UK_71lqwbwtklmljk3qlsugr1mig` (`token`) USING BTREE,
  ADD KEY `FKk3ndxg5xp6v7wd4gjyusp15gq` (`user_id`) USING BTREE;

--
-- Chỉ mục cho bảng `payment_information`
--
ALTER TABLE `payment_information`
  ADD KEY `FK5xb28hck1puvn9ldjnbb1vqm8` (`user_id`) USING BTREE;

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FKog2rp4qthbtt2lfyhfo32lsw9` (`category_id`) USING BTREE;

--
-- Chỉ mục cho bảng `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FK228us4dg38ewge41gos8y761r` (`product_id`) USING BTREE,
  ADD KEY `FKb3354ee2xxvdrbyq9f42jdayd` (`user_id`) USING BTREE;

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK6i66ijb8twgcqtetl8eeeed6v` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `FK9il7y6fehxwunjeepq0n7g5rd` FOREIGN KEY (`parent_category_id`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKocimc7dtr037rh4ls4l95nlfi` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD CONSTRAINT `FKk3ndxg5xp6v7wd4gjyusp15gq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `payment_information`
--
ALTER TABLE `payment_information`
  ADD CONSTRAINT `FK5xb28hck1puvn9ldjnbb1vqm8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FKog2rp4qthbtt2lfyhfo32lsw9` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `FK228us4dg38ewge41gos8y761r` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FKb3354ee2xxvdrbyq9f42jdayd` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
