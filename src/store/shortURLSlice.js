import { createSlice } from '@reduxjs/toolkit'

export const shortURLSlice = createSlice({
  name: 'shortURL',
  initialState: {
    value: {},
  },
  reducers: {
    fetchShortURLResults: (state,actions) => {
      state.value=actions.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { fetchShortURLResults } = shortURLSlice.actions

export default shortURLSlice.reducer