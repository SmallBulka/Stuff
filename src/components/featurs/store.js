import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";
import  userSlice  from "./user/userSlice";
import  farSlice  from "./user/FavoritesSlice";


export const store = configureStore({
    reducer: {
        categories : categoriesSlice,
        products: productsSlice,
        user: userSlice,
        favorites: farSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),                       
    devTools: true,
})