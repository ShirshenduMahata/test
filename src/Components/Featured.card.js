import React from "react";



export default function FeaturedCard ({Name,Icon}){
return(
    <>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: 30 }}
            >
              <h1 className={`${Icon} text-primary m-0 mr-3`}  />

              <h5 className="font-weight-semi-bold m-0">{Name}</h5>
            </div>
          </div>
    </>
)
}



