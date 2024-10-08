// 3.Create a Node.js file that demonstrates create database and table in MySQL

const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');

    // Create a new database
    const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS testDB';
    connection.query(createDatabaseQuery, (err, result) => {
        if (err) throw err;
        console.log('Database created or already exists');

        // Use the created database
        connection.changeUser({ database: 'testDB' }, (err) => {
            if (err) throw err;
            console.log('Switched to testDB database');

            // Create a new table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    age INT NOT NULL,
                    grade VARCHAR(10)
                )
            `;
            connection.query(createTableQuery, (err, result) => {
                if (err) throw err;
                console.log('Table "students" created or already exists');
                
                // Close the connection
                connection.end((err) => {
                    if (err) throw err;
                    console.log('Connection closed');
                });
            });
        });
    });
});
