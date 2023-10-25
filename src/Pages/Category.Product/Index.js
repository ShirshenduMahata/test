import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProductList from "./Product.List";

export default function CatagoryProducts() {
    const {state}=useLocation();
    // console.log(state);
  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to={'/'}>
                Home
              </Link>
              <a className="breadcrumb-item text-dark" href="#">
                {state.data}
              </a>
              {/* <span className="breadcrumb-item active">Shop List</span> */}
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
    {/* Shop Start */}
    <ProductList cat_name={state?.data}/>
{/* Shop End */}

    </>
  );
}
