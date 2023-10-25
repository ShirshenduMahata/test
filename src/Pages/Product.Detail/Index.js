import React, { useEffect, useState } from "react";
import Description from "./Description";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../../api";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetail() {
  const { state } = useLocation();
  console.log(state);
  const Navigate=useNavigate()

  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to={'/'} >
                Home
              </Link>
              <Link Link to={'/shop_list'} state={{data:state?.data?.category}} className="breadcrumb-item text-dark" href="#">
                {state?.data?.category}
              </Link>
              <span className="breadcrumb-item active">
                {state?.data?.title}
              </span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner bg-light">
                <Slider {...settings}>
                  {state?.data?.images?.map((item, index) => {
                    return (
                      <div className="carousel-item active" key={index}>
                        <img
                        //   className="w-100 h-100"
                          src={item}
                          alt="Image"
                          style={{height:"500px",width:"500px"}}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{state?.data?.title}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  {/* <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star-half-alt" />
                  <small className="far fa-star" /> */}
                  <small className=" text-primary mr-1">
                    <StarRatings
                      rating={state?.data?.rating}
                      starDimension="15px"
                      starSpacing="4px"
                      starRatedColor="#007bff "
                    />
                  </small>
                </div>
                <small className="pt-1">(99 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">
                ${state?.data?.price}
              </h3>
              <p className="mb-4">{state?.data?.description}</p>
              {/* <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                <form>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-2"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-3"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-4"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-5"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                      XL
                    </label>
                  </div>
                </form>
              </div> */}
              <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                <form>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-1"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-1">
                      Black
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-2"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-2">
                      White
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-3"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-3">
                      Red
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-4"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-4">
                      Blue
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-5"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-5">
                      Green
                    </label>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: 130 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    defaultValue={1}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3" onClick={()=>{Navigate('/cart')}} >
                  <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Description />
      </div>
    </>
  );
}
