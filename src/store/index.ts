import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
