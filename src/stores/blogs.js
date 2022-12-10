import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    error: null,
    blogs: null,
}

export const fetchData = createAsyncThunk("blog/fetchData", async (id=null) => {
    const res = await fetch(`http://localhost:8000/blogs${id ? "/" + id : ""}`);
    return await res.json();
});

export const createData = createAsyncThunk("blog/createData", async ({blog,id=null}) => {
    const res = await fetch(`http://localhost:8000/blogs${(id && id !== undefined) ? "/" + id : ""}`, {
        method: (id && id !== undefined) ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    })
    return await res.json();
});
export const deleteData = createAsyncThunk("blog/deleteData", async (id=null) => {
    const res = await fetch(`http://localhost:8000/blogs/${id}`, { method : "DELETE" });
    return await res.json();
});

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers:{
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        });
        builder.addCase(createData.pending, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(createData.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
        });
        builder.addCase(deleteData.pending, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
        });
    },
})

export const { setIsLoading }  = blogSlice.actions;

export default blogSlice.reducer;