import React, { useEffect,useState } from 'react';
import './Product.css';

const Product = () => {
  const url=process.env.REACT_APP_PRODUCTS_URL;
  const [products,setProducts] =useState([]);
  
   useEffect(()=>{
     fetch(url)
     .then(res=> res.json())
     .then(data=> setProducts(data.data));
      

    },[]);


  return (
    
    <section id='product'>
       <h1>Products</h1>
      
      <div className='products'>
      
         { products ? products.map((product,index)=>(
               <div className='p-card' key={index}>
                   <img src={product.image} alt="abk"/>
                   <div className='p-details'>
                       <h3>{product.name}</h3>
                       <h3>net prices: ${product.net_price}</h3>
                       <h3>taxes: ${product.taxes}</h3>
                       <h3>price: ${product.price}</h3>
                     </div>
                   </div>


               )): null

              }

      </div>
      

   
    
     </section>


         )
    }

export default Product