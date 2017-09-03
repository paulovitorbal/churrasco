<?php


if (preg_match('/\.(?:css|js|map|html|png)$/', $_SERVER["SCRIPT_NAME"])) {
    return false;    // serve the requested resource as-is.
}
if (preg_match('/\.(?:appcache)$/', $_SERVER["SCRIPT_NAME"])) {
	header('Content-Type: text/cache-manifest');
    return false;    // serve the requested resource as-is.
}



require __DIR__ . '/vendor/autoload.php';
require 'View.php';

$router = new \Bramus\Router\Router();
$default = 'GET|POST';


$router->match($default, '/', function(){
	$view = new View();
	session_start();
	if (!isset($_SESSION['id']))
		$_SESSION['id'] = uniqid(rand(), true);
	
	$view->id = $_SESSION['id'];

	$view->render();

});
$router->match($default, '/api/sync', function(){
	$dbConfig = parse_ini_file('config/database.ini');
	$adapter = new  \Zend\Db\Adapter\Adapter($dbConfig);
	
	$controller = new Paulovitorbal\Controller();
	$controller->sync($adapter, $_POST['convites'] ?? []);
	
});

$router->run();