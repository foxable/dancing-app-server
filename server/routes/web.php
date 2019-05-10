<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return view('app');
});

$router->group([ 'prefix' => 'api'], function () use ($router) {
    $router->get('dance-types', [
        'uses' => 'DanceController@danceTypes'
    ]);

    $router->get('dance-types/{typeId}/dances', [
        'uses' => 'DanceController@dances'
    ]);

    $router->get('dances/{danceId}/figures', [
        'uses' => 'DanceController@figures'
    ]);
});