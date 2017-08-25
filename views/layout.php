<html <?php echo 'manifest="churrasco.appcache"'?>>

    <head>
    	<meta charset="utf-8" />
        <link rel="stylesheet" href="/css/bulma.css">
        <link rel="stylesheet" href="/css/font-awesome.min.css">
        <link rel="stylesheet" href="/css/app.css">
        <title>Churrasco</title>
        <link rel="icon" href="favicon.png" />

    </head>
    <body class="is-fluid">
    	<?php echo $this->getContents(); ?>
    	<script src="/bundle.js"></script>
	</body>
</html>
