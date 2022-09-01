import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../../configData';
import { SneakersState } from '../../../utils/types/types'; 

const initialState: SneakersState = {
    products: data,
    addedToCart:[]
}

export const sneakerSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    addToCart:(state, action: PayloadAction<number>) => {
      let product = state.products.filter((el, index) => index === action.payload)
        state.addedToCart = [...state.addedToCart,...product];
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.addedToCart = state.addedToCart.filter(({ id }) => id !== action.payload)
    }
  },
})

export const { addToCart, deleteFromCart } = sneakerSlice.actions

export default sneakerSlice.reducer