import React, { useEffect, useState } from "react";
import { fetchProductByCatagory } from "../../api";
import ProductCard from "../../Components/Product.Card";

export default function ProductList({cat_name}) {
    const [allData,setAllData]=useState([]);

    useEffect(()=>{
        fetchProducts()
    },[cat_name])

    const fetchProducts=async()=>{
        const result= await fetchProductByCatagory(cat_name)
        // console.log(result);
        if(result){
            setAllData(result.products)
        }
    }
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          {allData.map(
            (item, index) => {
              return (
                <>
                  <ProductCard key={index} data={item} />
                </>
              );
            }
          )}
          <div className="col-12">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
