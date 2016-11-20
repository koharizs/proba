'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('main')
Route.on('/elerhetoseg').render('cont')
//Route.on('/login').render('login')
Route.on('/problem').render('problem')

Route.get('/login', 'UserController.login');
Route.post('/login', 'UserController.loginSubmit');
Route.get('/logout', 'UserController.logout');
