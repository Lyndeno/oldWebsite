<head>
    <title><?php echo($title); ?></title>
    <link rel="stylesheet" href="default.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scaled=1.0">
    <meta name="theme-color" content="bd0000">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
</head>
<header>
    <div class="header">
        <img src="headshot.jpg" class="headshot">
        <h1 class="header-text">Lyndon Sanche</h1>
    </div>
    <div id="navbar">
        <a href="index.php" <?php if ($currentPage === 'Home') {echo 'class="active"';} ?>>Home</a>
        <a href="contact.php" <?php if ($currentPage === 'Contact') {echo 'class="active"';} ?>>Contact</a>
        <a href="tech.php" <?php if ($currentPage === 'Tech') {echo 'class="active"';} ?>>Tech Help</a>
        <a href="https://github.com/Lyndeno/pachive" target="_blank">pachive</a>
        <a href="https://github.com/Lyndeno" class="fa fa-github" target="_blank"></a>
        <a href="https://www.linkedin.com/in/lyndon-sanche-6544b715b/" class="fa fa-linkedin" target="_blank"></a>
    </div>
    <script src="navbar.js"></script>
    <div class="titlehead"><h2><?php echo($title); ?></h2></div>
</header>
