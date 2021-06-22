/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.11-MariaDB : Database - jarvis
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`jarvis` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `jarvis`;

/*Table structure for table `customer` */

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `id_customer` int(11) NOT NULL AUTO_INCREMENT,
  `code_customer` varchar(50) DEFAULT NULL,
  `name_customer` varchar(100) DEFAULT NULL,
  `email_customer` varchar(50) DEFAULT NULL,
  `status_customer` varchar(20) DEFAULT 'ACTIVE',
  `phone_customer` varchar(50) DEFAULT NULL,
  `image_customer` varchar(255) DEFAULT NULL,
  `is_deleted` int(11) DEFAULT 0,
  `alamat_customer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_customer`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `customer` */

insert  into `customer`(`id_customer`,`code_customer`,`name_customer`,`email_customer`,`status_customer`,`phone_customer`,`image_customer`,`is_deleted`,`alamat_customer`) values 
(1,'dawdsadwad12','Gading','gading@gmail.com','ACTIVE','085647262611',NULL,1,'Jalan Manggis'),
(3,'k-1','Susi','susi@gmail.com','ACTIVE','085647262611',NULL,0,'Jalan Diponegoro'),
(4,'k-2','Mario','mario@gmail.com','ACTIVE','085647262611',NULL,0,'Jalan Mundu'),
(5,'K-2','Gading','gadinghero@gmail.com','ACTIVE','085647262611',NULL,0,'Jalan Mundu Nomor 56'),
(6,'K-3','Decibel Bellini','decibel@gmail.com','ACTIVE','085647262611',NULL,1,'Jalan Trikora'),
(7,'K-4','Romario','romario@gmail.com','ACTIVE','085647262633','images/IMG-1624347582042.png',0,'Jalan mundu nomor 56');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
