import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/Restaurante', 'RestaurantesController').apiOnly()

Route.resource('/Fornecedores', 'FornecedoresController').apiOnly() //////////

Route.resource('/Tipos', 'TiposController').apiOnly()

Route.resource('/Mesas', 'MesasController').apiOnly()

Route.resource('/Funcionarios', 'FuncionariosController').apiOnly()

Route.resource('/Pedidos', 'PedidosController').apiOnly() ///////////

Route.resource('/Produtos', 'ProdutosController').apiOnly() ////////

Route.resource('/PedidosHasProduto', 'PedidosHasProdutosController').apiOnly()