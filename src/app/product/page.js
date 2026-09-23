"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Product() {
  let [product, setProduct] = useState([]);

  let getProductDetails = async () => {
    await axios.get(`https://dummyjson.com/products`)
      // .then((res) => res.data)
      .then((res) => {
        console.log(res.data)
      })
  }
  useEffect(() => {
    getProductDetails();
  }, [])
  return (
    <div>
      <h1 className='text-3xl py-10 text-center'>Product</h1>
    </div>
  )
}
