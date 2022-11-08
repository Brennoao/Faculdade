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

Route.group(() => {

    // 1

  Route.resource('/Cursos', 'CursosController').apiOnly()

  // 2

  Route.resource('/Professores', 'ProfessoresController').apiOnly()


  // 3

  Route.resource('/Aulas', 'AulasController').apiOnly()

  // 4

  Route.resource('/Semestres', 'SemestresController').apiOnly()


  // 5

  Route.resource('/Salas', 'SalasController').apiOnly()

  // 6

  Route.resource('/Chamadas', 'ChamadasController').apiOnly()

  // 7

  Route.resource('/Turma', 'TurmasController').apiOnly()

  // 8

  Route.resource('/Disciplinas', 'DisciplinasController').apiOnly()

  // 9

  Route.resource('/Alunos', 'AlunosController').apiOnly()
  
}).middleware('auth')

//10

Route.post('/Users', 'UsersController.store')

//11
Route.post('/login', 'UsersController.login')