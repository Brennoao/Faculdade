<!-- ENCERRAR CERVIDOR -->  <!-- UNIVERSAL NODEJS -->
ctrl + c

<!-- CRIAR ARQUIVO EM NODEJS -->
npm init

<!-- INSTALAR BIBLIOTECA -->
npm install ou i


                                                         <!-- COMANDOS ADONISJS -->


<!-- CRIANDO PROJETO DE ADONIS -->
npm init adonis-ts-app@latest NOME DO ARQUIVO

<!-- DATABASE -->
npm i @adonisjs/lucid

<!-- CONFIGURACAO -->
node ace configure @adonisjs/lucid

<!-- START SERVER ADONIS -->
node ace serve --watch

<!-- ARQUIVO DE CRIAÇÃO DE CONTROLLER DO ADONIS -->
node ace make:controller nome-do-arquivo

<!-- ARQUIVO DE CRIAÇÃO DE MODEL DO ADONIS -->
node ace make:model nome-do-arquivo

<!-- ARQUIVO DE CRIAÇÃO DE MODEL E CONTROLLER JUNTOS DO ADONIS -->
node ace make:model nome-do-arquivo -m

<!-- VISUALIZAR TODOS OS COMANDOS -->
node ace make -h

<!-- INSTALAÇÃO DO CLI -->
npm i --global @adonis/cli

<!-- MIGRATION -->
node ace make:migration Nome-da-tabela

<!-- EXECUTA MIGRATION -->
node ace migration:run

<!-- DESFAZER AS TABELAS CRIADAS ANTERIORMENTE -->
node ace migration:rollback

<!-- APAGA O BANCO DE DADOS E RODA TUDO DE NOVO -->
node ace migration:refresh

<!-- CRIAR AS TABELAS COM O SEEDERS -->
node ace migration:refresh --seed

<!-- CRIAR ARQUIVOS PARA O PRE-CADASTRO DO BANCO DE DADOS -->
node ace make:seeder

<!-- EXECUTAR TODOS OS SEEDERS -->
node ace db:seed

<!-- LISTAR TODAS AS ROTAS -->
node ace list:routes