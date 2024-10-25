import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../featurs/api/apiSlice'
import styles from '../../styles/Category.module.css'
import Products from '../Products/Products'


function Category() {
    const {id} = useParams();



    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0,
    }

    const defaultParams = {
        categoryId: id,
        ...defaultValues,
    }
    const [values, setValues] = useState(defaultValues)
    const [params, setParams] = useState(defaultParams)
    useEffect(()=> {
        if(!id) return
        setParams({...defaultParams, categoryId: id})
    }, [id])

    const {data, isLoading, isSuccess} = useGetProductsQuery(params)
    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})}
    
        const hanbleSummit = (e) => {
            e.preventDefault()
            setParams({...params, ...values})
        }
    
  return (
    <section  className={styles.wrapper}>
        <h2 className={styles.title}>Shoe</h2>

        <form  className={styles.filters} onSubmit={hanbleSummit}>
            <div  className={styles.filter}>
                <input type='text' name='title' placeholder='Product name' onChange={handleChange} value={values.title}/>
            </div>
            <div  className={styles.filter}>
                <input type='number' name='price_min' placeholder='0' onChange={handleChange} value={values.price_min}/>
            </div>
            <div  className={styles.filter}>
                <input type='number' name='price_max' placeholder='0' onChange={handleChange} value={values.price_max}/>
            </div>
            <button type="submit" hidden/>

        </form>

        {isLoading ? (
            <div className="preloader">Loading...</div>
        ) : !isSuccess || !data.length ? (
            <div className={styles.back}>
                <span>No results</span>
                <button>Reset</button>
            </div>
        )  : (
            <Products  title="" products={data} style={{padding: 0}} amount={data.length}/>
        )}
    </section>
  )
}

export default Category