import { configureStore } from '@reduxjs/toolkit'
import blogReducers from './blogs';

const store = configureStore({
  reducer: {
    blog: blogReducers
  },
})

export default store;