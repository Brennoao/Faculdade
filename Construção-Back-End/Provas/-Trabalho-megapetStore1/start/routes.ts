import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async () => {
//   return {
//     clientes_get: "http://localhost:3333/clientes",
//     atendimentos_get: "http://localhost:3333/atendimentos",
//     funcionarios_get: "http://localhost:3333/funcionarios",
//     pets_get: "http://localhost:3333/pets",
//     pet_clientes_get: "http://localhost:3333/pet_clientes",
//     procedimentos_get: "http://localhost:3333/procedimentos",
//     racas_get: "http://localhost:3333/racas",
//     tipos_get: "http://localhost:3333/tipos",
//   }
// })

Route.group(() => {
  Route.resource('/clientes', 'ClientesController').apiOnly()
  Route.resource('/atendimentos', 'AtendimentosController').apiOnly()
  Route.resource('/funcionarios', 'FuncionariosController').apiOnly()
  Route.resource('/pets', 'PetsController').apiOnly()
  Route.resource('/pet_clientes', 'PetClientesController').apiOnly()
  Route.resource('/procedimentos', 'ProcedimentosController').apiOnly()
  Route.resource('/racas', 'RacasController').apiOnly()
  Route.resource('/tipos', 'tiposController').apiOnly()
}).middleware('auth')

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')