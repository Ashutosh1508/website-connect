import React from "react";
import "./App.css";

function getTimeRemaining(endtime){
var total = Date.parse(endtime) - Date.parse(new Date());
var minutes = Math.floor( (total/1000/60) % 60 );

return(
  minutes
);

}

function Card() {
  return (
    <div className="container-fluid bg-light">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <img
            class="tv"
            alt=""
            src="https://www.90mobiles.com/dataup/thumbs_dir/realme-108-cm-43-inch-full-hd-led-smart-android-tvrmv2108-pp1c8qocuj916ama9eb49xza9knicr357mzc7mj2fc.jpeg"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <p>
            Realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV With
            Handsfree Voice Search and Dolby Vision & Atmos (RMV 2004)
          </p>
          <br />

          <p class="text-muted">Category {">"} Subcategory </p>

          <i class="fa fa-mobile-phone">
            &#x20B9; <del> Rs. 39,900</del>
          </i>

          <p>Qty : 2</p>

          <p>
            <ins>All Details</ins>
          </p>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12">
          <h2>
            Status<span class="logged-in">●</span></h2>
            <br/>
            <p>Time Remaining</p>
            <h3 class = "time">26 Minutes</h3>
            <br/>
            <br/>
           <span>
            <h3 class = "bid text-muted">BIDS PLACED  </h3>
            <h3 class = "bid-time vl">&nbsp;03</h3>
            

           </span>
            
        </div>
      </div>
    </div>
  );
}

export default Card;
