<header>
    <div id="navbar">
        <a href="index.php" <?php if ($currentPage === 'Home') {echo 'class="active"';} ?>>Home</a></li>
        <a href="about.php" <?php if ($currentPage === 'About') {echo 'class="active"';} ?>>About</a></li>
        <a href="contact.php" <?php if ($currentPage === 'Contact') {echo 'class="active"';} ?>>Contact</a></li>
        <a href="craft.php" <?php if ($currentPage === 'Craft') {echo 'class="active"';} ?>>Craft</a></li>
        <a href="tech.php" <?php if ($currentPage === 'Tech') {echo 'class="active"';} ?>>Tech Help</a></li>
    </div>
    <script src="navbar.js"></script>
</header>
<body>
    <h2><?php echo($title); ?></h2>