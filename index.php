<?php


if (preg_match('/\.(?:css|js|map|html|png|appcache)$/', $_SERVER["SCRIPT_NAME"])) {
    return false;    // serve the requested resource as-is.
}

require __DIR__ . '/vendor/autoload.php';
require 'View.php';

$router = new \Bramus\Router\Router();
$default = 'GET|POST';


$router->match($default, '/', function(){
	$view = new View();
	$view->render();

});
$router->match($default, '/api/sync', function(){
	$dbConfig = parse_ini_file('config/database.ini');
	$adapter = new  \Zend\Db\Adapter\Adapter($dbConfig);
	
	$controller = new Paulovitorbal\Controller();
	$controller->sync($adapter, $_POST['convites']);
	
});

$router->run();