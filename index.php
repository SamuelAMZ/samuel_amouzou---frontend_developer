<?php

/**
 * Composer autoload packages
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * require controllers classes and constants
 */
require_once __DIR__ . '/controllers/__init.php';

/**
 * initialize routes classe
 */
$routes = new SpaceRoutes();


/**
 * ROUTES
 */
$klein = new \Klein\Klein();


$klein->respond('GET', base . '/all', function() {
    global $routes;
    return $routes->getAll();
});


$klein->dispatch();