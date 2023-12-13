<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Until Christmas</title>
            <link rel="stylesheet" href="assets/style/main.css">
        </head>
    <body>
        <!--Register form-->
        <form action="vendor/signup.php" method="post" enctype="multipart/form-data">
            <label for="Full name">Full Name</label>
            <input type="text" name="full_name" placeholder="Enter your full name">
            <label for="login">Login</label>
            <input type="text" name="login" placeholder="Enter login">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email">
            <label>Image for your profile</label>
            <input type="file" name="avatar">
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Enter password">
            <label for="password">Password confirmation</label>
            <input type="password" name="password_confirm" placeholder="Confirm your password">
            <button>Login</button>
            <p>
                You have account already? - <a href="/index.php">Sign in</a>
            </p>
            <?php
                if($_SESSION['message']){
                    echo '<p class="msg"> ' . $_SESSION['message'] . ' </p>';
                }
                 unset($_SESSION['message']); 
                 ?>
            
        </form>

    </body>
</html>