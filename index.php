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

// get all capsules
$klein->respond('GET', base . '/all', function() {
    global $routes;
    return $routes->getAll();
});

// get one capsule
$klein->respond('POST', base . '/one', function($request) {
    global $routes;
    return $routes->getOne($request);
});


$klein->dispatch();