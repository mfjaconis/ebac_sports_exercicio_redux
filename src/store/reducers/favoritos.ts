import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.itens.find(
        (p) => p.id === action.payload.id
      )

      if (!produtoExistente) {
        state.itens.push(action.payload)
      } else {
        state.itens = state.itens.filter((p) => p.id !== action.payload.id)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
