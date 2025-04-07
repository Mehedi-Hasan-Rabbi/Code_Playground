# Code_Playground

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![StandWithPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://github.com/Safouene1/support-palestine-banner/blob/master/Markdown-pages/Support.md)

**Code_Playground** is an online code editor designed to run C and C++ programs, as well as to write and develop code in HTML, CSS, and JavaScript. It features sorting algorithm visualizations, quizzes, and various administrative functionalities.  

This project was developed during my 4th semester at university for the course:
- **Course Code:** CIT-220  
- **Course Title:** Web Programming Project  

---

## Features
1. User Registration
2. User Login
3. Admin Login
4. Admin Panel
5. Report Generation
6. Online Code Editor (HTML, CSS, JS)
7. C and C++ Code Execution
8. Quiz Examination
9. Sorting Algorithm Visualizer

---

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap
- jQuery

### Backend
- PHP
- MySQL

### Tools
1. **Development Tools**: Visual Studio Code
2. **Web Server**: Apache (via XAMPP)
3. **C/C++ Compiler**: MinGW (Code::Blocks recommended)

---

## Installation Instructions

1. **Run XAMPP.**
2. Create a MySQL database called `code_playground`.
3. Import the provided SQL file into the database.  
   - **File Location**: `Code_Playground/Database`
4. Copy the `Code_Playground` folder into the `C:\xampp\htdocs` directory.
5. Open your browser and go to: http://localhost/code_playground/


---

## Configuration

### Compiler Path Configuration
1. Navigate to: Code_Playground/main_web/IDE playground/compilers/
Modify the files `c.php`, `cpp.php`, and `cpp11.php` to set the correct path to your C/C++ compiler.
2. Example path (for Code::Blocks with MinGW): C:\Program Files\CodeBlocks\MinGW\bin

If your C/C++ compiler path is different, update these files accordingly.

---

## Testing the Application
1. Use the provided "web test.txt" file for demo code to test the web playground.  
- **File Location**: `Code_Playground/main_web/web playground/`
2. Sample C/C++ demo code is available at: Code_Playground/main_web/IDE playground/code


---

## Default Credentials

### Admin
- **Username**: `admin`  
- **Password**: `12345`  

To add another admin, use MySQL or XAMPP GUI to insert a new record. Ensure the password is hashed using the bcrypt algorithm.  
Example:  
- Password: `12345`  
- Bcrypt hash: `$2y$10$azd9hwV9elAXc598gv25P.hZ0fw8j2QlKbU7Q/ddOjuBg349SoQZm`

### User
- **Username**: `Mehedi Hasan`  
- **Password**: `12345`

---

## Features Explanation
- **Code Execution**: Supports C and C++ program execution.  
- **Algorithm Visualization**: A visualizer for sorting algorithms to understand their workings interactively.  
- **Quiz Examination**: Allows users to take quizzes for learning and evaluation purposes.  
- **Admin Panel**: Manage users, view reports, and handle administrative tasks.  

---

Enjoy exploring **Code_Playground**! 🚀  

[contributors-shield]: https://img.shields.io/github/contributors/Mehedi-Hasan-Rabbi/Code_Playground.svg?style=for-the-badge
[contributors-url]: https://github.com/Mehedi-Hasan-Rabbi/Code_Playground/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Mehedi-Hasan-Rabbi/Code_Playground.svg?style=for-the-badge
[forks-url]: https://github.com/Mehedi-Hasan-Rabbi/Code_Playground/network/members
[stars-shield]: https://img.shields.io/github/stars/Mehedi-Hasan-Rabbi/Code_Playground.svg?style=for-the-badge
[stars-url]: https://github.com/Mehedi-Hasan-Rabbi/Code_Playground/stargazers
[issues-shield]: https://img.shields.io/github/issues/Mehedi-Hasan-Rabbi/Code_Playground.svg?style=for-the-badge
[issues-url]: https://github.com/Mehedi-Hasan-Rabbi/Code_Playground/issues
[license-shield]: https://img.shields.io/github/license/Mehedi-Hasan-Rabbi/Code_Playground.svg?style=for-the-badge
[license-url]: https://github.com/Mehedi-Hasan-Rabbi/Code_Playground/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ultr4-instinct/


