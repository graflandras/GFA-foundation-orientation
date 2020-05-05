/* https://lagunita.stanford.edu/courses/DB/SQL/SelfPaced/courseware/ch-sql/seq-exercise-sql_movie_query_extra/ */

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


/* Find the names of all reviewers who rated Gone with the Wind. */
SELECT DISTINCT name
FROM Movie
INNER JOIN Rating USING(mId)
INNER JOIN Reviewer USING(rId)
WHERE title = "Gone with the Wind";


/* For any rating where the reviewer is the same as the director of the movie, return the reviewer name, movie title, and number of stars. */
SELECT name, title, stars
FROM Movie
INNER JOIN Rating USING(mId)
INNER JOIN Reviewer USING(rId)
WHERE director = name;


/* Return all reviewer names and movie names together in a single list, alphabetized. (Sorting by the first name of the reviewer and first word in the title is fine; no need for special processing on last names or removing "The".) */
SELECT title FROM Movie
UNION
SELECT name FROM Reviewer
ORDER BY name, title;


/* 4. Find the titles of all movies not reviewed by Chris Jackson. */ 
SELECT title
FROM Movie
WHERE mId NOT IN (
  SELECT mId
  FROM Rating
  INNER JOIN Reviewer USING(rId)
  WHERE name = "Chris Jackson"
);


/* 5. For all pairs of reviewers such that both reviewers gave a rating to the same movie, return the names of both reviewers. 
Eliminate duplicates, don't pair reviewers with themselves, and include each pair only once. For each pair, 
return the names in the pair in alphabetical order.*/
SELECT DISTINCT Re1.name, Re2.name
FROM Rating R1, Rating R2, Reviewer Re1, Reviewer Re2
WHERE R1.mID = R2.mID
AND R1.rID = Re1.rID
AND R2.rID = Re2.rID
AND Re1.name < Re2.name
ORDER BY Re1.name, Re2.name;


/* 6. For each rating that is the lowest (fewest stars) currently in the database, 
return the reviewer name, movie title, and number of stars. */
SELECT name, title, stars
FROM Movie
INNER JOIN Rating USING(mId)
INNER JOIN Reviewer USING(rId)
WHERE stars = (SELECT MIN(stars) FROM Rating);


/* 7. List movie titles and average ratings, from highest-rated to lowest-rated. 
If two or more movies have the same average rating, list them in alphabetical order. */
SELECT title, AVG(stars) AS average
FROM Movie
INNER JOIN Rating USING(mId)
GROUP BY mId
ORDER BY average DESC, title;


/* 8. Find the names of all reviewers who have contributed three or more ratings. */
SELECT name
FROM Reviewer
WHERE (SELECT COUNT(*) FROM Rating WHERE Rating.rId = Reviewer.rId) >= 3;

SELECT name
FROM Reviewer
INNER JOIN Rating USING(rId)
GROUP BY rId
HAVING COUNT(*) >= 3;

/* At least 3 ratings to different movies (Remainder to myself) */
SELECT name
FROM Reviewer
WHERE (SELECT COUNT(DISTINCT mId) FROM Rating WHERE Rating.rId = Reviewer.rId) >= 3;


/* 9. Some directors directed more than one movie. For all such directors, 
return the titles of all movies directed by them, along with the director name. Sort by director name, then movie title. */
SELECT title, director
FROM Movie M1
WHERE (SELECT COUNT(*) FROM Movie M2 WHERE M1.director = M2.director) > 1
ORDER BY director, title;

SELECT M1.title, director
FROM Movie M1
INNER JOIN Movie M2 USING(director)
GROUP BY M1.mId
HAVING COUNT(*) > 1
ORDER BY director, M1.title;


/* 10. Find the movie(s) with the highest average rating. Return the movie title(s) and average rating. */
SELECT title, AVG(stars) AS average
FROM Movie
INNER JOIN Rating USING(mId)
GROUP BY mId
HAVING average = (
  SELECT MAX(average_stars)
  FROM (
    SELECT title, AVG(stars) AS average_stars
    FROM Movie
    INNER JOIN Rating USING(mId)
    GROUP BY mId
  )
);


/* 11. Find the movie(s) with the lowest average rating. Return the movie title(s) and average rating. */
SELECT title, AVG(stars) AS average
FROM Movie
INNER JOIN Rating USING(mId)
GROUP BY mId
HAVING average = (
  SELECT MIN(average_stars)
  FROM (
    SELECT title, AVG(stars) AS average_stars
    FROM Movie
    INNER JOIN Rating USING(mId)
    GROUP BY mId
  )
);


/* 12. For each director, return the director's name together with the title(s) of the movie(s) they directed that received 
the highest rating among all of their movies, and the value of that rating. Ignore movies whose director is NULL. */
SELECT director, title, MAX(stars)
FROM Movie
INNER JOIN Rating USING(mId)
WHERE director IS NOT NULL
GROUP BY director;