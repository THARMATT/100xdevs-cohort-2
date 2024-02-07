# Week 10.1:
 Types of Databases, SQL vs NoSQL, Creating Database, Connecting, Tables to Schema, Interacting with Database, Queries in Node.js, Simple Node.js App with SQL Database, Transactions, and Joins

1. **Types of Databases:**
   - **Relational Databases:** Structured databases that use tables to store data and have predefined schemas. Examples include MySQL, PostgreSQL, and SQLite.
   - **NoSQL Databases:** Unstructured or semi-structured databases that do not require a fixed schema. Examples include MongoDB, Cassandra, and Redis.

2. **SQL vs NoSQL:**
   - **SQL (Structured Query Language):** Used for relational databases. Provides a standard way to interact with and manage databases. SQL databases are suitable for complex queries and transactions.
   - **NoSQL:** Suited for unstructured or semi-structured data. Offers flexibility and scalability. Common types include document-oriented (MongoDB), key-value stores (Redis), and wide-column stores (Cassandra).

3. **Why SQL:**
   - SQL databases ensure data integrity and consistency through ACID properties (Atomicity, Consistency, Isolation, Durability).
   - Well-suited for applications with complex relationships and transactions.
   - Mature and widely adopted technology.

4. **Creating a Database:**
   - Use SQL commands to create a new database. Example:
     ```sql
     CREATE DATABASE mydatabase;
     ```

5. **Connecting to Database:**
   - Use a database management system or a programming language-specific library to establish a connection.
   - Example using Node.js with `mysql` library:
     ```javascript
     const mysql = require('mysql');
     const connection = mysql.createConnection({
       host: 'localhost',
       user: 'username',
       password: 'password',
       database: 'mydatabase'
     });

     connection.connect();
     ```

6. **Tables to Schema:**
   - Define tables with a predefined schema to ensure data consistency.
   - Example:
     ```sql
     CREATE TABLE users (
       id INT PRIMARY KEY,
       username VARCHAR(255),
       email VARCHAR(255)
     );
     ```

7. **Interacting with Database:**
   - Perform CRUD operations (Create, Read, Update, Delete) using SQL queries.
   - Example:
     ```sql
     INSERT INTO users (id, username, email) VALUES (1, 'john_doe', 'john@example.com');
     ```

8. **Queries in Node.js:**
   - Use SQL queries within Node.js applications to interact with the database.
   - Example:
     ```javascript
     const query = 'SELECT * FROM users';
     connection.query(query, (error, results, fields) => {
       if (error) throw error;
       console.log(results);
     });
     ```

9. **Simple Node.js App with SQL Database:**
   - Create a basic Node.js application that connects to a SQL database, performs queries, and serves responses.

10. **Relation with Transactions:**
    - Transactions ensure the atomicity and consistency of multiple SQL operations.
    - Example:
      ```javascript
      connection.beginTransaction(function (err) {
        if (err) throw err;
        connection.query('INSERT INTO users SET ?', {username: 'john_doe', email: 'john@example.com'}, function (error, results, fields) {
          if (error) {
            return connection.rollback(function() {
              throw error;
            });
          }
          connection.commit(function(err) {
            if (err) {
              return connection.rollback(function() {
                throw err;
              });
            }
            console.log('Transaction Complete.');
          });
        });
      });
      ```

11. **Joins:**
    - Use joins to combine rows from two or more tables based on related columns.
    - Example:
      ```sql
      SELECT users.id, users.username, orders.order_id FROM users
      INNER JOIN orders ON users.id = orders.user_id;
      ```

This detailed overview covers the key aspects of working with databases, SQL, and NoSQL, along with practical examples using Node.js for illustration.

```
