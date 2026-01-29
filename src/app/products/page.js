import ProductCard from '@/components/Card';
import React from 'react'

const Products = async () => {
  const product = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
  return (

<div className='px-10'>
    <div className='grid grid-cols-4 gap-7 px-4 py-5 container mx-auto'>
      {
        product.map((product) => (

          <ProductCard key={product.id} product={product} />
        ))
      }

    </div>
    </div>
  )
}

export default Products

