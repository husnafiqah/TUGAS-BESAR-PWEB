-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2023 at 12:22 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `document_id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `filenama` varchar(110) NOT NULL,
  `urlpdf` longtext NOT NULL,
  `username_to` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`document_id`, `username`, `filenama`, `urlpdf`, `username_to`, `status`, `createdAt`, `updatedAt`) VALUES
(37, 'syan', '0', 'http://127.0.0.1:5500/signature/file/syan_1686317273008.pdf', 'syan1', 2, '2023-06-09 13:27:53', '2023-06-09 13:28:25'),
(38, 'halox', '0', 'http://127.0.0.1:5500/signature/file/halox_1686390245783.pdf', 'qita', 1, '2023-06-10 09:44:05', '2023-06-10 09:44:05'),
(39, 'halox', '0', 'http://127.0.0.1:5500/signature/file/halox_1686391526139.pdf', 'acaaja', 1, '2023-06-10 10:05:26', '2023-06-10 10:05:26'),
(40, 'test', '0', 'http://127.0.0.1:5500/signature/file/test_1686391957719.pdf', 'acaaja', 1, '2023-06-10 10:12:37', '2023-06-10 10:12:37'),
(44, 'syan2', '0', 'http://127.0.0.1:5500/signature/file/syan2_1686392175246.pdf', 'syan', 1, '2023-06-10 10:16:15', '2023-06-10 10:16:15'),
(47, 'aca', 'semester 4', 'http://127.0.0.1:5500/signature/file/aca_1686392546024.pdf', 'aca', 2, '2023-06-10 10:22:26', '2023-06-12 01:09:35'),
(48, 'halox', 'draftjurnal', 'http://127.0.0.1:5500/signature/file/halox_1686392575364.pdf', 'aca', 1, '2023-06-10 10:22:55', '2023-06-10 10:22:55'),
(50, 'halo', 'tugaspweb', 'http://127.0.0.1:5500/signature/file/halo_1686392659747.pdf', 'aca', 2, '2023-06-10 10:24:19', '2023-06-19 08:31:47'),
(54, 'khairin_', 'proposal', 'http://127.0.0.1:5500/signature/file/khairin__1686393192704.pdf', 'aca', 1, '2023-06-10 10:33:12', '2023-06-10 10:33:12'),
(57, 'api', 'filekuliah', 'http://127.0.0.1:5500/signature/file/api_1686490125601.pdf', 'aca', 2, '2023-06-11 13:28:45', '2023-06-19 16:03:43'),
(61, 'api', 'pweb', 'http://127.0.0.1:5500/signature/file/api_1687190084027.pdf', 'api', 2, '2023-06-19 15:54:44', '2023-06-19 15:54:48'),
(62, 'aca', 'dokumen baru', 'http://127.0.0.1:5500/signature/file/aca_1687190615597.pdf', 'halo_', 1, '2023-06-19 16:03:35', '2023-06-19 16:03:35'),
(63, 'aca', 'tugas pweb', 'http://127.0.0.1:5500/signature/file/tugas pweb-aca_1687192376701.pdf', 'aca', 1, '2023-06-19 16:32:56', '2023-06-19 16:32:56');

-- --------------------------------------------------------

--
-- Table structure for table `signature`
--

CREATE TABLE `signature` (
  `id` int(11) NOT NULL,
  `document_id` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `sign_at` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `sign_img` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `refresh_token`, `active`, `sign_img`, `createdAt`, `updatedAt`) VALUES
(18, 'aca', 'aca@gmail.com', '$2b$10$scYrUl./TCWJxlTMQSXxl.eE5sguZP55rWydyhxf6lI2aAQfYkZwS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJ1c2VybmFtZSI6ImFjYSIsImVtYWlsIjoiYWNhQGdtYWlsLmNvbSIsImlhdCI6MTY4NzI1NDMzNSwiZXhwIjoxNjg3MzQwNzM1fQ.PBXcumBmD6fshsEmW25cpIVrOnQ2GPhiX9_LvVD0oCo', 1, 'http://127.0.0.1:5500/signature/file/aca.jpg', '2023-06-10 10:21:50', '2023-06-20 09:45:35'),
(19, 'halo_', 'halo@gmail.com', '$2b$10$TAMYDwFczgaSnzBlgObPPe2XyExPw.McMm2cWqTN09KFYxDbpGDkq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJ1c2VybmFtZSI6ImhhbG9fIiwiZW1haWwiOiJoYWxvQGdtYWlsLmNvbSIsImlhdCI6MTY4NjQ4ODk1MiwiZXhwIjoxNjg2NTc1MzUyfQ.j_06riOEiWKMVN6THniqLM8bQyyqY-g6OjbWhxZrwdY', 1, 'http://127.0.0.1:5500/signature/file/halo_.jpg', '2023-06-10 10:30:17', '2023-06-11 13:09:12'),
(20, 'khairin_', 'khairinnisa2310@gmail.com', '$2b$10$x618Bxq8OmGa1V5fb7VJA.fEgoion7mxtvMEUK03EhFIfV7UsA6sS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJ1c2VybmFtZSI6ImtoYWlyaW5fIiwiZW1haWwiOiJraGFpcmlubmlzYTIzMTBAZ21haWwuY29tIiwiaWF0IjoxNjg2MzkzMTg0LCJleHAiOjE2ODY0Nzk1ODR9._Ti60sRipZi-SZVGzyi7lex0xIreb8JUVBG40ZE_9eo', 1, 'http://127.0.0.1:5500/signature/file/khairin_.jpg', '2023-06-10 10:32:59', '2023-06-10 10:33:30'),
(25, 'api', 'api@gmail.com', '$2b$10$RMshEQtZ3du1G7stY3iG7.JOz.Hmc8hui9HgDNaATMx//H1DhyBv2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJ1c2VybmFtZSI6ImFwaSIsImVtYWlsIjoiYXBpQGdtYWlsLmNvbSIsImlhdCI6MTY4NzI1NDI5NCwiZXhwIjoxNjg3MzQwNjk0fQ.b8smeR4mapbheRnJVts4e7YfZ80ZMIM2hysVQn6q3GU', 1, 'http://127.0.0.1:5500/signature/file/api.jpg', '2023-06-11 13:27:58', '2023-06-20 09:44:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`document_id`);

--
-- Indexes for table `signature`
--
ALTER TABLE `signature`
  ADD PRIMARY KEY (`id`,`document_id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `document_id` (`document_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`,`email`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
