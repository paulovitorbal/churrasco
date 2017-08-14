<?php


if (preg_match('/\.(?:css|js|map|html)$/', $_SERVER["SCRIPT_NAME"])) {
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

$router->run();