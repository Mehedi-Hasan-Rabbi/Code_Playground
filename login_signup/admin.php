<?php
   session_start();
   
   if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
   {
       header("location: adminlogin.php");
   }
   
   require_once "config.php";
   $sql = "select * from users";
   $result = mysqli_query($conn, $sql);
   $login = mysqli_fetch_all($result, MYSQLI_ASSOC);
   
   mysqli_free_result($result);
   mysqli_close($conn);
   
   ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Home - Code Playground</title>
    <link rel="icon" type="image/x-icon" href="../assets/favicon-196.png" />
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <style>
      body {
        padding-top: 56px;
        overflow-x: hidden;
      }
      .col-md-2.sidebar.bg-dark {
        min-height: 100vh;
        position: relative;
      }
      .col-md-2.sidebar.bg-dark {
        transition: 0.4s;
        transform: translateX(0);
      }
      .col-md-2.sidebar.bg-dark.active {
        transform: translateX(-100%);
        position: absolute;
        height: 100vh;
      }
      .col-md-10 {
        height: 100vh;
      }
      .col-md-10.active {
        flex: 0 0 100%;
        max-width: 100%;
        transition: 0.6s;
      }
      h1 {
        margin: 30px;
        text-align: center;
      }
      .h5,
      h5 {
        font-size: 1.25rem;
        margin-left: 85px;
      }
      #submit {
        background-color: orange;
        padding: 7px;
        border-radius: 15px;
        color: blue;
        margin-top: 50px;
        margin-left: 85px;
      }
    </style>
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav
      class="navbar fixed-top navbar-expand-lg"
      style="background-color: #0e1525"
    >
      <div class="container container-fluid">
        <button class="btn sideBarToggler text-white">
          <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand" style="color: white" href="#"
          ><img
            style="height: 45px"
            src="../assets/icon-rounded-192x192.png"
            alt="logo"
          />Code Playground</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                style="color: white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <?php echo "Welcome, ". $_SESSION['username']?>
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">Account</a></li>
                <li><a class="dropdown-item" href="logout.php">Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navigation Bar -->

    <h1>All User on this web</h1>
    <div id="content">
      <?php foreach($login as $logs){ ?>
      <h5>
        Username:
        <?php echo htmlspecialchars($logs['username']);?>
      </h5>
      <h5>
        Email:
        <?php echo htmlspecialchars($logs['email']);?>
      </h5>
      <hr />
      <hr />
      <?php } ?>
    </div>
    <div id="page"></div>
    <button id="submit">Export to PDF</button>
    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <!-- jquery -->
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
    <script>
      var doc = new jsPDF();
      var specialElementHandlers = {
        "#editor": function (element, renderer) {
          return true;
        },
      };
      $("#submit").click(function () {
        doc.fromHTML($("#content").html(), 15, 15, {
          width: 190,
          elementHandlers: specialElementHandlers,
        });
        doc.save("users-page.pdf");
      });
    </script>
  </body>
</html>
