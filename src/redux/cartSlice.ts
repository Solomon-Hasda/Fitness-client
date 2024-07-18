
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from '@/Types/types';

interface CartItem {
  product: TProduct;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<TProduct>) {
      const product = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.product._id === product._id
      );

      if (existingCartItem) {
        if (existingCartItem.quantity < product.countInStock) {
          existingCartItem.quantity++;
        }
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter(item => item.product._id !== productId);
    },
    updateCartQuantity(state, action: PayloadAction<{ productId: string, quantity: number }>) {
      const { productId, quantity } = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.product._id === productId
      );

      if (existingCartItem && quantity > 0 && quantity <= existingCartItem.product.countInStock) {
        existingCartItem.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export type { CartState };
