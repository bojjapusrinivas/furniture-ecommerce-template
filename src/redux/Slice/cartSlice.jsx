import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    totalAmount:0,
    totalQuantity:0,

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(
                (item)=>item.id === newItem.id)
                state.totalQuantity++
                if(!existingItem){
                    state.cartItems.push({
                            id: newItem.id,
                            ProductName: newItem.productName,
                            imgUrl:newItem.image,
                            price:newItem.price,
                            quantity:newItem.quantity,
                            totalPrice:newItem.price
                    })
                 }else{
                    existingItem.quantity++
                    existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
                 }
                 console.log(state.totalQuantity)
                 console.log(state.cartItems)
                 console.log(newItem)
                
        }
    }
  });

export const cartAction = cartSlice.actions

export default cartSlice.reducer