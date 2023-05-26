# Códigos do REACT-NEXTJS

## Create Project
```
npx create-next-app@latest nextjs-blog --use-npm --example https://github.com/vercel/next-learn/tree/master/basics/learn-starter
```

## Update npm
```
npm i -g npm@9.6.2
```
## RUN SCRIPT
```bash
NPM RUN {NOME-SCRIPT}
```

## RAFCE
```
CRIA A EROM FUNCTION
```
## INSTALL LIBRARY
```
NPM i
```

## Looping-Array
```
{Carros.map(item => (
    
))}
```

## Variable Change
<!-- Entre parenteses é o nome padrão da variável -->
```
const [nome, setNome] = useState('') 

useEffect(() => {
    nomeDaApi.get('endPoint').then(resultado=>{
      console.log(resultado.data.results)
    })
  }, [])
```
## GetServerSideProps
```
export async function getServerSideProps(context) {
  
  const resultado = await apiFilmes.get('/movie/popular')
  const filmes = resultado.data.results

  return {
    props: {filmes}, // will be passed to the page component as props
  }
}
```