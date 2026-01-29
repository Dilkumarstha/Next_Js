import ProductCard from "@/components/Card";
import React from "react";

const PageDetails = async ({ params }) => {
  const productId = (await params).productId;
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  ).then((res) => res.json());
  return (
    <div className="px-10">
      <div className="  px-4 py-5 container mx-auto">
        {productId.map((id) => (
          <ProductCard key={id} product={product} />
        ))}
      </div>
    </div>
  );
};  

export default PageDetails;


