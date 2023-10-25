import React, { useEffect, useState } from "react";
import { fecthAllProduct } from "../../api";
import ProductCard from "../../Components/Product.Card";



export default function Products(){

    const[allProduct,setAllProduct]=useState([])

    allProduct.length=8;
    useEffect(()=>{
        fetchProduct()
    },[])



    const fetchProduct=async()=>{
        const result =await fecthAllProduct()
        // console.log("Result",result);
        if(result){
            setAllProduct(result.products)
        }
    }

    return(
        <>
        <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
        {
            allProduct.map((item,index)=>{
                return(
                    <ProductCard key={index} data={item}/>
                )
            })
        }
        </div>
      </div>
        </>
    )
}