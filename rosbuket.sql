-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 20, 2022 at 01:15 PM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rosbuket`
--

-- --------------------------------------------------------

--
-- Table structure for table `bouquet`
--

CREATE TABLE `bouquet` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `discount` decimal(12,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bouquet`
--

INSERT INTO `bouquet` (`id`, `name`, `image`, `price`, `description`, `short_description`, `created_at`, `discount`) VALUES
(1, 'Букет тюльпанов «Баронесса»', '/images/bouquets/a5fb1533-616d-494f-a2ba-1fa5443adb01.jpg', '5500.00', 'Состав : тюльпан пионовидный - 29 шт', 'Букет 29 тюльпанов, которые можно спутать с пионами', '2021-11-20 05:20:00', '200.00'),
(2, 'Хризантемы', '/images/bouquets/1-roza-1-2048x1670.jpg', '1200.00', 'Хризантемы в подарок на день рождения', 'хризантемы в подарок', '2021-11-12 05:20:00', '0.00'),
(3, 'Шары фольгированные \"Я тебя люблю!\"', '/images/bouquets/shari.jpg', '200.00', 'Шарики будут отличным дополнением к красивому букету цветов, а так же как самостоятельный подарок родным или второй половинке на праздник', 'Шары к букету', NULL, NULL),
(4, 'Шары \"С черным юмором\"', '/images/bouquets/shari2.jpg', '150.00', 'Шарики будут отличным дополнением к красивому букету цветов, а эти шарики могут заценить любители со специфическим юмором!', 'Шары, которые добавляют остринки, оценят любители', NULL, NULL),
(5, 'Рафаэлло тортик 200 гр', '/images/bouquets/tort.jpg', '750.00', 'Торт - отличный подарок ко дню рождения, на праздник или просто так! а также в подарок вместе с цветами будет приятным сюрпризом для близкого человека', 'Небольшой тортик рафаэлло', NULL, NULL),
(6, 'Шары фольгированные\"С Днем рождения!\"', '/images/bouquets/folga-shari.jpg', '250.00', 'Шарики из фольги станут отличным дополнением к цветам на день рождения в подарок родному или любимому человеку! А еще они имеют несколько цветов на выбор и вкус!', 'Цветные фольгированные шары ко дню рождения', NULL, NULL),
(16, 'Букет \"Милые ириски\"', '/images/bouquets/f7a8c9a6-528f-4660-a8e7-6d51ae49abbc.jpg', '1300.00', 'Высота — 50\r\nСостав : ирис - 9 шт', 'Большой букет из 9 ирисов', '2022-02-01 12:24:54', '0.00'),
(18, 'Букет тюльпанов «Желтые огни»', '/images/bouquets/b7deb27c-e2d6-4683-ab43-350327839a12.jpg', '5990.00', 'Всего в букете 51 букет', 'Букет из 51 тюльпана', '2022-02-12 13:14:38', '0.00'),
(19, 'Букет \"Любящее сердце\"', '/images/bouquets/cc6c52b2-1f33-4316-8969-f21a2e7946b1.jpg', '6900.00', 'В букете 51 роза', 'Подарите друзьям и любимым букет роз!', '2022-02-12 13:17:30', '400.00'),
(20, 'Букет \"Любовь\"', '/images/bouquets/5906185e-b082-464a-a81a-f99d5f6fd69b.jpg', '6500.00', 'Букет из 30ти тюльпанов и 20ти ирисов', 'Букет с тюльпанами и ирисами', '2022-02-12 13:19:38', '0.00'),
(21, 'Букет \"Козинаки\"', '/images/bouquets/3dbacb3d-4eb5-48e7-a7d0-ce6af14bfe90.jpg', '6000.00', 'Состоит из 15 подсолнухов и зеленых листьев для придания объема', '15 подсолнухов украсят ваш дом!', '2022-02-12 13:22:10', '300.00'),
(22, 'Букет \"Поздний вечер\"', '/images/bouquets/048dd078-dcaf-4f27-b5e7-b6af920d6c76.jpg', '10000.00', 'Состоит из 20 пионов', 'Красивейший букет пионов', '2022-02-12 13:23:23', '0.00'),
(23, 'Букет \"Идиллия\"', '/images/bouquets/535ebfe7-b35b-4f20-a6d9-9cee7fed0cb0.jpg', '19990.00', 'Состоит из 51 пиона светлых сортов', 'Букет из светлых пионов', '2022-02-12 13:25:00', '0.00'),
(24, 'Букет \"Лунная ночь\"', '/images/bouquets/b76661a2-7ff2-4b0c-b456-f4ec35c41d6a.jpg', '3300.00', 'Высота — 60\r\nСостав : \r\nматтиола - 8 шт\r\nантиринум - 11 шт\r\nберграс', 'Цветы антиринума похожи на ночь!', '2022-02-12 13:27:43', '0.00'),
(25, 'Букет \"Фонарики\"', '/images/bouquets/38d00cfc-e264-4556-911b-db17f49c38a7.jpg', '7499.00', 'Высота — 55\r\nСостав : пион - 17 шт\r\nэвкалипт', 'Светлые пионы с эвкалиптовыми цветами', '2022-02-12 13:29:04', '0.00'),
(26, 'Корзина \"Любовь к ромашкам\"', '/images/bouquets/11109769-6c48-4591-9729-a2948030292d.jpg', '5000.00', 'Состоит из танацетума, корзинки и оазиса', 'Букет из 25 ромашек', '2022-02-12 13:38:59', '0.00'),
(27, 'Корзина «Джонатан»', '/images/bouquets/90207d74-e4ab-4890-8d69-91b91b67c5c1.jpg', '4599.00', 'Состоит из тюльпанов, роз, одуванчиков и конечно же корзинки', 'Корзинка тюльпанов и роз', '2022-02-12 13:41:29', '300.00'),
(28, 'Композиция \"Бабочка\"', '/images/bouquets/d3bf351c-bb15-47db-8f07-c9b8e0ffb46c.jpg', '22900.00', 'Высота — 90\r\nСостав : Подсолнух 6 шт, Стрелиция 6 шт, Гербера 13 шт, Альстромерия 6 шт, Гортензия 3 шт, Калла 11 шт, Гиперикум 13 шт, Леукодендрон 25 шт, Листья амбрела, Рускус, Буплерум/тласпи', 'Корзинка из солнечных цветов', '2022-02-12 13:44:03', '1000.00'),
(29, 'Корзина «Валерия»', '/images/bouquets/de61ae8c-c0d6-4861-b6e0-f81ea3c7fc89.jpg', '6900.00', 'Высота - 50см\r\nСостоит из 41го тюльпана', 'Большая корзина с тюльпанами', '2022-02-12 13:45:32', '0.00');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint(20) UNSIGNED DEFAULT NULL,
  `lvl` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `image`, `description`, `parent`, `lvl`) VALUES
(1, 'Корзинки', '/images/categories/dfca8b0bd4ebc8d5a1352ce26f31fdde.png', 'Корзинки c цветами', NULL, NULL),
(2, 'Букеты', '/images/categories/8fe2a093be959057c7cb991113c8306f.png', 'Букеты цветов', NULL, NULL),
(3, 'Подарки', '/images/categories/2ec3cba48d3d71337c1414bbef15e0ab.png', 'Подарки к цветам', NULL, NULL),
(4, 'Букеты из орхидей', '/images/categories/2ec3cba48d3d71337c1414bbef15e0ab.png', 'Букеты орхидей', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_bouquets`
--

CREATE TABLE `category_bouquets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `bouquet_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_bouquets`
--

INSERT INTO `category_bouquets` (`id`, `category_id`, `bouquet_id`) VALUES
(2, 2, 2),
(3, 3, 3),
(4, 3, 4),
(5, 3, 5),
(6, 3, 6),
(25, 2, 18),
(26, 2, 19),
(27, 2, 20),
(28, 2, 21),
(29, 2, 22),
(30, 2, 23),
(31, 2, 24),
(32, 2, 25),
(33, 1, 26),
(35, 1, 27),
(36, 1, 28),
(37, 1, 29),
(47, 2, 1),
(48, 2, 16),
(49, 4, 16);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_11_03_080359_bouquet', 1),
(6, '2021_11_03_082343_category', 1),
(7, '2021_11_03_084531_order', 1),
(10, '2014_10_12_200000_add_two_factor_columns_to_users_table', 2),
(11, '2021_11_09_060648_settings', 2);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `username`, `phone`, `mail`, `address`, `message`, `status`) VALUES
(3, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(4, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(5, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(6, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(7, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(8, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(9, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', 'Дайте 2', 0),
(10, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(11, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(12, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(13, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 1),
(14, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(15, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(16, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 0),
(17, 'Kek', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 2),
(18, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 1),
(19, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 1),
(20, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 1),
(21, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 2),
(22, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 1),
(23, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 2),
(24, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', NULL, 2),
(25, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', 'Доставьте побыстрее', 1),
(26, 'Павел Бережной', '+79508450939', 'PavlikBerezhnoy@mail.ru', 'ул. Красноармейская, д. 11', 'Можно по быстрее!', 2);

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `bouquet_id` bigint(20) UNSIGNED NOT NULL,
  `qty` int(11) NOT NULL,
  `count_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_item`
--

INSERT INTO `order_item` (`id`, `order_id`, `bouquet_id`, `qty`, `count_price`) VALUES
(1, 8, 2, 8, '9600'),
(2, 8, 5, 1, '750'),
(3, 9, 2, 8, '9600'),
(4, 9, 5, 1, '750'),
(5, 10, 2, 8, '9600'),
(6, 10, 5, 1, '750'),
(7, 11, 16, 1, '300'),
(8, 11, 5, 1, '750'),
(9, 12, 2, 1, '1200'),
(10, 13, 16, 1, '300'),
(11, 13, 6, 1, '250'),
(12, 14, 16, 1, '300'),
(13, 15, 6, 1, '250'),
(14, 16, 16, 1, '300'),
(15, 17, 16, 1, '300'),
(16, 18, 16, 1, '300'),
(17, 19, 2, 1, '1200'),
(18, 20, 2, 1, '1200'),
(19, 21, 2, 1, '1200'),
(20, 22, 16, 1, '300'),
(21, 23, 16, 1, '300'),
(22, 24, 16, 1, '300'),
(23, 25, 24, 5, '16500'),
(24, 26, 6, 1, '250'),
(25, 26, 16, 3, '3900');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `username`, `email`, `message`, `phone`, `status`) VALUES
(1, 'Pavel Berezhnoy', 'ghuthughhu@mail.ru', 'Какое то сообщение', '+79508450939', 1),
(2, 'регрпгрепг рере', 'rgfkrnmgknrgn@mail.ru', 'hgjtyjyttjyt j tjy', '+79508450939', 1),
(3, 'Pavel Berezhnoy', 'ghuthughhu@mail.ru', 'Мне нравится ваш магазин!', '+79508450939', 2),
(4, 'Pavel Berezhnoy', 'ghuthughhu@mail.ru', 'Каеф магазин', '+79508450939', 2),
(5, 'Григорий Пивоваров', 'moyapochta@mail.ru', 'Как сделать заказ?', '8879968877', 2),
(6, 'Pavel Berezhnoy', 'PavlikBerezhnoy@mail.ru', 'Спасибо за сайт', '+79508450939', 0);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`, `type`) VALUES
(1, 'Телефон', '+7 (950) 389-64-15', 'phone'),
(2, 'Телефон', '+7 (915) 867-22-17', 'phone'),
(4, 'Почта', 'PavlikBerezhnoy@mail.ru', 'email'),
(5, 'Адрес', 'г.Ростов-на-Дону, проспект Космонавтов, 15', 'address'),
(6, 'Координаты', '47.284153 39.715058', 'map'),
(17, 'Координаты', '15 21', 'map'),
(18, 'Логотип', '/images/settings/e96a1ba4-f9f4-4f30-9c7c-1b65a2ebbddf.png', 'logo'),
(19, 'Телефон', '+7 (908) 174-53-24', 'phone'),
(20, 'Телефон', '886323316038', 'phone');

-- --------------------------------------------------------

--
-- Table structure for table `statpage`
--

CREATE TABLE `statpage` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `information` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Luke Skywalker', 'luke3@jedi.com', NULL, '$2y$10$Jt0dbMax/aqLiMjLOL00xOAE9XwqADkm43l1u4A1ybOiLXjRDFilS', NULL, NULL, 'oHDqjiyMNB', '2022-01-22 11:11:21', '2022-01-22 11:11:21'),
(3, 'Павел менеджер', 'pavlikberezhnoy@mail.ru', NULL, '$2y$10$sMtK66Ql/zYtgPEKo7rXFeWsTZLj9p8Bt478cBDAn14wtE4RkLnMO', NULL, NULL, 'kRVBeNqqkS', '2022-02-14 05:10:44', '2022-02-14 05:10:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bouquet`
--
ALTER TABLE `bouquet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bouquet_id_index` (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PARENT` (`parent`);

--
-- Indexes for table `category_bouquets`
--
ALTER TABLE `category_bouquets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_bouquets_category_id_foreign` (`category_id`),
  ADD KEY `category_bouquets_bouquet_id_foreign` (`bouquet_id`),
  ADD KEY `category_bouquets_id_index` (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id_index` (`id`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_item_order_id_foreign` (`order_id`),
  ADD KEY `bouquet_id` (`bouquet_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statpage`
--
ALTER TABLE `statpage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bouquet`
--
ALTER TABLE `bouquet`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `category_bouquets`
--
ALTER TABLE `category_bouquets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `statpage`
--
ALTER TABLE `statpage`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `category_bouquets`
--
ALTER TABLE `category_bouquets`
  ADD CONSTRAINT `category_bouquets_bouquet_id_foreign` FOREIGN KEY (`bouquet_id`) REFERENCES `bouquet` (`id`),
  ADD CONSTRAINT `category_bouquets_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`bouquet_id`) REFERENCES `bouquet` (`id`),
  ADD CONSTRAINT `order_item_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
