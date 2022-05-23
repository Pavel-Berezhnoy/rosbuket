-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: rosbuket
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `validate` tinyint(1) NOT NULL,
  `review_id` bigint unsigned NOT NULL,
  `answer_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `answer_review_id_foreign` (`review_id`),
  KEY `answer_answer_id_foreign` (`answer_id`),
  CONSTRAINT `answer_answer_id_foreign` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`),
  CONSTRAINT `answer_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `review` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'Независимый пользователь','Могли бы вы подробнее описать ?',1,1,NULL,'2022-05-18 10:27:16',NULL),(2,'Павел Бережной','Не хочу',1,1,1,'2022-05-18 10:37:33',NULL),(3,'admin','Спасибо!',1,2,NULL,'2022-05-19 09:14:14',NULL),(4,'admin','Благодарю за отзыв!',1,3,NULL,'2022-05-19 10:29:29',NULL),(5,'Пользователь 1','Не за что!',1,2,3,'2022-05-19 18:38:19',NULL),(6,'admin','Спасибо!',0,2,NULL,'2022-05-19 09:14:14',NULL),(7,'Пользователь 1','Не за что!',0,2,3,'2022-05-19 18:38:19',NULL);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bouquet`
--

DROP TABLE IF EXISTS `bouquet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bouquet` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `discount` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bouquet_id_index` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bouquet`
--

LOCK TABLES `bouquet` WRITE;
/*!40000 ALTER TABLE `bouquet` DISABLE KEYS */;
INSERT INTO `bouquet` VALUES (1,'Букет тюльпанов «Баронесса»','/images/bouquets/a5fb1533-616d-494f-a2ba-1fa5443adb01.jpg',5500.00,'Состав : тюльпан пионовидный - 29 шт','Букет 29 тюльпанов, которые можно спутать с пионами','2021-11-20 05:20:00',200.00),(2,'Хризантемы','/images/bouquets/2f16e0e1-bff0-439c-bbf9-c7308a98e77c.jpg',1200.00,'Хризантемы в подарок на день рождения','хризантемы в подарок','2021-11-12 05:20:00',0.00),(3,'Шары фольгированные \"Я тебя люблю!\"','/images/bouquets/shari.jpg',200.00,'Шарики будут отличным дополнением к красивому букету цветов, а так же как самостоятельный подарок родным или второй половинке на праздник','Шары к букету',NULL,NULL),(4,'Шары \"С черным юмором\"','/images/bouquets/shari2.jpg',150.00,'Шарики будут отличным дополнением к красивому букету цветов, а эти шарики могут заценить любители со специфическим юмором!','Шары, которые добавляют остринки, оценят любители',NULL,NULL),(5,'Рафаэлло тортик 200 гр','/images/bouquets/tort.jpg',750.00,'Торт - отличный подарок ко дню рождения, на праздник или просто так! а также в подарок вместе с цветами будет приятным сюрпризом для близкого человека','Небольшой тортик рафаэлло',NULL,NULL),(6,'Шары фольгированные\"С Днем рождения!\"','/images/bouquets/folga-shari.jpg',250.00,'Шарики из фольги станут отличным дополнением к цветам на день рождения в подарок родному или любимому человеку! А еще они имеют несколько цветов на выбор и вкус!','Цветные фольгированные шары ко дню рождения',NULL,NULL),(16,'Букет \"Милые ириски\"','/images/bouquets/f7a8c9a6-528f-4660-a8e7-6d51ae49abbc.jpg',1300.00,'Высота — 50\r\nСостав : ирис - 9 шт','Большой букет из 9 ирисов','2022-02-01 12:24:54',0.00),(18,'Букет тюльпанов «Желтые огни»','/images/bouquets/b7deb27c-e2d6-4683-ab43-350327839a12.jpg',5990.00,'Всего в букете 51 букет','Букет из 51 тюльпана','2022-02-12 13:14:38',0.00),(19,'Букет \"Любящее сердце\"','/images/bouquets/cc6c52b2-1f33-4316-8969-f21a2e7946b1.jpg',6900.00,'В букете 51 роза','Подарите друзьям и любимым букет роз!','2022-02-12 13:17:30',400.00),(20,'Букет \"Любовь\"','/images/bouquets/5906185e-b082-464a-a81a-f99d5f6fd69b.jpg',6500.00,'Букет из 30ти тюльпанов и 20ти ирисов','Букет с тюльпанами и ирисами','2022-02-12 13:19:38',0.00),(21,'Букет \"Козинаки\"','/images/bouquets/3dbacb3d-4eb5-48e7-a7d0-ce6af14bfe90.jpg',6000.00,'Состоит из 15 подсолнухов и зеленых листьев для придания объема','15 подсолнухов украсят ваш дом!','2022-02-12 13:22:10',300.00),(22,'Букет \"Поздний вечер\"','/images/bouquets/048dd078-dcaf-4f27-b5e7-b6af920d6c76.jpg',10000.00,'Состоит из 20 пионов','Красивейший букет пионов','2022-02-12 13:23:23',0.00),(23,'Букет \"Идиллия\"','/images/bouquets/535ebfe7-b35b-4f20-a6d9-9cee7fed0cb0.jpg',19990.00,'Состоит из 51 пиона светлых сортов','Букет из светлых пионов','2022-02-12 13:25:00',0.00),(24,'Букет \"Лунная ночь\"','/images/bouquets/b76661a2-7ff2-4b0c-b456-f4ec35c41d6a.jpg',3300.00,'Высота — 60\r\nСостав : \r\nматтиола - 8 шт\r\nантиринум - 11 шт\r\nберграс','Цветы антиринума похожи на ночь!','2022-02-12 13:27:43',0.00),(25,'Букет \"Фонарики\"','/images/bouquets/38d00cfc-e264-4556-911b-db17f49c38a7.jpg',7499.00,'Высота — 55\r\nСостав : пион - 17 шт\r\nэвкалипт','Светлые пионы с эвкалиптовыми цветами','2022-02-12 13:29:04',0.00),(26,'Корзина \"Любовь к ромашкам\"','/images/bouquets/11109769-6c48-4591-9729-a2948030292d.jpg',5000.00,'Состоит из танацетума, корзинки и оазиса','Букет из 25 ромашек','2022-02-12 13:38:59',0.00),(27,'Корзина «Джонатан»','/images/bouquets/90207d74-e4ab-4890-8d69-91b91b67c5c1.jpg',4599.00,'Состоит из тюльпанов, роз, одуванчиков и конечно же корзинки','Корзинка тюльпанов и роз','2022-02-12 13:41:29',300.00),(28,'Композиция \"Бабочка\"','/images/bouquets/d3bf351c-bb15-47db-8f07-c9b8e0ffb46c.jpg',22900.00,'Высота — 90\r\nСостав : Подсолнух 6 шт, Стрелиция 6 шт, Гербера 13 шт, Альстромерия 6 шт, Гортензия 3 шт, Калла 11 шт, Гиперикум 13 шт, Леукодендрон 25 шт, Листья амбрела, Рускус, Буплерум/тласпи','Корзинка из солнечных цветов','2022-02-12 13:44:03',1000.00),(29,'Корзина «Валерия»','/images/bouquets/de61ae8c-c0d6-4861-b6e0-f81ea3c7fc89.jpg',6900.00,'Высота - 50см\r\nСостоит из 41го тюльпана','Большая корзина с тюльпанами','2022-02-12 13:45:32',0.00);
/*!40000 ALTER TABLE `bouquet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint unsigned DEFAULT NULL,
  `lvl` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PARENT` (`parent`),
  CONSTRAINT `category_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `category` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Корзинки','/images/categories/dfca8b0bd4ebc8d5a1352ce26f31fdde.png','Корзинки c цветами',NULL,NULL),(2,'Букеты','/images/categories/8fe2a093be959057c7cb991113c8306f.png','Букеты цветов',NULL,NULL),(3,'Подарки','/images/categories/2ec3cba48d3d71337c1414bbef15e0ab.png','Подарки к цветам',NULL,NULL),(4,'Букеты из орхидей','/images/categories/2ec3cba48d3d71337c1414bbef15e0ab.png','Букеты орхидей',2,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_bouquets`
--

DROP TABLE IF EXISTS `category_bouquets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_bouquets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_id` bigint unsigned NOT NULL,
  `bouquet_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_bouquets_category_id_foreign` (`category_id`),
  KEY `category_bouquets_bouquet_id_foreign` (`bouquet_id`),
  KEY `category_bouquets_id_index` (`id`),
  CONSTRAINT `category_bouquets_bouquet_id_foreign` FOREIGN KEY (`bouquet_id`) REFERENCES `bouquet` (`id`),
  CONSTRAINT `category_bouquets_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_bouquets`
--

LOCK TABLES `category_bouquets` WRITE;
/*!40000 ALTER TABLE `category_bouquets` DISABLE KEYS */;
INSERT INTO `category_bouquets` VALUES (3,3,3),(4,3,4),(5,3,5),(6,3,6),(25,2,18),(27,2,20),(28,2,21),(29,2,22),(30,2,23),(31,2,24),(32,2,25),(33,1,26),(35,1,27),(36,1,28),(37,1,29),(48,2,16),(49,4,16),(50,2,2),(60,2,1),(66,2,19);
/*!40000 ALTER TABLE `category_bouquets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flower`
--

DROP TABLE IF EXISTS `flower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flower` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `flower_id_index` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flower`
--

LOCK TABLES `flower` WRITE;
/*!40000 ALTER TABLE `flower` DISABLE KEYS */;
INSERT INTO `flower` VALUES (5,'Ро́за','Розы впервые начали выращивать в Древнем Риме, хотя основное назначение садов того времени было выращивание полезных растений (плодовых, овощных, пряных и лекарственных), но в произведениях древнеримских писателей встречается описание около 10 сортов роз. Геродот уже в V веке до н. э. в своей «Истории» описывает сады царя Мидоса в Македонии и упоминает там махровую розу. Теофраст в 300 году до н. э. описывает сады Греции и даёт описание роз с 15, 20 и даже 100 лепестками. На великолепной мозаике из Помпеи, хранящейся в Неаполитанском музее, можно увидеть и дамасскую розу (Rosa ×damascena), родиной которой несомненно является восток, и уже оттуда она попала в сады Южной Италии. С распадом Римской Империи садоводство перешло в монастыри. Именно монастырские сады послужили прототипом садов по ту сторону Альп. Карл Великий в своей инструкции по управлению поместьями Capitulare de villis указал перечень растений, которые необходимо выращивать, среди которых были и розы. Во времена Каролингов в садах декоративные растения выращивались прежде всего с лекарственной целью, хотя, несомненно, обращалось внимание и на их красоту. Для венков и других украшений собирались полевые цветы. И только кусты роз удостаивались особого внимания и выращивались в садах. На картинах великих итальянских художников эпохи Возрождения мы можем увидеть розы, которые выращивались в итальянских садах того времени, родиной которых скорее всего является Италия. В 1309 году папа Климент V переехал со своим двором из Рима в Авиньон и центр католической церкви оставался там по 1377 год. Как свидетельствуют историки, уже в это время на территории папского дворца выращивались розы. В саду же епископа Эйхштедтского в начале XVII века росла 21 разновидность роз, привезённые в Европу с востока через Константинополь, включая дамасскую. Во времена миннезингеров существовали прекрасные сады с красными и белыми розами, которыми миннезингеры и увенчивались. С конца XIX века селекцию роз ведут почти во всех странах мира.\r\n\r\nСуществующее в настоящее время огромное разнообразие сортов роз образовано путём скрещивания и селекционного отбора нескольких сортов дикого шиповника. Многие сорта парковых махровых роз ведут своё происхождение от розы галльской (Rosa gallica), названной так за своё широкое распространение во Франции (Галлии). Культура этой розы и созданных на её основе сортов ведёт своё начало от Древнего Вавилона, затем Древней Греции и Древнего Рима, а с XIII века Франции и составила целую эпоху в истории роз, вплоть до XVIII века. Путём скрещивания розы галльской с другими видами были получены роза дамасская, роза столистная (Rosa ×centifolia) и роза белая. Приём скрещивания видов в отношении роз был известен в Европе уже в период Римской империи.',1,'/images/flowers/38c1a866-22d6-47cb-875b-e92bfaf07b25.jpeg','Собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком и растущих в дикой природе. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора. Некоторые сорта являются формами дикорастущих видов.'),(6,'Тюльпан','Тюльпа́н (лат. Túlipa) — род многолетних травянистых луковичных растений семейства Лилейные (Liliaceae), в современных систематиках включающий более 80 видов. Центр происхождения и наибольшего разнообразия видов тюльпанов — горы северного Ирана, Памиро-Алай и Тянь-Шань. За 10—15 миллионов лет эволюции тюльпаны расселились до Испании и Марокко на западе, до Забайкалья на востоке и до Синайского полуострова на юге. На севере интродуцированные человеком популяции тюльпана лесного достигли Шотландии и южного побережья Скандинавии.\r\n\r\nВсе тюльпаны — типичные геофиты-эфемероиды, приспособившиеся к жизни в горных, степных и пустынных местностях с жарким сухим летом, холодной зимой и короткой тёплой и влажной, дождливой весной. Развитие тюльпана от семени до цветущего растения занимает от трёх до семи лет. Смена поколений луковиц, в отличие от нарциссов, происходит ежегодно. Во время недолгой весенней вегетации тюльпан цветёт, плодоносит и закладывает под землёй молодые луковицы, а отцветшая луковица умирает. В период летнего покоя, а у некоторых видов и зимой, внутри луковицы, формируются зачатки побега и цветка будущего года. Осенью луковица даёт корни и завершает закладку плодоносящего побега.\r\n\r\nТюльпан Геснера и его гибриды с тюльпаном Фостера — наиболее экономически важная луковичная декоративная культура, выращиваемая и в открытом грунте, и на срезку в теплицах. Культивирование тюльпанов в Азии началось не позднее XI века и достигло расцвета в Османской империи XV—XVIII веков. В середине XVI века тюльпаны появились в Западной Европе, и в течение полутора веков были самой ценной декоративной культурой. С начала XVII века и по настоящее время мировой центр селекции, выращивания и международной торговли тюльпанами базируется в Нидерландах. Непрерывно обновляемый мировой фонд коммерчески культивируемых тюльпанов в 2013—2014 годы насчитывает около 1800 сортов и форм.',1,'/images/flowers/f5be223f-0c99-492e-85e2-dc35cbefba9a.jpg','Тюльпа́н (лат. Túlipa) — род многолетних травянистых луковичных растений семейства Лилейные (Liliaceae), в современных систематиках включающий более 80 видов. Центр происхождения и наибольшего разнообразия видов тюльпанов — горы северного Ирана, Памиро-Алай и Тянь-Шань.');
/*!40000 ALTER TABLE `flower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flower_bouquet`
--

DROP TABLE IF EXISTS `flower_bouquet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flower_bouquet` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `bouquet_id` bigint unsigned NOT NULL,
  `flower_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `flower_bouquet_flower_id_foreign` (`flower_id`),
  KEY `flower_bouquet_bouquet_id_foreign` (`bouquet_id`),
  KEY `flower_bouquet_id_index` (`id`),
  CONSTRAINT `flower_bouquet_bouquet_id_foreign` FOREIGN KEY (`bouquet_id`) REFERENCES `bouquet` (`id`),
  CONSTRAINT `flower_bouquet_flower_id_foreign` FOREIGN KEY (`flower_id`) REFERENCES `flower` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flower_bouquet`
--

LOCK TABLES `flower_bouquet` WRITE;
/*!40000 ALTER TABLE `flower_bouquet` DISABLE KEYS */;
INSERT INTO `flower_bouquet` VALUES (2,19,5);
/*!40000 ALTER TABLE `flower_bouquet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2021_11_03_080359_bouquet',1),(6,'2021_11_03_082343_category',1),(7,'2021_11_03_084531_order',1),(12,'2014_10_12_200000_add_two_factor_columns_to_users_table',2),(13,'2021_11_09_060648_settings',2),(14,'2022_05_14_083935_create_flower_table',3),(15,'2022_05_14_084304_create_flower_bouquet_table',3),(16,'2022_05_14_093056_add_image_to_flower_table',4),(17,'2022_05_14_103904_add_short_desc_to_flower_table',5),(18,'2022_05_16_184829_create_review_table',6),(19,'2022_05_16_184919_create_answer_table',6),(20,'2022_05_17_074412_alter_review_column_comment',7),(21,'2022_05_18_101358_alter_answer_answer_id_column',8),(23,'2022_05_21_120348_alter_table_question_add_status_col',9);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `order_id_index` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (3,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(4,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(5,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(6,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(7,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(8,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(9,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','Дайте 2',0),(10,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(11,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(12,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(13,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1),(14,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(15,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(16,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(17,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,2),(18,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1),(19,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1),(20,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1),(21,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,2),(22,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1),(23,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,2),(24,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,2),(25,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','Доставьте побыстрее',1),(26,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','Можно по быстрее!',2),(27,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','kek',0),(28,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','kek',0),(29,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','ktk',0),(30,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','jtyjty',0),(31,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1),(32,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11','ghtrtrhy',1),(33,'Kek','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,0),(34,'Павел Бережной','+79508450939','PavlikBerezhnoy@mail.ru','ул. Красноармейская, д. 11',NULL,1);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `bouquet_id` bigint unsigned NOT NULL,
  `qty` int NOT NULL,
  `count_price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_item_order_id_foreign` (`order_id`),
  KEY `bouquet_id` (`bouquet_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`bouquet_id`) REFERENCES `bouquet` (`id`),
  CONSTRAINT `order_item_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,8,2,8,'9600'),(2,8,5,1,'750'),(3,9,2,8,'9600'),(4,9,5,1,'750'),(5,10,2,8,'9600'),(6,10,5,1,'750'),(7,11,16,1,'300'),(8,11,5,1,'750'),(9,12,2,1,'1200'),(10,13,16,1,'300'),(11,13,6,1,'250'),(12,14,16,1,'300'),(13,15,6,1,'250'),(14,16,16,1,'300'),(15,17,16,1,'300'),(16,18,16,1,'300'),(17,19,2,1,'1200'),(18,20,2,1,'1200'),(19,21,2,1,'1200'),(20,22,16,1,'300'),(21,23,16,1,'300'),(22,24,16,1,'300'),(23,25,24,5,'16500'),(24,26,6,1,'250'),(25,26,16,3,'3900'),(26,28,1,1,'5500'),(27,28,5,4,'3000'),(28,29,5,1,'750'),(29,30,4,1,'150'),(30,31,21,1,'6000'),(31,32,24,1,'3300'),(32,33,16,1,'1300'),(33,33,19,1,'6900'),(34,34,1,2,'10600');
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Pavel Berezhnoy','ghuthughhu@mail.ru','Спасибо',1);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estimate` smallint NOT NULL,
  `advantages` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `disadvantages` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `validate` tinyint(1) NOT NULL,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `bouquet_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `review_bouquet_id_foreign` (`bouquet_id`),
  CONSTRAINT `review_bouquet_id_foreign` FOREIGN KEY (`bouquet_id`) REFERENCES `bouquet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'Павел Бережной',5,'-la','- ne',1,NULL,19,'2022-05-17 08:01:02',NULL),(2,'Пользователь 1',4,'- Очень качественный букет\r\n- Хорошо собран\r\n- Красивые цветы','- Долгая доставка',1,'Рекомендую данный букет',19,'2022-05-18 09:52:25',NULL),(3,'Анастасия',5,'Прекрасный тортик!','Нет',1,NULL,5,'2022-05-19 10:26:51',NULL),(4,'Валерий',2,'Отличный торт. Доставили быстро.','Долгая доставка. Торт испортился.',1,NULL,5,'2022-05-19 10:28:11',NULL),(5,'Мила',5,'Очень хорошие цветы. Магазин рекомендую','Нет',1,NULL,24,'2022-05-19 17:54:53',NULL),(6,'Игорь',3,'- Красивый букет','- Долгая доставка',1,'Если б не доставка',21,'2022-05-19 18:02:55',NULL);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (1,'','+7 (950) 389-64-15','phone'),(2,'','+7 (915) 867-22-17','phone'),(4,'','PavlikBerezhnoy@mail.ru','email'),(6,'','47.284153 39.715058','map'),(18,'','/images/settings/e96a1ba4-f9f4-4f30-9c7c-1b65a2ebbddf.png','logo'),(19,'','+7 (908) 174-53-24','phone'),(21,'Адрес','Ул. Комарова 15','address');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statpage`
--

DROP TABLE IF EXISTS `statpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statpage` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `information` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `alias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statpage`
--

LOCK TABLES `statpage` WRITE;
/*!40000 ALTER TABLE `statpage` DISABLE KEYS */;
/*!40000 ALTER TABLE `statpage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Luke Skywalker','luke3@jedi.com',NULL,'$2y$10$Jt0dbMax/aqLiMjLOL00xOAE9XwqADkm43l1u4A1ybOiLXjRDFilS',NULL,NULL,'oHDqjiyMNB','2022-01-22 11:11:21','2022-01-22 11:11:21'),(3,'Павел менеджер','pavlikberezhnoy@mail.ru',NULL,'$2y$10$sMtK66Ql/zYtgPEKo7rXFeWsTZLj9p8Bt478cBDAn14wtE4RkLnMO',NULL,NULL,'kRVBeNqqkS','2022-02-14 05:10:44','2022-02-14 05:10:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-22 20:09:15
