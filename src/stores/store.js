import { configureStore } from '@reduxjs/toolkit'
import blogReducers from './blogs';

const store = configureStore({
  reducer: {
    blogs: blogReducers
  },
})

export default store;