import React from "react";
import FeaturedCard from "../../Components/Featured.card";

export default function Featured() {
    let data=[
        {
            Name:"Quality Product",
            Icone_Class:"fa fa-check"
        },
        {
            Name:"Free Shipping",
            Icone_Class:"fa fa-shipping-fast"
        },{
            Name:"14-Day Return",
            Icone_Class:"fas fa-exchange-alt"
        },{
            Name:"24/7 Support",
            Icone_Class:"fa fa-phone-volume"
        },
    ]
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">

            {
                data.map((item,index)=>{
                    return(
                        <FeaturedCard key={index} Name={item.Name} Icon={item.Icone_Class}/>
                    )
                })
            }
          {/* <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}






























