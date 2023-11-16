 // Close the database connection
  $conn->close();
  ?>
  <?php
  CREATE DATABASE coca_cola;
  
  USE coca_cola;
  
  CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL
  );
  
  CREATE TABLE pages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
  );
  -- User Table
CREATE TABLE User (
  user_id INT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME
);

-- 3D Model Table
CREATE TABLE `3D_Model` (
  model_id INT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  created_by INT,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (created_by) REFERENCES User(user_id)
);

-- Image Table
CREATE TABLE Image (
  image_id INT PRIMARY KEY,
  filename VARCHAR(255),
  created_by INT,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (created_by) REFERENCES User(user_id)
);

-- Model Image Table
CREATE TABLE Model_Image (
  model_image_id INT PRIMARY KEY,
  model_id INT,
  image_id INT,
  FOREIGN KEY (model_id) REFERENCES `3D_Model`(model_id),
  FOREIGN KEY (image_id) REFERENCES Image(image_id)
);

