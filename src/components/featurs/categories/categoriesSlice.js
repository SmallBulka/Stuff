import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";


export const getCategories = createAsyncThunk('categories/getCategories', 
    async (_, thunkAPI) =>{
    try{
    const res = await axios(`${BASE_URL}/categories`);
    
    return res.data.slice(0, 10);
    } catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
})


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list:[],
        isLoading: false
    },
    extraReducers:(builder)=> {
        builder.addCase(getCategories.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled, (state, {payload})=>{
            state.list = payload;
            state.isLoading = false;
        })
        
    }

})
export default categoriesSlice.reducer;