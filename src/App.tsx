import Header from './components/Header'
import Produtos from './containers/Produtos'

import { Provider, useSelector } from 'react-redux'
import { type RootState, store } from './store'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} />
      </div>
    </Provider>
  )
}

export default App
