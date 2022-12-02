# React Shop

Esse é um projeto desenvolvido com React.js e styled-components, consumindo a [Dummy Json](https://dummyjson.com/), uma API com produtos ficticios, com o intuido de me familiarizar mais com a biblioteca de estilos, e exertcitar a estruturização de pastas em projetos.

- [x] Visualizar lista de produtos.
- [x] Ver uma página com informações detalhadas do produto.
- [x] Troca de tema, claro e escuro.
- [x] incluir itens no carrinho.
- [x] Excluir itens do carrinho.
- [x] Ver e remover itens do carrinho.
- [x] Responsivo 


  - Link do Site-solução: [React Shop](https://react-shop.vercel.app/)

## Preview do produto final

![Captura de tela 2022-11-06 161118](https://user-images.githubusercontent.com/104238483/200190240-c8b91481-bd2f-4463-876b-f9518eee3d15.png)




### Página detalhada:

![Captura de tela 2022-11-06 161135](https://user-images.githubusercontent.com/104238483/200190246-afe17e64-b873-46ce-8919-b3bba98a322a.png)


## Detalhes do projeto: 

#### O projeto foi desenvolvido com react-router-dom para a roteirização das páginas

```
const AppRouter = () => {
    return(
        <Routes>
            <Route element={<Home />} path='/' exact/>
            <Route element={<ProductPage />} path='/product/:id'/>
        </Routes>
    )
   
}

export default AppRouter
```

Acima temos o Route para o <Product/page /> que recebe um path com o ID de forma dinâmica para abrir o usuário e exibir as informação do mesmo em especifico.

#### Para a estilização, foi utilizado o style-components

##### Estilo global:

```
import { createGlobalStyle } from "styled-components";
import FontStyles from "./fontStyles";

const GlobalStyle = createGlobalStyle`
    * {
            margin: 0;
            padding: 0;
        }
    
    body{
        font-family: 'Nunita', sans-serif;
        background-color: ${porps => porps.theme.settings.primary}
    }
`

export default GlobalStyle
```

### Troca de tema

Ainda com o styled-components, foi feito a troca de temas da pagina de forma dinamica

##### dark:

```
export default {
    title: 'dark',
    settings:{
        text: '#fff',
        text_hover: '#D9D9D9',
        primary: '#2c2c2c',
        secondary: '#D9D9D9',
        opacity: '#D9D9D920'
    }
}
```

##### light:

```
export default {
    title: 'light',
    settings:{
        text: '#000',
        text_hover: '#404040',
        primary: '#D9D9D9',
        secondary: '#404040',
        opacity: '#40404020'
    }
}
```

#### Lógica de troca de tema:


```
function App() {

  const [theme, setTheme] = useState(dark);
  

  return (
    <MyContextProvider value={{theme, setTheme}}>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </MyContextProvider>
  )
}

export default App
```
O estado dos temas é passado para os demais componente através de um contexto:

```
import { createContext, useState } from "react";
import dark from "../Styled/Themes/dark";
import light from "../Styled/Themes/light";

export const MyContext = createContext({});

export const MyContextProvider = ({children, value}) => {
  

    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}
```

#### Metodos para consumo da API

Para as requisições HTTP, utilizamos o axios:

##### Configuração:
```
import axios from "axios";

const api = axios.create({
  baseURL:'https://dummyjson.com/products',
});

export default api
```

##### Foi criado um arquivo api para as chamadas usadas na aplicação:

```
import api from "./axios"

export const getCategories = (props) => {
    api.get('categories')
    .then((response) => props(response.data))
}

export const getProducts = (props, limit) => {
    api.get('?limit=' + limit)
    .then((response) => props(response.data.products))
}

export const getSingleProducts = (props, id) => {
    api.get(id)
    .then((response) => props(response.data))
}

export const getFilteredProducts = (props, filter) => {
    api.get('category/'+filter)
    .then((response) => props(response.data.products)) 
}

export const getRelated = (related, id) => {
    let category = ''
    api.get(id)
    .then((response) => api.get('category/'+response.data.category)
    .then((response) => related(response.data.products))
    )
}
```

#### Hooks

Para o controle de renderização da página e chamada da API, usamos os Hooks useState e useEffect. E Para trabalhar com a rota dinamica, utilizamos o useParams para captar o valor do id do objeto

#### Desenvolvimento 

Caso queira fazer o clone do repositório, por favor usar o comando abaixo para download das dependencias:
```
npm intall
```

Será necessário criar suas proprias chaves para o firebase para configuração.
