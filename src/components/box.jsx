import React from "react";
import "./App.css";

function Box() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          {/* <div class = "col-lg-2"> */}

          <h6>Watchmart Street - 4 Shop</h6>
          <h4 class="orange">Rs. 35,000</h4>
          <div class="box-div col-lg-6">
            <img class="box-img" src={require("./2.JPG")} alt="iphone-mockup" />
            <p class="text">
              Merchant Studios <br />
              Innovation Pvt. Lmt
            </p>
          </div>
          {/* </div> */}

          <div class="col-lg-6 right-box">
            <h6> Delivery & Services</h6>
            <br />
            <img class="express-logo inline" src={require("./1a.png")} alt="" />
            &nbsp;
            <p class="text-muted inline">Express Delivery</p>
            &nbsp;
            <i class="fa fa-check-circle green"></i>
            <img class="express-logo inline" src={require("./1c.jpg")} alt="" />
            &nbsp;
            <p class="text-muted inline">Return Option</p>
            &nbsp;
            <i class="fa fa-check-circle green"></i>
            <br />
            <br />
            <button class="button">
              <img class="inline white" src={require("./1f.png")} alt="" />{" "}
              &nbsp;Extra Offer
            </button>
          </div>

          <div class="name-box">
            <p>
              Bajaj Platina PX97 Torque 36-litres Personal Air Cooler(White)-For
              Medium Room
            </p>
          </div>

          <div class="buy-now">
            <button class="yellow">Buy Now</button>
          </div>

          <div class="pose">
            <p>Alternate Products</p>
            <img class="inline watch" src={require("./a1.JPG")} alt="" />{" "}
            <p class="para">
              Realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV With
              Handsfree Voice Search and Dolby Vision & Atmos (RMV 2004) <br />
              <i class="fa fa-mobile-phone para">
                &#x20B9; <del> Rs. 39,900</del>
              </i>
              &nbsp;&nbsp;
              <span class="yel">Rs.34,500</span>&nbsp;&nbsp;&nbsp;
              <button class="order">Order Now</button>
            </p>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////// */}

        <div class="col-lg-4 col-md-6 col-sm-12 ">
          {/* <div class = "col-lg-2"> */}

          <h6>Watchmart Street - 4 Shop</h6>
          <h4 class="orange">Rs. 35,000</h4>
          <div class="box-div col-lg-6">
            <img class="box-img" src={require("./2b.JPG")} alt="iphone-mockup" />
            <p class="text">
              Champions
            </p>
          </div>
          {/* </div> */}

          <div class="col-lg-6 right-box">
            <h6> Delivery & Services</h6>
            <br />
            <img class="express-logo inline" src={require("./1a.png")} alt="" />
            &nbsp;
            <p class="text-muted inline">Express Delivery</p>
            &nbsp;
            <i class="fa fa-check-circle green"></i>
            <img class="express-logo inline" src={require("./1c.jpg")} alt="" />
            &nbsp;
            <p class="text-muted inline">Return Option</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-times-circle time"></i>
            <br />
            <br />
            <button class="button">
              <img class="inline white" src={require("./1f.png")} alt="" />{" "}
              &nbsp;Extra Offer
            </button>
          </div>

          <div class="name-box">
            <p>
              Bajaj Platina PX97 Torque 36-litres Personal Air Cooler(White)-For
              Medium Room
            </p>
          </div>

          <div class="buy-now">
            <button class="yellow">Buy Now</button>
          </div>

          <div class="pose">
            <p>Alternate Products</p>
            <img class="inline watch" src={require("./a1.JPG")} alt="" />{" "}
            <p class="para">
              Realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV With
              Handsfree Voice Search and Dolby Vision & Atmos (RMV 2004) <br />
              <i class="fa fa-mobile-phone para">
                &#x20B9; <del> Rs. 39,900</del>
              </i>
              &nbsp;&nbsp;
              <span class="yel">Rs.34,500</span>&nbsp;&nbsp;&nbsp;
              <button class="order">Order Now</button>
            </p>
          </div>
        </div>

        {/* ////////////////////////////////////////////////// */}

        <div class="col-lg-4 col-md-6 col-sm-12">
          {/* <div class = "col-lg-2"> */}

          <h6>Watchmart Street - 4 Shop</h6>
          <h4 class="orange">Rs. 35,000</h4>
          <div class="box-div col-lg-6 col-md-3">
            <img class="box-img" src={require("./2c.JPG")} alt="iphone-mockup" />
            <p class="text">
              Louis Vuitton
            </p>
          </div>
          {/* </div> */}

          <div class="col-lg-6 col-md-3 right-box">
            <h6> Delivery & Services</h6>
            <br />
            <img class="express-logo inline" src={require("./1a.png")} alt="" />
            &nbsp;
            <p class="text-muted inline">Express Delivery</p>
            &nbsp;
            <i class="fa fa-check-circle green"></i>
            <img class="express-logo inline" src={require("./1c.jpg")} alt="" />
            &nbsp;
            <p class="text-muted inline">Return Option</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-times-circle time"></i>
            <br />
            <br />
            <button class="button">
              <img class="inline white" src={require("./1f.png")} alt="" />{" "}
              &nbsp;Extra Offer
            </button>
          </div>

          <div class="name-box">
            <p>
              Bajaj Platina PX97 Torque 36-litres Personal Air Cooler(White)-For
              Medium Room
            </p>
          </div>

          <div class="buy-now">
            <button class="yellow">Buy Now</button>
          </div>

          <div class="pose">
            <p>Alternate Products</p>
            <img class="inline watch" src={require("./a1.JPG")} alt="" />{" "}
            <p class="para">
              Realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV With
              Handsfree Voice Search and Dolby Vision & Atmos (RMV 2004) <br />
              <i class="fa fa-mobile-phone para">
                &#x20B9; <del> Rs. 39,900</del>
              </i>
              &nbsp;&nbsp;
              <span class="yel">Rs.34,500</span>&nbsp;&nbsp;&nbsp;
              <button class="order">Order Now</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
