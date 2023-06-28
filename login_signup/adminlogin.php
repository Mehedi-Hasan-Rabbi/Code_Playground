<?php
  //This script will handle login
  session_start();
  
  // check if the user is already logged in
  if(isset($_SESSION['username']))
  {
      header("location: admin.php");
      exit;
  }
  require_once "config.php";
  
  $username = $password = "";
  $err = "";
  
  // if request method is post
  if ($_SERVER['REQUEST_METHOD'] == "POST"){
      if(empty(trim($_POST['username'])) || empty(trim($_POST['password'])))
      {
          $err = "Please enter username + password";
      }
      else{
          $username = trim($_POST['username']);
          $password = trim($_POST['password']);
      }
  
  
  if(empty($err))
  {
      $sql = "SELECT id, username, password FROM admin WHERE username = ?";
      $stmt = mysqli_prepare($conn, $sql);
      mysqli_stmt_bind_param($stmt, "s", $param_username);
      $param_username = $username;
      
      
      // Try to execute this statement
      if(mysqli_stmt_execute($stmt)){
          mysqli_stmt_store_result($stmt);
          if(mysqli_stmt_num_rows($stmt) == 1)
                  {
                      mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
                      if(mysqli_stmt_fetch($stmt))
                      {
                          if(password_verify($password, $hashed_password))
                          {
                              // this means the password is corrct. Allow user to login
                              session_start();
                              $_SESSION["username"] = $username;
                              $_SESSION["id"] = $id;
                              $_SESSION["loggedin"] = true;
  
                              //Redirect user to welcome page
                              header("location: admin.php");
                              
                          }
                          else{
                            $err = "Please enter correct credentials";
                          }
                      }
  
                  }
  
      }
  }    
  
  
  }
  
  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Log in - Code Playground</title>
    <link rel="icon" type="image/x-icon" href="../assets/favicon-196.png" />
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <style>
      .result_msg {
        color: red;
        font-size: 9px;
      }
    </style>
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav class="navbar" style="background-color: #3c445c">
      <div class="container container-fluid">
        <a class="navbar-brand" style="color: white" href="../index.html"
          ><img
            style="height: 45px"
            src="../assets/icon-rounded-192x192.png"
            alt="logo"
          />Code Playground</a
        >
      </div>
    </nav>
    <!-- Login Form -->
    <div
      class="container mt-4 d-flex align-items-center justify-content-center"
    >
      <div>
        <h3>Admin Login</h3>
        <hr />
        <form action="" method="post">
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              name="username"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
            />
          </div>
          <br />
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
          </div>
          <div class="result_msg"><?php echo $err ?></div>
          <br />
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Remember Me</label
            >
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%">
            Log in
          </button>
        </form>
      </div>
    </div>
    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
