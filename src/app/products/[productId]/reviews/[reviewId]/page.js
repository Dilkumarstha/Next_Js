import React from 'react'

const ProductReview = async({params}) => {
    const productId=(await params).productId;
    const reviewId=(await params).reviewId;
  return (
    <div>
       <h1> productId: {productId}</h1>
       <h1> reviewId: {reviewId}</h1>
    </div>
  )
}

export default ProductReview