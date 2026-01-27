import React from "react";

const PageDetails = async ({ params }) => {
  const productId = (await params).productId;
  const product = await fetch(`https://fakestoreapi.com/products/${productId}`).then((res)=>res.json());
  return (
  <div>product Details: {productId}
  <div>
<ul>
    <li>Name:{product.title}</li>
    <li>Price:{product.price}</li>
    <li>Category:{product.category}</li>
</ul>
  </div>
  </div>
)
};

export default PageDetails;
