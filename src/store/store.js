import { configureStore } from '@reduxjs/toolkit'
import shortURLSlice from './shortURLSlice'

export default configureStore({
  reducer: {
    shortURL:shortURLSlice
  },
})