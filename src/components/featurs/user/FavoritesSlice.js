import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export const createUsers = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);





const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

const farSlice = createSlice({
  name: "favorites",
  initialState: {

    favorites:[],

  },
  reducers: {
    addItemToFavorite: (state, { payload }) => {
      let newCarts = [...state.favorites];
      const founds = state.favorites.find(({ id }) => id === payload.id);

      if (founds) {
        newCarts = newCarts.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCarts.push({ ...payload, quantity: 1 });

      state.favorites = newCarts;


  
    },


    removeItemFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },

  },
  extraReducers: (builder) => {
    builder.addCase(createUsers.fulfilled, addCurrentUser);

  },
});

export const { removeItemFromFavorite, addItemToFavorite} =
farSlice.actions;

export default farSlice.reducer;
