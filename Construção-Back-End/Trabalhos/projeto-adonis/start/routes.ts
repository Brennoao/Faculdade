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
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/lista2/ex1', 'Lista01sController.ex1')

Route.post('/lista2/ex2', 'Lista01sController.ex2')

Route.post('/lista2/ex3', 'Lista01sController.ex3')

Route.post('/lista2/ex4', 'Lista01sController.ex4')

Route.post('/lista2/ex5', 'Lista01sController.ex5')

Route.post('/lista2/ex6', 'Lista01sController.ex6')

Route.post('/lista2/ex7', 'Lista01sController.ex7')

Route.post('/lista2/ex8', 'Lista01sController.ex8')

Route.post('/lista2/ex9', 'Lista01sController.ex9')