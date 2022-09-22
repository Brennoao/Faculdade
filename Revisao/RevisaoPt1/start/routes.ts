/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.post('/Revisao', 'RevisaosController.ex1')

Route.post('/Revisao2', 'RevisaosController.ex2')

Route.post('/Revisao3', 'RevisaosController.ex3')

Route.post('/Revisao4', 'RevisaosController.ex4')

Route.post('/Revisao5', 'RevisaosController.ex5')

Route.post('/Revisao6', 'RevisaosController.ex6')

Route.post('/Revisao7', 'RevisaosController.ex7')

Route.post('/Revisao8', 'RevisaosController.ex8')