/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100432 (10.4.32-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : db_cdweb

 Target Server Type    : MySQL
 Target Server Version : 100432 (10.4.32-MariaDB)
 File Encoding         : 65001

 Date: 23/06/2024 21:56:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` bigint NOT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `street_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `zip_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK6i66ijb8twgcqtetl8eeeed6v`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK6i66ijb8twgcqtetl8eeeed6v` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------

-- ----------------------------
-- Table structure for address_seq
-- ----------------------------
DROP TABLE IF EXISTS `address_seq`;
CREATE TABLE `address_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address_seq
-- ----------------------------
INSERT INTO `address_seq` VALUES (1);

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` bigint NOT NULL,
  `level` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `parent_category_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK9il7y6fehxwunjeepq0n7g5rd`(`parent_category_id` ASC) USING BTREE,
  CONSTRAINT `FK9il7y6fehxwunjeepq0n7g5rd` FOREIGN KEY (`parent_category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 1, 'Dán PPF', 1);
INSERT INTO `categories` VALUES (2, 1, 'Dán Cường Lực', 1);
INSERT INTO `categories` VALUES (3, 1, 'Phụ Kiện Apple Watch', 1);
INSERT INTO `categories` VALUES (4, 1, 'Ốp Lưng iPhone', 1);

-- ----------------------------
-- Table structure for categories_seq
-- ----------------------------
DROP TABLE IF EXISTS `categories_seq`;
CREATE TABLE `categories_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories_seq
-- ----------------------------
INSERT INTO `categories_seq` VALUES (1);

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` bigint NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_at` datetime(6) NULL DEFAULT current_timestamp(6),
  `parent_comment_id` bigint NULL DEFAULT NULL,
  `product_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES (2, 'Nguyen Van C', 'Máy ngon, thời lượng pin xài cả ngày', NULL, NULL, 4, 602);
INSERT INTO `comments` VALUES (3, 'Nguyen Van C', 'Trả góp bao nhiêu thời gian vậy', NULL, NULL, 4, 602);
INSERT INTO `comments` VALUES (5, 'Nguyen Van A', 'Dạ FPT Shop có hỗ trợ mua trả góp qua các nhà tài chính (Home Credit, FE Credit,…), thẻ tín dụng credit master/visa/jcb (thẻ có hạn mức sử dụng trước trả sau do ngân hàng cấp)', NULL, 3, 4, 602);
INSERT INTO `comments` VALUES (52, 'Nguyen Van C', 'tốt', NULL, NULL, 5, 602);
INSERT INTO `comments` VALUES (53, 'Nguyen Van C', 'cam on', NULL, 52, 5, 602);

-- ----------------------------
-- Table structure for comments_seq
-- ----------------------------
DROP TABLE IF EXISTS `comments_seq`;
CREATE TABLE `comments_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comments_seq
-- ----------------------------
INSERT INTO `comments_seq` VALUES (151);

-- ----------------------------
-- Table structure for order_items
-- ----------------------------
DROP TABLE IF EXISTS `order_items`;
CREATE TABLE `order_items`  (
  `id` bigint NOT NULL,
  `order_id` bigint NULL DEFAULT NULL,
  `product_id` bigint NULL DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKbioxgbv59vetrxe0ejfubep1w`(`order_id` ASC) USING BTREE,
  INDEX `FKocimc7dtr037rh4ls4l95nlfi`(`product_id` ASC) USING BTREE,
  CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKocimc7dtr037rh4ls4l95nlfi` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_items
-- ----------------------------
INSERT INTO `order_items` VALUES (54, 54, 4, 1);
INSERT INTO `order_items` VALUES (55, 55, 4, 1);
INSERT INTO `order_items` VALUES (56, 56, 4, 1);
INSERT INTO `order_items` VALUES (57, 57, 4, 1);
INSERT INTO `order_items` VALUES (102, 102, 4, 1);
INSERT INTO `order_items` VALUES (103, 103, 4, 1);
INSERT INTO `order_items` VALUES (152, NULL, 4, 1);
INSERT INTO `order_items` VALUES (153, NULL, 4, 1);
INSERT INTO `order_items` VALUES (202, NULL, 4, 3);
INSERT INTO `order_items` VALUES (203, NULL, 6, 1);
INSERT INTO `order_items` VALUES (204, NULL, 4, 3);
INSERT INTO `order_items` VALUES (205, NULL, 6, 1);

-- ----------------------------
-- Table structure for order_items_seq
-- ----------------------------
DROP TABLE IF EXISTS `order_items_seq`;
CREATE TABLE `order_items_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_items_seq
-- ----------------------------
INSERT INTO `order_items_seq` VALUES (301);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` bigint NOT NULL,
  `customer_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `customer_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `customer_mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `payment_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `transaction_id` int NULL DEFAULT NULL,
  `total_price` int NULL DEFAULT NULL,
  `payment_status` int NULL DEFAULT NULL,
  `shipping_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `order_status` int NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK32ql8ubntj5uh44ph9659tiih`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (54, 'Tran Duc Minh', 'tranmin1122@gmail.com', '033333333333', '20240623110249', 14473658, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);
INSERT INTO `orders` VALUES (55, 'Tran Duc Minh', 'tranmin1122@gmail.com', '033333333333', '20240623110249', 14473658, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);
INSERT INTO `orders` VALUES (56, 'Tran Duc Minh', 'tranmin1122@gmail.com', '033333333333', '20240623110630', 14473664, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);
INSERT INTO `orders` VALUES (57, 'Tran Duc Minh', 'tranmin1122@gmail.com', '033333333333', '20240623110630', 14473664, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);
INSERT INTO `orders` VALUES (102, 'Tran Duc Minh', 'tranmin1122@gmail.com', '033333333333', '20240623112852', 14473673, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);
INSERT INTO `orders` VALUES (103, 'Tran Duc Minh', 'tranmin1122@gmail.com', '033333333333', '20240623112852', 14473673, 15000000, 1, 'fffffffffffffffff,\n T?nh Tuy?n Quang, Huy?n L?m B?nh', 1, 602);
INSERT INTO `orders` VALUES (152, 'Tran Duc Minh', 'tranmin1122@gmail.com', '77777777777', '20240623170449', 14474001, 15000000, 1, 'kkkkkkkkkkkkk,\n         Tỉnh Cao Bằng, Huyện Bảo Lâm', 1, 602);
INSERT INTO `orders` VALUES (153, 'Tran Duc Minh', 'tranmin1122@gmail.com', '77777777777', '20240623170449', 14474001, 15000000, 1, 'kkkkkkkkkkkkk,\n  Tỉnh Cao Bằng, Huyện Bảo Lâm', 1, 602);
INSERT INTO `orders` VALUES (202, 'Tran Duc Minh', 'tranmin1122@gmail.com', '099999999999', '20240623210242', 14474318, 70000000, 1, 'linh trung,\n         Thành phố Hà Nội, Quận Ba Đình', 1, 602);
INSERT INTO `orders` VALUES (203, 'Tran Duc Minh', 'tranmin1122@gmail.com', '099999999999', '20240623210242', 14474318, 70000000, 1, 'linh trung,\n         Thành phố Hà Nội, Quận Ba Đình', 1, 602);

-- ----------------------------
-- Table structure for orders_seq
-- ----------------------------
DROP TABLE IF EXISTS `orders_seq`;
CREATE TABLE `orders_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders_seq
-- ----------------------------
INSERT INTO `orders_seq` VALUES (301);

-- ----------------------------
-- Table structure for password_reset_tokens
-- ----------------------------
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE `password_reset_tokens`  (
  `id` bigint NOT NULL,
  `create_at` datetime(6) NULL DEFAULT NULL,
  `expiry_date` datetime(6) NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_71lqwbwtklmljk3qlsugr1mig`(`token` ASC) USING BTREE,
  INDEX `FKk3ndxg5xp6v7wd4gjyusp15gq`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKk3ndxg5xp6v7wd4gjyusp15gq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_reset_tokens
-- ----------------------------
INSERT INTO `password_reset_tokens` VALUES (2, NULL, '2024-06-24 21:10:06.000000', 'a8eb67c3-9a19-4704-9dec-351d34ba00a3', 502);
INSERT INTO `password_reset_tokens` VALUES (3, NULL, '2024-06-24 21:10:50.000000', '58d5c70d-4b01-47b8-9335-66785d7bcc3d', 502);

-- ----------------------------
-- Table structure for password_reset_tokens_seq
-- ----------------------------
DROP TABLE IF EXISTS `password_reset_tokens_seq`;
CREATE TABLE `password_reset_tokens_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_reset_tokens_seq
-- ----------------------------
INSERT INTO `password_reset_tokens_seq` VALUES (101);

-- ----------------------------
-- Table structure for payment_information
-- ----------------------------
DROP TABLE IF EXISTS `payment_information`;
CREATE TABLE `payment_information`  (
  `user_id` bigint NOT NULL,
  `card_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cardholder_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cvv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `expiration_date` date NULL DEFAULT NULL,
  INDEX `FK5xb28hck1puvn9ldjnbb1vqm8`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK5xb28hck1puvn9ldjnbb1vqm8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment_information
-- ----------------------------

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` bigint NOT NULL,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_at` datetime(6) NULL DEFAULT current_timestamp(6),
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `discounted_price` int NULL DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `quantity` int NULL DEFAULT NULL,
  `category_id` bigint NULL DEFAULT NULL,
  `promotion_percent` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKog2rp4qthbtt2lfyhfo32lsw9`(`category_id` ASC) USING BTREE,
  CONSTRAINT `FKog2rp4qthbtt2lfyhfo32lsw9` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, '9FF', '2024-04-20 10:00:00.000000', 'Dán film PPF (Paint Protection Film) là một giải pháp an toàn để vừa bảo vệ vừa giữ nguyên màu máy cho Apple Watch. Film PFF được ứng dụng với vật liệu 3M của Mỹ chuyên sử dụng trong các ngành công nghiệp ô tô và quân sự. Sử dụng Dán film PPF cho body App', 240000, 'https://product.hstatic.net/200000454999/product/4_db8bc9bee6454130adfdbb8fbff7e692_master.jpg', 250000, 'Dán film PPF cho body Apple Watch\r\n', 50, 1, NULL);
INSERT INTO `products` VALUES (3, 'PPF', '2024-04-20 12:00:00.000000', 'Dán film PPF (Paint Protection Film) là một giải pháp an toàn để vừa bảo vệ vừa giữ nguyên màu máy cho iPhone. Film PFF được ứng dụng với vật liệu 3M của Mỹ chuyên sử dụng trong các ngành công nghiệp ô tô và quân sự. Film PPF cho iPhone mỏng nhẹ hơn so vớ', 130000, 'https://product.hstatic.net/200000454999/product/film_ppf_ip_12_e62dbba3877644fd8bc027e868fbd6f5_master.png', 150000, 'Dán film PPF cho iPhone 12 series\r\n', 20, 1, NULL);
INSERT INTO `products` VALUES (4, 'PPF', '2024-04-20 13:00:00.000000', 'Dán film PPF (Paint Protection Film) là một giải pháp an toàn để vừa bảo vệ vừa giữ nguyên màu máy cho iPhone. Film PFF được ứng dụng với vật liệu 3M của Mỹ chuyên sử dụng trong các ngành công nghiệp ô tô và quân sự. Film PPF cho iPhone mỏng nhẹ hơn so vớ', 139000, 'https://product.hstatic.net/200000454999/product/10_1bf52b46eb844d4db29b83def8ca3c06_master_607063137f034678896630f554a16560_master.jpg', 150000, 'Dán film PPF cho iPhone 13 series\r\n', 10, 1, NULL);
INSERT INTO `products` VALUES (5, 'PPF', '2024-04-20 14:00:00.000000', 'Dán film PPF (Paint Protection Film) là một giải pháp an toàn để vừa bảo vệ vừa giữ nguyên màu máy cho iPhone. Film PFF được ứng dụng với vật liệu 3M của Mỹ chuyên sử dụng trong các ngành công nghiệp ô tô và quân sự. Film PPF cho iPhone mỏng nhẹ hơn so vớ', 142000, 'https://product.hstatic.net/200000454999/product/z3775023634621_c3120ac7fa3393849394508420e2f33a_3e3ffe9ba631466d8717babf7ad042ec_master.jpg', 150000, 'Dán film PPF cho iPhone 14 series\r\n', 15, 1, NULL);
INSERT INTO `products` VALUES (6, 'PPF', '2024-04-20 14:00:00.000000', 'Dán film PPF (Paint Protection Film) là một giải pháp an toàn để vừa bảo vệ vừa giữ nguyên màu máy cho iPhone. Film PFF được ứng dụng với vật liệu 3M của Mỹ chuyên sử dụng trong các ngành công nghiệp ô tô và quân sự. Film PPF cho iPhone mỏng nhẹ hơn so vớ', 243000, 'https://product.hstatic.net/200000454999/product/z4713323408349_7abf043cf07c6fc5d5eba6a564500f0e_b50cc77ad2014c7093ce14382aa13ad4_master.jpg', 250000, 'Dán film PPF cho iPhone 15 series\r\n', 15, 1, NULL);
INSERT INTO `products` VALUES (7, '9FF', '2024-04-20 14:00:00.000000', 'Dán film PPF (Paint Protection Film) là một giải pháp an toàn để vừa bảo vệ vừa giữ nguyên màu máy cho iPhone. Film PFF được ứng dụng với vật liệu 3M của Mỹ chuyên sử dụng trong các ngành công nghiệp ô tô và quân sự. Film PPF cho iPhone mỏng nhẹ hơn so vớ', 90000, 'https://product.hstatic.net/200000454999/product/1_88e378ab8d3c468d9fa2a88c9c5190c2_master.jpg', 100000, 'Dán film PPF cho màn hình Apple Watch', 15, 1, NULL);
INSERT INTO `products` VALUES (8, 'Anank', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 273000, 'https://product.hstatic.net/200000454999/product/anank-cnt-1_d1eba86e585f47bd977dced666da18cb_master.png', 290000, 'Cường lực Anank chống nhìn trộm cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (9, 'Anank', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 175000, 'https://product.hstatic.net/200000454999/product/cuong-luc-anank-1_f06bc47f2aed42ce9ae61012ab54b4a0_master.png', 200000, 'Cường lực camera Anank trong suốt cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (10, 'Hoda', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 450000, 'https://product.hstatic.net/200000454999/product/387170092_678976727665087_2995610204348017795_n_5c68a5dbe1584208a1788a96c10e5c75_master.jpg', 500000, 'Cường lực camera Hoda Sapphire cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (11, 'Kuzoom', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 300000, 'https://product.hstatic.net/200000454999/product/4_21_1000x.jpg_cff0c249de89455aa1afabf4e9b1a0ff_master.jpg', 350000, 'Cường lực camera Kuzoom cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (12, 'MIPOW', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 200000, 'https://product.hstatic.net/200000454999/product/6_9af57fe58457480da2278b8fbd3c2d05_master.jpg', 250000, 'Cường lực camera Mipow cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (13, 'ZEELOT', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 400000, 'https://product.hstatic.net/200000454999/product/ip14_14maxgold_1800x1800.webp_08200e7b29d341ccb7ab7ebe353c0ee8_master.jpeg', 495000, 'Cường lực camera Zeelot cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (14, 'Devilcase', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 300000, 'https://product.hstatic.net/200000454999/product/cuong-luc-devilcase-4.1_a689ff875ff24fc299b6b0560c854aa5_master.jpg', 333000, 'Cường lực Devilcase trong suốt 2.5D cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (15, 'OEM', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 330000, 'https://product.hstatic.net/200000454999/product/2d-044f-44f5-aa6a-032de1839421_1.b4ff7d58d64f8c3db8dfe92a44ca0347.jpeg_047b76649dda407a9ce6da0ee58926e8_master.jpg', 345000, 'Cường lực GLASS Protector HD cho iPad 10.5 inch\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (16, 'Hoda', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 180000, 'https://product.hstatic.net/200000454999/product/800x-2_1b8788612b9843ddb1e043f71fd0a779_master.jpg', 220000, 'Cường lực Hoda 2in1 chống vân và chống nhìn trộm cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (17, 'Hoda', '2024-04-20 14:00:00.000000', 'ANANK - thương hiệu nổi tiếng chuyển sản xuất miếng dán bảo vệ màn hình cao cấp cho điện thoại, mấy tính bảng với công nghệ hiện đại của Nhật Bản, được thành lập năm 2013. Sản phẩm của Anank nổi tiếng về độ bảo vệ an toàn tối đa, chất lượng và mang tính t', 350000, 'https://product.hstatic.net/200000454999/product/800x_7da9ad443ae4440188354688d4cbcbbb_master.jpg', 500000, 'Cường lực Hoda chống phản chiếu cho iPhone\r\n', 15, 2, NULL);
INSERT INTO `products` VALUES (18, 'shopphukien', '2024-04-20 14:00:00.000000', 'Da PU được tạo nên từ công nghệ nhân tạo Poly Synthetic Leather. Một số sản phẩm làm từ chất liệu da PU:giày, dây thắt lưng, túi xách… rất khó để phân biệt với da thật. Xem ngay thông tin về sản phẩm dây da chất liệu PU cho Apple Watch.\r\n\r\n', 350000, 'https://product.hstatic.net/200000454999/product/2_dae8b20b8d8d410bb94fad48d8082707_master.png', 390000, 'Dây da chất liệu PU cho Apple Watch\r\n', 15, 3, NULL);
INSERT INTO `products` VALUES (19, 'shopphukien', '2024-04-20 14:00:00.000000', 'Da swift có bề mặt mịn, trơn, không có đường vân như da Epsom và không có hạt như da Togo. Nhờ những đặc điểm này cùng với tính chất dễ bám màu nhuộm mà da swift thường được dùng nhiều trong các sản phẩm phụ kiện thời trang như: dây đồng hồ, túi xách, ví,', 300000, 'https://product.hstatic.net/200000454999/product/untitled_design__46__dd597e8064de46fbad50de664d1bc0be_master.png', 350000, 'Dây da Native Union Classic cho Apple Watch 38/40/41 mm\r\n', 15, 3, NULL);
INSERT INTO `products` VALUES (20, 'shopphukien', '2024-04-20 14:00:00.000000', 'Da swift có bề mặt mịn, trơn, không có đường vân như da Epsom và không có hạt như da Togo. Nhờ những đặc điểm này cùng với tính chất dễ bám màu nhuộm mà da swift thường được dùng nhiều trong các sản phẩm phụ kiện thời trang như: dây đồng hồ, túi xách, ví,', 450000, 'https://product.hstatic.net/200000454999/product/2_aa5b17803b074bb3bf6ce229af751c1f_master.png', 490000, 'Dây da thật Swift Tím cho Apple Watch\r\n', 15, 3, NULL);
INSERT INTO `products` VALUES (21, 'shopphukien', '2024-04-20 14:00:00.000000', 'Da swift có bề mặt mịn, trơn, không có đường vân như da Epsom và không có hạt như da Togo. Nhờ những đặc điểm này cùng với tính chất dễ bám màu nhuộm mà da swift thường được dùng nhiều trong các sản phẩm phụ kiện thời trang như: dây đồng hồ, túi xách, ví,', 320000, 'https://product.hstatic.net/200000454999/product/1-min_31f5ad616fd644b9873ddd588ffef0d3_master.jpg', 333000, 'Dây da thật Swift xanh dương cho Apple Watch\r\n', 15, 3, NULL);
INSERT INTO `products` VALUES (22, 'shopphukien', '2024-04-20 14:00:00.000000', 'Da swift có bề mặt mịn, trơn, không có đường vân như da Epsom và không có hạt như da Togo. Nhờ những đặc điểm này cùng với tính chất dễ bám màu nhuộm mà da swift thường được dùng nhiều trong các sản phẩm phụ kiện thời trang như: dây đồng hồ, túi xách, ví,', 250000, 'https://product.hstatic.net/200000454999/product/1-min_c77438c4f09b4fde8917b1197b829ceb_master.jpg', 300000, 'Dây da thật Swift xanh cổ vịt cho Apple Watch\r\n', 15, 3, NULL);
INSERT INTO `products` VALUES (23, 'shopphukien', '2024-04-20 14:00:00.000000', 'Da swift có bề mặt mịn, trơn, không có đường vân như da Epsom và không có hạt như da Togo. Nhờ những đặc điểm này cùng với tính chất dễ bám màu nhuộm mà da swift thường được dùng nhiều trong các sản phẩm phụ kiện thời trang như: dây đồng hồ, túi xách, ví,', 450000, 'https://product.hstatic.net/200000454999/product/3_9083cd4a500a4fd7a50dde3843ed3628_master.jpg', 460000, 'Dây da thật Swift xanh navy chỉ cam cho Apple Watch\r\n', 15, 3, NULL);
INSERT INTO `products` VALUES (29, 'OEM', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 180000, 'https://product.hstatic.net/200000454999/product/2_148412d728a442eca29506031998b2cc_master.png', 200000, 'Ốp Bearbrick magsafe cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (30, 'Elago', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 330000, 'https://product.hstatic.net/200000454999/product/s14aro61pro-pkpu_2fb8ca67c1a44708b31004f49b1000ec_master.jpg', 345000, 'Ốp Elago Aurora cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (31, 'Devilcase', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 620000, 'https://product.hstatic.net/200000454999/product/devilcase_guardian_pro_-_custom_eeeb743f94b54c18ac32824c3377bc73_master.png', 650000, 'Ốp Devilcase Geisha Nhật Bản cho iPhone 13\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (32, 'Hoda', '2024-04-20 14:00:00.000000', 'Không chỉ là 1 chiếc ốp bảo vệ đơn thuần, ốp lưng UNIQ Transforma cho iPhone kiêm luôn nhiệm vụ của giá đỡ tiện lợi, sử dụng được với tư thế ngang hoặc dọc, thích hợp với nhiều nhu cầu sử dụng khác nhau.\r\n', 410000, 'https://product.hstatic.net/200000454999/product/10_1402644243184569a3dcb4c0d54eee49_master.jpg', 440000, 'Ốp Devilcase tiêu chuẩn magsafe cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (33, 'Mentor', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 550000, 'https://product.hstatic.net/200000454999/product/1_b2375933bfd64dc0b6cd755c41561603_master.png', 560000, 'Ốp da kèm ví đựng thẻ Mentor VII cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (34, 'Gear4 ', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 620000, 'https://product.hstatic.net/200000454999/product/4_fe1bc577250141f0aad9ba0b0c0c3058_master.png', 650000, 'Ốp Devilcase tiêu chuẩn viền tím cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (35, 'Laut', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 410000, 'https://product.hstatic.net/200000454999/product/s14du61pro-bk_30337851798a40f081fce6384aebb4c6_master.jpg', 440000, 'Ốp Elago Dual cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (36, 'Devilcase', '2024-04-20 14:00:00.000000', 'Không chỉ là 1 chiếc ốp bảo vệ đơn thuần, ốp lưng UNIQ Transforma cho iPhone kiêm luôn nhiệm vụ của giá đỡ tiện lợi, sử dụng được với tư thế ngang hoặc dọc, thích hợp với nhiều nhu cầu sử dụng khác nhau.\r\n', 550000, 'https://product.hstatic.net/200000454999/product/upload_eec6e8d03a73430c9998dd459667c3f6_ce10e0ab7dbf492f9628d3ed9b137be7_master.jpg', 560000, 'Ốp Elago Glide Magsafe cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (37, 'Gear4 ', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 300000, 'https://product.hstatic.net/200000454999/product/s14hb61pro-tr_amazon_8_d35a7313abb9484db80f2beedb88b200_master.jpg', 345000, 'Ốp Elago Hybrid cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (38, 'Hoda', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 630000, 'https://product.hstatic.net/200000454999/product/1_94dbf4fa78fb456cbeaa7a741e54171e_master.png', 650000, 'Ốp Gear4 D3O Santa Cruz Snap 4m cho iPhone 13 Pro\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (39, 'Mentor', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 400000, 'https://product.hstatic.net/200000454999/product/3_dd30dc14ef82438cb0319b1cffc9a0c0_master.png', 440000, 'Ốp Gear4 D3O Denali 5m cho iPhone 13 Pro\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (40, 'Devilcase', '2024-04-20 14:00:00.000000', 'Không chỉ là 1 chiếc ốp bảo vệ đơn thuần, ốp lưng UNIQ Transforma cho iPhone kiêm luôn nhiệm vụ của giá đỡ tiện lợi, sử dụng được với tư thế ngang hoặc dọc, thích hợp với nhiều nhu cầu sử dụng khác nhau.\r\n', 270000, 'https://product.hstatic.net/200000454999/product/z4823413963379_8c70bdc331fde4d8e4e0a53e43ad16cc_d6b286e102fa444d82341c010f089585_master.jpg', 280000, 'Ốp Hoda Crystal Magsafe cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (41, 'Devilcase', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 318000, 'https://product.hstatic.net/200000454999/product/l_ip23d_ho_w1_9ae13987d78644f989b93fde4ce15509_master.jpg', 345000, 'Ốp Laut Holo Pearl Magsafe cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (42, 'Hoda', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 420000, 'https://product.hstatic.net/200000454999/product/z4860919030735_ab75d94cc51253a44d03a9a4cdb5afc5_8cbaed2e0b7b44619c1ed2694dce4eca_master.jpg', 440000, 'Ốp Hoda Rough cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (43, 'Gear4 ', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 510000, 'https://product.hstatic.net/200000454999/product/800x-2_e6faef99a1c245178b8886557a24ce6d_master.jpg', 560000, 'Ốp Hoda Rough Magsafe cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (44, 'Mentor', '2024-04-20 14:00:00.000000', 'Không chỉ là 1 chiếc ốp bảo vệ đơn thuần, ốp lưng UNIQ Transforma cho iPhone kiêm luôn nhiệm vụ của giá đỡ tiện lợi, sử dụng được với tư thế ngang hoặc dọc, thích hợp với nhiều nhu cầu sử dụng khác nhau.\r\n', 600000, 'https://product.hstatic.net/200000454999/product/thiet_ke_chua_co_ten__8__5e5cf08de6c1475e9c8fd5bbb33f4685_master.png', 650000, 'Ốp Laut Huex Crystal cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (45, 'Hoda', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 415000, 'https://product.hstatic.net/200000454999/product/thiet_ke_chua_co_ten__6__b18a5cb1b44f4dfc8ab0a06479696a06_master.png', 440000, 'Ốp lưng Laut Huex Tie Dye cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (46, 'Gear4 ', '2024-04-20 14:00:00.000000', 'Nếu bạn đang tìm kiếm một món phụ kiện đơn giản, bền bỉ nhưng vẫn giữ nguyên vẻ đẹp của iPhone thì Ốp Likgus T.B cho iPhone là một lựa chọn nên được ưu tiên. Với thiết kế đơn giản, không chỉ là phụ kiện làm đẹp cho iPhone mà chiếc ốp lưng này cũng làm tốt', 330000, 'https://product.hstatic.net/200000454999/product/3_fb8cf93340b0468cbb604b03c540d9b4_master.jpg', 345000, 'Ốp Likgus Sexy cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (47, 'Mentor', '2024-04-20 14:00:00.000000', 'Mặt lưng của Ốp Hoda Rough cho iPhone được gia cố tăng độ cứng, tạo độ dẻo dai và không dễ bị nứt vỡ, không ố vàng. Điều này làm giảm lực tác động và gây hại cho thiết bị khi xảy ra va đập không mong muốn.\r\n', 520000, 'https://product.hstatic.net/200000454999/product/5_0e4faea402ee454294a19fc5e10e2567_master.jpg', 560000, 'Ốp Likgus T.B cho iPhone\r\n', 15, 4, NULL);
INSERT INTO `products` VALUES (48, 'Hoda', '2024-04-20 14:00:00.000000', 'Không chỉ là 1 chiếc ốp bảo vệ đơn thuần, ốp lưng UNIQ Transforma cho iPhone kiêm luôn nhiệm vụ của giá đỡ tiện lợi, sử dụng được với tư thế ngang hoặc dọc, thích hợp với nhiều nhu cầu sử dụng khác nhau.\r\n', 410000, 'https://product.hstatic.net/200000454999/product/8_85294c7fbabe4d7a8bacba119f0e95f0_master.jpg', 440000, 'Ốp lưng UNIQ Transforma cho iPhone\r\n', 15, 4, NULL);

-- ----------------------------
-- Table structure for products_seq
-- ----------------------------
DROP TABLE IF EXISTS `products_seq`;
CREATE TABLE `products_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products_seq
-- ----------------------------
INSERT INTO `products_seq` VALUES (1);

-- ----------------------------
-- Table structure for ratings
-- ----------------------------
DROP TABLE IF EXISTS `ratings`;
CREATE TABLE `ratings`  (
  `id` bigint NOT NULL,
  `rating` double NULL DEFAULT NULL,
  `product_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK228us4dg38ewge41gos8y761r`(`product_id` ASC) USING BTREE,
  INDEX `FKb3354ee2xxvdrbyq9f42jdayd`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK228us4dg38ewge41gos8y761r` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKb3354ee2xxvdrbyq9f42jdayd` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ratings
-- ----------------------------

-- ----------------------------
-- Table structure for ratings_seq
-- ----------------------------
DROP TABLE IF EXISTS `ratings_seq`;
CREATE TABLE `ratings_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ratings_seq
-- ----------------------------
INSERT INTO `ratings_seq` VALUES (1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` datetime(6) NULL DEFAULT current_timestamp(6),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (502, 'tranminh80802@gmail.com', 'tranminh80802', '$2a$10$9PRzwwO0VlJNj0J4iVphg.2fF1b4PMyG8mTkshpq0ENrSq7NloOJW', '0378765888', 'Tran Duc Minh', 'ROLE_USER', NULL);
INSERT INTO `users` VALUES (602, 'tranmin1122@gmail.com', 'tranmin1122', '$2a$10$suNAU1oVmMdUjPBLDMPs2OY0vF2I7T/H54JMEJ1Av/wsrLKD6YhGm', '0378765888', 'Tran Duc Minh', 'ROLE_USER', NULL);

-- ----------------------------
-- Table structure for users_seq
-- ----------------------------
DROP TABLE IF EXISTS `users_seq`;
CREATE TABLE `users_seq`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users_seq
-- ----------------------------
INSERT INTO `users_seq` VALUES (1);

SET FOREIGN_KEY_CHECKS = 1;
