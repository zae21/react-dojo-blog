import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    error: null,
    blogs: null,
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        fetchData: async (state, actions) => {
            const abortCont = new AbortController();
            const url = actions.payload.url;

            const res = await fetch(url);
            const data = await res.json();
            state.blogs = data;
            state.isLoading = false;
                
        },
        createData: (state) => {
        },
        updateData: (state) => {
        },
        deleteData: (state) => {
        }
    },
})

// Action creators are generated for each case reducer function
export const { fetchData, createData, updateData, deleteData } = blogSlice.actions

export default blogSlice.reducer