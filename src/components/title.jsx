import React from "react";
import "./App.css";
import  "./1.JPG";

function Title(){

    return(
        
       <section className="justify-content-centre align-items-centre">

        <div className="row">
        <div className="container-fluid col-lg-6 col-md-6 col-sm-6">
        <img class="title-image" src={require('./1.JPG')} alt="iphone-mockup"/>
        </div>
         
         <div className="col-lg-6 col-md-6 col-sm-6">

        <h1 className="head">All Bids From Merchant</h1>
        <br/>
        <h3 className="head">10% Discount On Every item</h3>
       
         </div>
         
       </div>

       </section>
    );
}

export default Title;