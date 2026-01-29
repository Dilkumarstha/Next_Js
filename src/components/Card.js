import React from 'react'

const ProductCard = ({product}) => {
  return (
  
    <div className='border border-gray-100 shadow-md py-3 px-4 rounded-md flex flex-col gap-4 justify-center w-80 '>
      <div className='flex flex-col justify-start gap-3'>
      <h1 className='font-bold text-2xl line-clamp-2'>{product.title}</h1>
<p className='line-clamp-2 text-gray-500'>{product.description}</p>
</div>
      <div className='flex gap-3'>
      <span className='bg-green-500 rounded-md px-3'>${product.price}</span>
      <span className='bg-blue-500 rounded-md px-3 text-white'>{product.rating.rate}</span>
     
      </div >
      <div className='py-2'>
      <button className='bg-red-400 px-3 py-1 rounded-md'>Card to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;