import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../../configData';
import { SneakersState } from '../../../utils/types/types'; 

const initialState: SneakersState = {
    products: data,
    addedToCart:[],
}

export const sneakerSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction) => {
      state.products = [

      ]
    },
    deleteFromCart: (state, action: PayloadAction) => {
      
    }
  },
})

export const { addToCart, deleteFromCart } = sneakerSlice.actions

export default sneakerSlice.reducer