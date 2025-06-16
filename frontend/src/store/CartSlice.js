import { createSlice } from '@reduxjs/toolkit';
import { getUserId, saveCartToLocal } from './CartStorage';


const getUserCartKey = (userId) => `cart_${userId || 'guest'}`;

export const getCartFromLocal = (userId) => {
  const key = getUserCartKey(userId);
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      const userId = getUserId();
      if (userId) saveCartToLocal(userId, state.cartItems);
    },


    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeCart(state) {
      state.cartItems = [];
    },

    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== id);
    },

    loadCartFromLocal(state, action) {
      state.cartItems = action.payload || [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addToCart,
  setQuantity,
  removeFromCart,
  removeCart,
  loadCartFromLocal,
} = actions;
export default reducer;
