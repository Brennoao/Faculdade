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

// 1

Route.get('/cursos', 'CursosController.index')

Route.post('/cursos', 'CursosController.store')

// 2

Route.get('/Professores', 'ProfessoresController.index')

Route.post('/Professores', 'ProfessoresController.store')

// 3

Route.get('/Aulas', 'AulasController.index')

Route.post('/Aulas', 'AulasController.store')

// 4

Route.get('/Semestres', 'SemestresController.index')

Route.post('/Semestres', 'SemestresController.store')

// 5

Route.get('/Salas', 'SalasController.index')

Route.post('/Salas', 'SalasController.store')

// 6

Route.get('/Chamadas', 'ChamadasController.index')

Route.post('/Chamadas', 'ChamadasController.store')

// 7

Route.get('/TurmaAlunos', 'TurmaAlunosController.index')

Route.post('/TurmaAlunos', 'TurmaAlunosController.store')

// 8

Route.get('/Disciplinas', 'DisciplinasController.index')

Route.post('/Disciplinas', 'DisciplinasController.store')

// 9

Route.get('/Alunos', 'AlunosController.index')

Route.post('/Alunos', 'AlunosController.store')