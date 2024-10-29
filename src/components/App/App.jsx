import React, { useEffect} from "react";
import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../featurs/categories/categoriesSlice";
import { getProducts } from "../featurs/products/productsSlice";
import UserForm from "../User/UserForm";




function App ()  {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div className="app">
      <Header/>
      <UserForm/>
      
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer/>


    </div>
  );
}

export default App;
