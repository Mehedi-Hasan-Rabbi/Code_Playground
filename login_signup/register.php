<?php
  require_once "config.php";
  
  $username = $email = $password = $confirm_password = "";
  $username_err = $email_err = $password_err = $confirm_password_err = "";

  if ($_SERVER['REQUEST_METHOD'] == "POST"){
  
      // Check if username is empty
      if(empty(trim($_POST["username"]))){
          $username_err = "Username cannot be blank";
      }
      else{
          $sql = "SELECT id FROM users WHERE username = ?";
          $stmt = mysqli_prepare($conn, $sql);
          if($stmt)
          {
              mysqli_stmt_bind_param($stmt, "s", $param_username);
  
              // Set the value of param username
              $param_username = trim($_POST['username']);
  
              // Try to execute this statement
              if(mysqli_stmt_execute($stmt)){
                  mysqli_stmt_store_result($stmt);
                  if(mysqli_stmt_num_rows($stmt) == 1)
                  {
                      $username_err = "This username is already taken";
                  }
                  else{
                      $username = trim($_POST['username']);
                  }
              }
              else{
                  echo "Something went wrong";
              }
          }
      }
  
      mysqli_stmt_close($stmt);
  
  
      // Check if Email is empty
      if(empty(trim($_POST["email"]))){
        $email_err = "Email cannot be blank";
    }
    else{
        $sql = "SELECT id FROM users WHERE email = ?";
        $stmt = mysqli_prepare($conn, $sql);
        if($stmt)
        {
            mysqli_stmt_bind_param($stmt, "s", $param_email);
  
            // Set the value of param email
            $param_email = trim($_POST['email']);
  
            // Try to execute this statement
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1)
                {
                    $email_err = "This email is already taken"; 
                }
                else{
                    $email = trim($_POST['email']);
                }
            }
            else{
                echo "Something went wrong";
            }
        }
    }
  
    mysqli_stmt_close($stmt);
  
  
  // Check for password
  if(empty(trim($_POST['password']))){
      $password_err = "Password cannot be blank";
  }
  elseif(strlen(trim($_POST['password'])) < 5){
      $password_err = "Password cannot be less than 5 characters";
  }
  else{
      $password = trim($_POST['password']);
  }
  
  // Check for confirm password field
  if(trim($_POST['password']) !=  trim($_POST['confirm_password'])){
      $password_err = "Passwords should match";
  }
  
  
  // If there were no errors, go ahead and insert into the database
  if(empty($username_err) && empty($email_err) && empty($password_err) && empty($confirm_password_err))
  {
      $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      $stmt = mysqli_prepare($conn, $sql);
      if ($stmt)
      {
          mysqli_stmt_bind_param($stmt, "sss", $param_username, $param_email, $param_password);
  
          // Set these parameters
          $param_username = $username;
          $param_email = $email;
          $param_password = password_hash($password, PASSWORD_DEFAULT);
  
          // Try to execute the query
          if (mysqli_stmt_execute($stmt))
          {
              header("location: login.php");
          }
          else{
              echo "Something went wrong... cannot redirect!";
          }
      }
      mysqli_stmt_close($stmt);
  }
  mysqli_close($conn);
  }
  
  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - Code Playground</title>
    <link rel="icon" type="image/x-icon" href="../assets/favicon-196.png" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
      .form-group {
      margin-bottom: 8px;
      }
      #terms{
      font-size: 10px;
      }
      .form-check-input{
      margin-top: 7px;
      }
      .result_msg {
      color: red;
      font-size: 9px;
      }
    </style>
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav class="navbar" style="background-color: #3C445C;">
      <div class="container container-fluid">
        <a class="navbar-brand" style="color: white" href="../index.html"><img style="height: 45px" src="../assets/icon-rounded-192x192.png"
          alt="logo"
          />Code Playground</a>
      </div>
    </nav>
    <!-- Sign Up Form -->
    <div class="container mt-4 d-flex align-items-center justify-content-center">
      <div>
        <h3>Create an account</h3>
        <hr>
        <form action="" method="post">
          <div class="form-row">
            <div class="form-group">
              <label for="inputEmail4">Username</label>
              <input type="text" class="form-control" name="username" id="inputEmail4" placeholder="Username">
            </div>
            <div class="result_msg"><?php echo $username_err ?></div> 
            <div class="form-group">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" name="email" id="inputEmail4" placeholder="Email">
            </div>
            <div class="result_msg"><?php echo $email_err ?></div>
            <div class="form-group">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" name ="password" id="inputPassword4" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword4">Confirm Password</label>
            <input type="password" class="form-control" name ="confirm_password" id="inputPassword" placeholder="Confirm Password">
          </div>
          <div class="result_msg"><?php echo $password_err ?></div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label id="terms" class="form-check-label" for="gridCheck">
              Agree with terms and conditions
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Sign in</button>
        </form>
        <p>Have an account?<a href="login.php">Login</a></p>
      </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>