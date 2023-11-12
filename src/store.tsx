import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define el estado inicial
const initialState = {
  counter: 0,
};

// Crea un slice utilizando Redux Toolkit
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Exporta las acciones
export const { increment, decrement } = counterSlice.actions;

// Configura la tienda Redux
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Define el tipo de RootState para tipado seguro
export type RootState = ReturnType<typeof store.getState>;
