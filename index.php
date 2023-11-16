<?php
  // Connect to the database
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "coca_cola";
  
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  // Retrieve product data from the database
  $sql = "SELECT name, description, image_path, link FROM products";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $name = $row["name"];
      $description = $row["description"];
      $image_path = $row["image_path"];
      $link = $row["link"];
  
      // Populate the HTML page with product data
      echo '<div class="' . strtolower($name) . '">';
      echo '<img src="' . $image_path . '" alt="' . $name . '">';
      echo '<p>' . $description . '</p>';
      echo '<a href="' . $link . '"><button>More</button></a>';
      echo '</div>';
    }
  }
  
  // Retrieve page data from the database
  $sql = "SELECT title, content FROM pages WHERE id = 1";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $title = $row["title"];
      $content = $row["content"];
  
      // Populate the HTML page with page data
      echo '<title>' . $title . '</title>';
      echo '<div id="navbar">';
      echo '<div id="logo"><a><div style="font-family: Shadows Into Light; font-size: 22px; color: rgb(247, 245, 245)">COCA COLA</div></a></div>';
      echo '</div>';
      echo '<header><p>';
      echo $content;
      echo '</p></header>';
    }
  }
  
  ?>
  <!DOCTYPE html>
  <html lang="en">
  <head> 
    <meta charset="UTF-8">
      
      <meta http-equiv="X-UA-Comatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script type="module" src="module.js">
  
      </script>
      <script src="body.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
  </div>
  </body>
  <body>
    <div id="navbar">
      <div id="logo">
        <a><div style="font-family: Shadows Into Light; font-size: 22px; color: rgb(247, 245, 245)">COCA COLA</div></a>
              </div>
      </div>
    </div>
    </div>
    
    </div>
    <div class="ad">
      <img src="assets/ad.jpg" alt="Description of image">
    </div>
    <header>
      <p>
        <div class="image-container">
          <img src="assets/coca.jpg" alt="Coca-Cola">
          <p>Coca-Cola or Coke is a carbonated soft drink manufactured by the coca-cola company. In  2013, Coke products were sold
            in over 200 countries worldwide, with consumers drinking more than 1.8 billion company beverage servings each day.</p>
          <a href="https://us.coca-cola.com/products"><button>More</button></a>
          </div>
          
          <div class="fanta">
          <img src="assets/fanta.jpg" alt="Fanta">
          <p>Fanta is an American-owned German brand of fruit-flavoured carbonated soft drinks created by Coca-Cola Deutschland under the
            leadership of German businessman Max Keith. There are more than 200 flavors worldwide. </p>
          <a href="https://www.fanta.com"><button>More</button></a>
          </div>
          
          <div class="DR">
          <img src="assets/dr.png" alt="Dr Pepper">
          <p>Keurig Dr Pepper Inc., formerly Green Mountain Cofee Roasters and Keuring Green mountain, is a publicly 
            traded American beverage and coffemaker conglomarates with headquaters in Burlington, Massachusetts. .</p>
          <a href="https://drpepper.com/"><button>More</button></a>
          </div>
          
      </p>
        
      
        
      <nav>
        <ul>
          <li><a href="#" data-title="Home page">Home</a></li>
          <li><a href="about.html" data-title="Learn more About us">About</a></li>
          <li><a href="reference.html" data-title="Browse our Reference materials">Reference</a></li>
          <li><a href="models.html" data-title="3D Models">Models</a></li>
          <li><a href="https://github.com/your-username" data-title="Visit our GitHub page">GitHub</a></li>
          </ul>
          
        
      </nav>
      <div id="aside">
        
    </header>
    <div class="ad-container">
      <body>
      <h2 style="font-family: Shadows Into Light; font-size: 22px; color: rgb(247, 245, 245)">Share a Coke with Friends</h2>
      <p style="font-family: Shadows Into Light; font-size: 22px; color: rgb(247, 245, 245)">Enjoy the refreshing taste of Coca-Cola with your friends and family. Share a Coke and make memories that will last a lifetime.</p>
      
      <div class="media-container">
        <video src="assets/video.mp4" autoplay loop muted></video>
      </div>
      
      
      <footer>
        <p>&copy; 2023 3D Apps | <div class="button-container"><button class="button" onclick="restyle()">Restyle</button> |
          <button class="button" onclick="reset()">Reset</button>  <br> All rights reserved.</p>
          
        </footer>
        
  </body>
  </html>
  
}

