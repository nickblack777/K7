<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
    $phone = "+380445425245";
?>

<header>
    <div class="logo">Логотип</div>
    <div class="phone"><?php echo $phone; ?></div>
</header>

    <ul>
        <?php 
            for($i = 1; $i < 10; $i++){
                echo "<li>" . $i . "</li>";
            }
        ?>
    </ul>

<footer>
    <div class="phone"><?php echo $phone; ?></div>
</footer>

    
</body>
</html>