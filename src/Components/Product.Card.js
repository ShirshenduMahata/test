import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import StarRatings from "./react-star-ratings";
import StarRatings from "react-star-ratings";

export default function ProductCard({ data }) {

  const Navigate=useNavigate()
//   console.log(data);
   
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src={data?.thumbnail}
              alt="thumbnail"
              style={{ height: "200px" }}
            />
            <div className="product-action">
              <Link to={'/cart'} className="btn btn-outline-dark btn-square" >
                <i className="fa fa-shopping-cart" />
              </Link>
              <a className="btn btn-outline-dark btn-square" >
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" >
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" >
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4" style={{cursor:"pointer"}} onClick={()=>Navigate('/product_detail',{state:{data:data}})} >
            <a className="h6 text-decoration-none text-truncate" >
              {data?.title}
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>${data?.price}</h5>
              <h6 className="text-muted ml-2">
                <del>
                  ${data?.price + (data?.price % data?.discountPercentage)}
                </del>
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className=" text-primary mr-1" >
              <StarRatings
                rating={data?.rating}
                starDimension="15px"
                starSpacing="4px"
                starRatedColor='#007bff '
              />
              </small>
                 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
