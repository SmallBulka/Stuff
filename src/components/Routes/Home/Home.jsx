import React, { useEffect} from 'react'
import Products from '../../Products/Products'
import { useDispatch, useSelector } from 'react-redux'
import Categorits from '../../Categories/Categories'
import Poster from '../../Poster/Poster'
import Banner from '../../Banner/Banner'
import { filterByPrice } from '../../featurs/products/productsSlice'



function Home() {

  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  
  return (

    <>
    
    <Poster/>
    <Products products={list} amount={5} title="Trending"/>
    <Categorits products={categories.list} amount={5} title="Worth seeing"/>
    <Banner/>
    <Products products={filtered} amount={5} title="Less than 100$"/>



    </>
    
  )
  
}

export default Home