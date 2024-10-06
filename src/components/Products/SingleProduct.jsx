import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const { id }=useParams()
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct