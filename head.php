<head>
    <title><?php echo($title); ?></title>
    <link rel="stylesheet" href="default.css">
    <meta name="viewport" content="width=device-width, initial-scaled=1.0">
    <meta name="theme-color" content="bd0000">
</head>
<header>
    <div class="header">
        <h1 class="header">Lyndon Sanche</h1>
    </div>
    <div id="navbar">
        <a href="index.php" <?php if ($currentPage === 'Home') {echo 'class="active"';} ?>>Home</a>
        <a href="about.php" <?php if ($currentPage === 'About') {echo 'class="active"';} ?>>About</a>
        <a href="contact.php" <?php if ($currentPage === 'Contact') {echo 'class="active"';} ?>>Contact</a>
        <a href="tech.php" <?php if ($currentPage === 'Tech') {echo 'class="active"';} ?>>Tech Help</a>
        <a href="https://github.com/Lyndeno" <?php if ($currentPage === 'Github') {echo 'class="active"';} ?>>Github</a>
        <a href="https://github.com/Lyndeno/pachive" <?php if ($currentPage === 'pachive') {echo 'class="active"';} ?>>pachive</a>
    </div>
    <script src="navbar.js"></script>
    <div class="titlehead"><h2><?php echo($title); ?></h2></div>
</header>
