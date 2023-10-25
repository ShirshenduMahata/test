import React, { useEffect, useState } from "react";
import { fetchCategoryData } from "../../api";
import Categories_Card from "../../Components/Categories.Card";
import { reactLocalStorage } from "reactjs-localstorage";

export default function Categories() {
  const[allCategory,setAllCategory]=useState([])

 useEffect(()=>{
  fetchCategory()
 },[])


  const fetchCategory=async()=>{
    const result=await fetchCategoryData()
    // console.log("result",result);
    if(result && result.length>=1){
      setAllCategory(result)
      reactLocalStorage.setObject('category', result);
    }
  }
allCategory.length=16
  return (
    <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">

        {
          allCategory.map((item,index)=>{
            return(
              <>
              <Categories_Card key={index} cat_name={item} />
              </>
            )
          })
        }
        </div>
      </div>
    </>
  );
}










