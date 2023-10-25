import React from "react";
import phone from '../Assets/Image/category/phone.png'
import laptop from '../Assets/Image/category/Laptop.jpg'
import shose from '../Assets/Image/category/man_shoes.jpg'
import home_dec from '../Assets/Image/category/home.jpg'
import watch from '../Assets/Image/category/watch.jpg'
import grocery from '../Assets/Image/category/groceries.jpg'
import man_shirt from '../Assets/Image/category/man_shirt.jpg'
import fragrances from '../Assets/Image/category/fragrances.webp'
import beg from '../Assets/Image/category/bag.jpg'
import jewellery from '../Assets/Image/category/jewellery.webp'
import { useNavigate } from "react-router-dom";

export default function Categories_Card({cat_name,cat_img}){

  const Navigate=useNavigate()


    return(
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" style={{cursor:"pointer"}} onClick={()=>{Navigate('/shop_list',{state:{data:cat_name}})}}>
            <a className="text-decoration-none" href>
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img className="img-fluid"
                  style={{height:"100px"}}
                  //  src="img/cat-1.jpg" 
                  src={
                    cat_name==="smartphones"?phone 
                    :cat_name==='mens-watches' || cat_name==='womens-watches'?watch
                    :cat_name==='womens-shoes' ||cat_name==='mens-shoes'?shose
                    :cat_name==='laptops'?laptop
                    :cat_name==='skincare' || cat_name ==='groceries' ? grocery
                    :cat_name==='home-decoration' || cat_name ==='furniture'? home_dec
                    :cat_name==='mens-shirts'?man_shirt
                    :cat_name==='womens-dresses' || cat_name==='tops'?"img/cat-1.jpg"
                    :cat_name==='fragrances'?fragrances
                    :cat_name==='womens-bags'?beg
                    :cat_name==='womens-jewellery'?jewellery:null
                  }
                   alt='Catagory' />
                </div>
                <div className="flex-fill pl-3">
                  <h6>{cat_name}</h6>
                  <small className="text-body">100 Products</small>
                </div>
              </div>
            </a>
          </div>
        
        </>
    )
}











































