import { createSlice } from '@reduxjs/toolkit'

export const shortURLSlice = createSlice({
  name: 'shortURL',
  initialState: {
    value: {},
  },
  reducers: {
    fetchShortURLResults: (state,action) => {
      state.value=action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { fetchShortURLResults } = shortURLSlice.actions

export default shortURLSlice.reducer