import ProductDetail from '@/app/components/ProductDetails';
import React from 'react';

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if(!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}


export default async function SingleProduct({ params }) {
  const products = await getData();
  
  const product = products.find((item) => item._id === parseInt(params.slug));
  if(product) {
    console.log(product);
  }else{
    console.log("No Product Found");
  }
  return (
    <div>
      <ProductDetail product ={product}/>
      
    </div>
  )
}