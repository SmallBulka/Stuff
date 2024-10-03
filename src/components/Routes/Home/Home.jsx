import React from 'react'
import Products from '../../Products/Products'
import { useSelector } from 'react-redux'
import Categorits from '../../Categories/Categories'
import Poster from '../../Poster/Poster'
import Banner from '../../Banner/Banner'


function Home() {
  const {products, categories} = useSelector((state) => state);
  return (
    <>
    <Poster/>
    <Products products={products.list} amount={5} title="Trending"/>
    <Categorits products={categories.list} amount={5} title="Worth seeing"/>
    <Banner/>
    </>
  )
}

export default Home