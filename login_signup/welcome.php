<?php
  session_start();
  
  if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !==true)
  {
      header("location: login.php");
  }
  
  
  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home - Code Playground</title>
    <link rel="icon" type="image/x-icon" href="../assets/favicon-196.png" />
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
      .btn {
        outline: unset !important;
        box-shadow: unset !important;
      }
      .side-a {
        margin-top: 35px;
        padding: 5px;
      }
      .side-a:hover {
        background-color: rgba(109, 109, 109, 0.79);
        padding: 5px;
        border-radius: 5px;
      }
      .card{
        border: 2px solid lightblue;
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
    <!-- sidebar -->
    <section class="sidebarHolder position-relative">
      <div class="container-fluid px-0">
        <div class="row bg-light">
          <div class="col-md-2 sidebar bg-dark">
            <div class="p-4">
              <ul class="list-unstyled p-0 m-0">
                <li class="side-a">
                  <a
                    href="../main_web/IDE playground/index.html"
                    class="text-white text-decoration-none"
                    >IDE</a
                  >
                </li>
                <li class="side-a">
                  <a
                    href="../main_web/web playground/index.html"
                    class="text-white text-decoration-none"
                    >Web Playground</a
                  >
                </li>
                <li class="side-a">
                  <a href="../main_web/Sorting-Visualization/index.html" class="text-white text-decoration-none"
                    >Algo-Visualizer</a
                  >
                </li>
                <li class="side-a">
                  <a
                    href="../main_web/quiz/index.html"
                    class="text-white text-decoration-none"
                    >Quiz</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-10 bg-light py-4">
            <div class="container">
              <h1>Get started</h1>
              <p>See what you can accomplish on Code Playground</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="../assets/code.png"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">In-browser IDE</h5>
                          <p class="card-text">
                            Start coding with your favorite language on any
                            platform, OS, and device.
                          </p>
                          <a href="../main_web/IDE playground/index.html">
                            <button
                              type="button"
                              class="btn btn-outline-success"
                            >
                              See now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="../assets/web.jpg"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Web Playground</h5>
                          <p class="card-text">
                            The best place to build, test, and discover
                            front-end code.
                          </p>
                          <a href="../main_web/web playground/index.html">
                            <button
                              type="button"
                              class="btn btn-outline-success"
                            >
                              See now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="card" style="max-width: 540px">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="../assets/algo.png"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Algo-Visualizer</h5>
                          <p class="card-text">
                            Visualising data structures and algorithms through
                            animation
                          </p>
                          <br />
                          <a href="../main_web/Sorting-Visualization/index.html">
                            <button
                              type="button"
                              class="btn btn-outline-success"
                            >
                              See now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card" style="max-width: 540px">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="../assets/Quiz.jpg"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Quiz</h5>
                          <p class="card-text">
                            Take our 15-question quiz to see how much you know
                            about the world of coding!
                          </p>
                          <a href="../main_web/quiz/index.html">
                            <button
                              type="button"
                              class="btn btn-outline-success"
                            >
                              See now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- sidebar -->
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
      $(".sideBarToggler").click(function () {
        $(".col-md-2.sidebar.bg-dark, .col-md-10").toggleClass("active");
      });
    </script>
  </body>
</html>
