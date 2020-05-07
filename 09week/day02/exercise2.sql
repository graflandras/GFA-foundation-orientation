CREATE database example;

USE example;

CREATE TABLE IF NOT EXISTS tasks(
    id INT,
    task_desc VARCHAR(255) NOT NULL,
    isDone INT,
    task_owner VARCHAR(255) NOT NULL,
    PRIMARY KEY ( id )
);

insert into tasks values(101, 'Get up', 0, 'Andris');
insert into tasks values(102, 'Get milk', 1, 'Peti');
insert into tasks values(103, 'Wash', 0, 'Peti');
insert into tasks values(104, 'Sleep', 1, 'Andris');

/* táblázat ellenőrzése */
SELECT * FROM tasks;

/* Eredmény: 
+-----+-----------+--------+------------+
| id  | task_desc | isDone | task_owner |
+-----+-----------+--------+------------+
| 101 | Get up    |      0 | Andris     |
| 102 | Get milk  |      1 | Peti       |
| 103 | Wash      |      0 | Peti       |
| 104 | Sleep     |      1 | Andris     |
+-----+-----------+--------+------------+
*/



/* elvégzett feladatok kilistázása */

SELECT task_desc, isDone, task_owner FROM tasks
WHERE isDone = 1;

/* Eredmény: 
+-----------+--------+------------+
| task_desc | isDone | task_owner |
+-----------+--------+------------+
| Get milk  |      1 | Peti       |
| Sleep     |      1 | Andris     |
+-----------+--------+------------+
*/

/* NEM elvégzett feladatok száma személyenként (0 - nem elvégzett, 1 - elvégzett) */
SELECT COUNT(isDone), task_owner from tasks
WHERE isDone = 0 
GROUP BY task_owner;

/* Eredmény: 
+---------------+------------+
| COUNT(isDone) | task_owner |
+---------------+------------+
|             1 | Andris     |
|             1 | Peti       |
+---------------+------------+
*/