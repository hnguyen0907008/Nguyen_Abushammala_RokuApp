-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 18, 2021 at 04:12 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `roku_streaming`
--

-- --------------------------------------------------------

--
-- Table structure for table `audio_genre`
--

CREATE TABLE `audio_genre` (
  `genre_id` int(10) NOT NULL,
  `genre_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `audio_genre`
--

INSERT INTO `audio_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Pop'),
(2, 'Rock'),
(3, 'Jazz');

-- --------------------------------------------------------

--
-- Table structure for table `kids_audio`
--

CREATE TABLE `kids_audio` (
  `id` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `cover` varchar(30) NOT NULL,
  `audio_src` varchar(50) NOT NULL,
  `year` int(10) NOT NULL,
  `artist` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kids_audio`
--

INSERT INTO `kids_audio` (`id`, `title`, `cover`, `audio_src`, `year`, `artist`) VALUES
(1, 'Happy, Happy, Joy, Joy', 'kidaud1.png', 'kidaud1.mp3', 1993, 'Ren and Stimpy'),
(2, 'Wakko\'s America', 'kidaud2.png', 'kidaud2.mp3', 1993, 'Animaniacs'),
(3, 'Visionaries Theme Song', 'kidaud3.png', 'kidaud3.mp3', 1987, 'Visionaries: Knights of the Magical Light'),
(4, 'Kiss The Girl', 'kidaud4.png', 'kidaud4.mp3', 1991, 'The Little Mermaid'),
(5, 'Why Should I Worry', 'kidaud5.png', 'kidaud5.mp3', 1988, 'Oliver & Company');

-- --------------------------------------------------------

--
-- Table structure for table `parents_audio`
--

CREATE TABLE `parents_audio` (
  `id` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `cover` varchar(30) NOT NULL,
  `audio_src` varchar(50) NOT NULL,
  `year` int(10) NOT NULL,
  `artist` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parents_audio`
--

INSERT INTO `parents_audio` (`id`, `title`, `cover`, `audio_src`, `year`, `artist`) VALUES
(1, 'That Boy Is Mine', 'aud1.png', 'aud1.mp3', 1998, 'Brandy and Monica'),
(2, 'Livin\' On A Prayer', 'aud2.png', 'aud2.mp3', 1986, 'Bon Jovi'),
(3, 'Smells Like Teen Spirit', 'aud3.png', 'aud3.mp3', 1991, 'Nirvana'),
(4, 'What A Wonderful World', 'aud4.png', 'aud4.mp3', 1967, 'Louis Armstrong'),
(5, 'So What', 'aud5.png', 'aud5.mp3', 1959, 'Miles Davis');

-- --------------------------------------------------------

--
-- Table structure for table `parents_movies`
--

CREATE TABLE `parents_movies` (
  `movie_id` mediumint(8) UNSIGNED NOT NULL,
  `movie_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movie_title` varchar(125) NOT NULL,
  `movie_year` varchar(5) NOT NULL,
  `movie_runtime` varchar(25) NOT NULL,
  `movie_storyline` text NOT NULL,
  `movie_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `video_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parents_movies`
--

INSERT INTO `parents_movies` (`movie_id`, `movie_cover`, `movie_title`, `movie_year`, `movie_runtime`, `movie_storyline`, `movie_trailer`, `video_type`) VALUES
(1, '1.png', 'Monkey Trouble', '1994', '2h 16m', 'A young girl, Eva, befriends a monkey named Dodger and performs an entertainment act with him on the street. However, she soon finds out that Dodger is in fact a trained pickpocket.', 'monkey.mp4', 'movie'),
(2, '2.png', 'Jerry Maguire', '1996', '2h', 'Sports agent Jerry Maguire tries to get back on his feet after being fired from his job. However, the only client he has is Rod Tidwell, a disgruntled football player who wants a better contract.', 'jerry.mp4', 'movie'),
(3, '4.png', 'Men In Black', '1997', '1h 40m', 'K and J, (the men in black) are the scum-fighting super-agents; their latest mission is to save the world from a total intergalactic disaster.', 'mib.mp4', 'movie'),
(4, '9.png', 'The Goonies', '1985', '2h', 'A group of west coast kids facing their last days together before a development paves over their homes stumble onto evidence of pirate\'s treasure attracting the attention of a family of criminals.', 'goonies.mp4', 'movie'),
(5, '12.png', 'Boy Meets World', '1993', '1h 57m', 'With the help of true love Topanga, best friend Shawn and teacher Mr. Feeny, Cory Matthews juggles school, friends and romance. The series, a popular Friday night staple on ABC for seven seasons, began with Cory in the sixth grade and follows him and his entourage through their college years.', 'boy.mp4', 'movie'),
(6, '13.png', 'The Green Mile', '1999', '2h', 'Paul Edgecomb, the head guard of a prison, meets an inmate, John Coffey, a black man who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift.', 'greenmile.mp4', 'movie'),
(7, '14.png', 'Point Break', '1991', '1h 46m', 'FBI agent Johnny Utah infiltrates a group of surfers involved in a number of bank robberies. However, things get complicated when he befriends the gang\'s leader, Bodhi.', 'pointbreak.mp4', 'movie'),
(8, '15.png', 'Waterworld', '1995', '2h', 'The polar ice caps have melted down and most of Earth is underwater. In this situation, a mutated mariner fights starvation and reluctantly helps a woman and a young girl find dry land.', 'water.mp4', 'movie'),
(9, '16.png', 'How to Marry a Millionaire', '1953', '1h 30m', 'Drama movie about three women who are tired of cheap men and a lack of money. They intend to use all their talents to trap and marry three eligible millionaires, but find true love in the process.\r\n', 'marry.mp4', 'movie'),
(10, '17.png', 'Groundhog Day', '1993', '2h ', 'Phil, a self-centred weatherman, goes to the town of Punxsutawney for an assignment. He is later shocked when he wakes up the next morning and realises that he is reliving the same day over and over.', 'groundhog.mp4', 'movie');

-- --------------------------------------------------------

--
-- Table structure for table `parents_tv`
--

CREATE TABLE `parents_tv` (
  `tv_id` mediumint(8) UNSIGNED NOT NULL,
  `tv_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `tv_title` varchar(125) NOT NULL,
  `tv_year` varchar(5) NOT NULL,
  `tv_runtime` varchar(25) NOT NULL,
  `tv_storyline` text NOT NULL,
  `tv_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `video_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parents_tv`
--

INSERT INTO `parents_tv` (`tv_id`, `tv_cover`, `tv_title`, `tv_year`, `tv_runtime`, `tv_storyline`, `tv_trailer`, `video_type`) VALUES
(1, '3.png', 'The Wonder Years', '1988', '6 Seasons', 'With a dry sense of humour and the insight one gains with maturity, a grown-up Kevin provides funny commentary on himself as a young boy trying to cope with the bizarre world of a teenager.', 'wonder_years.mp4', 'tv'),
(2, '5.png', 'Seinfield', '1989', '9 Seasons', 'Stand-up comedian Jerry Seinfeld wrestles with life\'s most perplexing yet trivial questions with his eccentric friends George, Elaine and Kramer.', 'seinfield.mp4', 'tv'),
(3, '6.png', 'Dream On', '1990', '6 Seasons', 'The show was also significant for being one of the first American sitcoms to use uncensored profanity and nudity. Dream On first aired July 1990 on HBO, and was cancelled by HBO in March 1996.', 'Hacksaw.mp4', 'tv'),
(4, '7.png', 'The Hogan Family', '1986', '6 Seasons', 'It starts out as a standard family sitcom called \"Valerie\" about a mom juggling the demands of work, three boys and a frequently absent airline pilot husband. Then after star Valerie Harper has a falling-out with producers, her character is killed off. Enter Sandy Duncan as the live-in aunt and surrogate mother figure, which leads to renaming the show first \"Valerie\'s Family\" and then \"The Hogan Family.\"', 'hogan.mp4', 'tv'),
(5, '8.png', 'Just the Ten of Us', '1988', '47 Episodes', 'A schoolteacher, his pregnant wife and their seven children move West.', 'tenofus.mp4', 'tv'),
(6, '11.png', 'Wings', '1990', '8 Seasons', 'Two brothers, Joe and Brian Hackett, run a one-plane commuter service from a small Nantucket airport. Along with Joe\'s on-again/off-again girlfriend, there are more hilarious and eccentric characters who work out of or at the airport.', 'wings.mp4', 'tv'),
(7, '18.png', 'A Family for Joe', '1990', '1 Season', 'A Family for Joe is an American sitcom that starred Robert Mitchum in the title role. It started out as a television movie that aired NBC on February 25, 1990, before turning it into a series that lasted from March 24 until August 19, 1990. Nine episodes of the series were filmed.', 'joe.mp4', 'tv'),
(8, '19.png', 'Clarissa Explains It All', '1991', '5 Seasons', 'In the series, Clarissa Darling (Melissa Joan Hart), is a teenager who addresses the audience directly to explain the things that are happening in her life, dealing with typical adolescent concerns such as school, boys, pimples, wearing her first training bra, and an annoying younger brother.', 'clarissa.mp4', 'tv'),
(9, '20.png', 'Star Trek: The Next Generation', '1987', '7 Seasons', 'Set almost 100 years after Captain Kirk\'s five-year mission, a new generation of Starfleet officers set off in the U.S.S. Enterprise-D on their own mission to go where no one has gone before.', 'star_trek.mp4', 'tv'),
(10, '21.png', 'The Cosby Show', '1984', '8 Seasons', 'Image result for the cosby show summary\r\n\"The Cosby Show\" centers on the lives of the Huxtables: obstetrician Cliff and his lawyer wife Claire, their daughters Sondra, Denise, Vanessa and Rudy, and son Theo. Based on the standup comedy of Bill Cosby, the show focused on his observations of family life.', 'cosby.mp4', 'tv');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_arating`
--

CREATE TABLE `tbl_arating` (
  `arating_id` smallint(5) UNSIGNED NOT NULL,
  `arating_name` varchar(125) NOT NULL,
  `arating_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `tbl_arating`
--

INSERT INTO `tbl_arating` (`arating_id`, `arating_name`, `arating_desc`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give    &ldquo;parental guidance&rdquo;. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_admin` tinyint(4) DEFAULT NULL,
  `user_access` tinyint(4) DEFAULT NULL,
  `user_avatar` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_admin`, `user_access`, `user_avatar`) VALUES
(1, 'trevor', 'user1', 'password', 't@t.com', '2019-02-01 19:07:35', '::1', 1, 5, 'parents.png'),
(2, 'isabelle', 'user2', '123', 'i@i.ca', '2021-04-17 18:23:11', 'no', 0, NULL, 'kids.png');

-- --------------------------------------------------------

--
-- Table structure for table `video_genre`
--

CREATE TABLE `video_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL,
  `genre_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `video_genre`
--

INSERT INTO `video_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Comedy'),
(4, 'Drama'),
(5, 'Animation'),
(6, 'Family'),
(7, 'Fantasy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audio_genre`
--
ALTER TABLE `audio_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `kids_audio`
--
ALTER TABLE `kids_audio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parents_audio`
--
ALTER TABLE `parents_audio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parents_movies`
--
ALTER TABLE `parents_movies`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `video_genre`
--
ALTER TABLE `video_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audio_genre`
--
ALTER TABLE `audio_genre`
  MODIFY `genre_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kids_audio`
--
ALTER TABLE `kids_audio`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `parents_audio`
--
ALTER TABLE `parents_audio`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `parents_movies`
--
ALTER TABLE `parents_movies`
  MODIFY `movie_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  MODIFY `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `video_genre`
--
ALTER TABLE `video_genre`
  MODIFY `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
