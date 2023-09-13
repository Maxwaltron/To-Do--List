<?php
// Database connection parameters
$servername = "localhost"; // XAMPP's MySQL server hostname
$username = "root"; // XAMPP's default MySQL username
$password = ""; // XAMPP's default MySQL password
$dbname = "your_database_name"; // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the task text from the form
$taskText = $_POST['task_text'];

// Insert the task into the database
$sql = "INSERT INTO tasks (task_name) VALUES ('$taskText')";

if ($conn->query($sql) === TRUE) {
    echo "Task added successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
