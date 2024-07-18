// src/redux/slices/notificationSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { productAdded: false },
  reducers: {
    productAdded: (state) => {
      state.productAdded = !state.productAdded;
    },
  },
});

export const { productAdded } = notificationSlice.actions;
export default notificationSlice.reducer;
