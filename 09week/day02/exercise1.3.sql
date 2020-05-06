/* https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/courseware/ch-sql/seq-exercise-sql_movie_mod/ */

/* Create the schema for our tables */
create table Movie(mID int, title text, year int, director text);
create table Reviewer(rID int, name text);
create table Rating(rID int, mID int, stars int, ratingDate date);

/* Populate the tables with our data */
insert into Movie values(101, 'Gone with the Wind', 1939, 'Victor Fleming');
insert into Movie values(102, 'Star Wars', 1977, 'George Lucas');
insert into Movie values(103, 'The Sound of Music', 1965, 'Robert Wise');
insert into Movie values(104, 'E.T.', 1982, 'Steven Spielberg');
insert into Movie values(105, 'Titanic', 1997, 'James Cameron');
insert into Movie values(106, 'Snow White', 1937, null);
insert into Movie values(107, 'Avatar', 2009, 'James Cameron');
insert into Movie values(108, 'Raiders of the Lost Ark', 1981, 'Steven Spielberg');

insert into Reviewer values(201, 'Sarah Martinez');
insert into Reviewer values(202, 'Daniel Lewis');
insert into Reviewer values(203, 'Brittany Harris');
insert into Reviewer values(204, 'Mike Anderson');
insert into Reviewer values(205, 'Chris Jackson');
insert into Reviewer values(206, 'Elizabeth Thomas');
insert into Reviewer values(207, 'James Cameron');
insert into Reviewer values(208, 'Ashley White');

insert into Rating values(201, 101, 2, '2011-01-22');
insert into Rating values(201, 101, 4, '2011-01-27');
insert into Rating values(202, 106, 4, null);
insert into Rating values(203, 103, 2, '2011-01-20');
insert into Rating values(203, 108, 4, '2011-01-12');
insert into Rating values(203, 108, 2, '2011-01-30');
insert into Rating values(204, 101, 3, '2011-01-09');
insert into Rating values(205, 103, 3, '2011-01-27');
insert into Rating values(205, 104, 2, '2011-01-22');
insert into Rating values(205, 108, 4, null);
insert into Rating values(206, 107, 3, '2011-01-15');
insert into Rating values(206, 106, 5, '2011-01-19');
insert into Rating values(207, 107, 5, '2011-01-20');
insert into Rating values(208, 104, 3, '2011-01-02');


/* 1. Add the reviewer Roger Ebert to your database, with an rID of 209. */
INSERT INTO Reviewer
VALUES (209, "Roger Ebert");


/* 2. Insert 5-star ratings by James Cameron for all movies in the database. Leave the review date as NULL. */
INSERT INTO Rating
SELECT (SELECT rId FROM Reviewer WHERE name = "James Cameron"), mId, 5, NULL
FROM Movie;


/* 3. For all movies that have an average rating of 4 stars or higher, add 25 to the release year. 
(Update the existing tuples; don't insert new tuples.) */
UPDATE Movie
SET year = year + 25
WHERE mId IN (
  SELECT mId
  FROM Movie
  INNER JOIN Rating USING(mId)
  GROUP BY mId
  HAVING AVG(stars) >= 4
);


/* 4. Remove all ratings where the movie's year is before 1970 or after 2000, and the rating is fewer than 4 stars. */
DELETE FROM Rating
WHERE mId IN (
  SELECT mId
  FROM Movie
  WHERE year < 1970 OR year > 2000
) AND stars < 4;