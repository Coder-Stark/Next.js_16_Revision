import React from 'react'
import { getProductDetails } from '../api-services/productApi'

export default async function ProductServer() {
  let data = await getProductDetails();
  console.log(data);

  return (
    <div>
      <h1 className='text-3xl py-10 text-center'>ProductServer</h1>
    </div>
  )
}
