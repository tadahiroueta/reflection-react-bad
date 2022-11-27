import { createSlice, configureStore } from '@reduxjs/toolkit'


const titleSlice = createSlice({
  name: 'title',
  initialState: { title: null },
  reducers: { setTitle: (state, action) => { state.title = action.payload } }
})


export default configureStore({
  reducer: {
    title: titleSlice.reducer,
  },
});


export const selectTitle = (state) => state.title.title
export const isPreviewOpen = (state) => state.title.title !== null
export const { setTitle } = titleSlice.actions
