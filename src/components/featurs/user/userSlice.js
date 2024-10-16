import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";


export const createUser = createAsyncThunk('users/createUser', 
    async (payload, thunkAPI) =>{
    try{
    const res = await axios.post(`${BASE_URL}/users`, payload);
    return res.data;
    } catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser:{},
        cart: [],
        isLoading: false,
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
          let newCart = [...state.cart];
          const found = state.cart.find(({ id }) => id === payload.id);
    
          if (found) {
            newCart = newCart.map((item) => {
              return item.id === payload.id
                ? { ...item, quantity: payload.quantity || item.quantity + 1 }
                : item;
            });
          } else newCart.push({ ...payload, quantity: 1 });
    
          state.cart = newCart;
        }
    },
    extraReducers:(builder)=> {
      builder.addCase(createUser.fulfilled, (state, {payload})=>{
        state.currentUser = payload;

    })
    }}) 

export const {addItemToCart} = userSlice.actions;
export default userSlice.reducer;
