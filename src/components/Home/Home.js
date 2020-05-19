import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="home_main">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
            </ul>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  className="bg_img"
                  src={require("../../images/slide1.jpg")}
                  alt="bg_img"
                />
                <h2 className="header_one">Want Your Home To Be Tidy?</h2>
                <h2 className="header_two">Try Our Housekeeping Services!</h2>
                <h6 className="new_sub_head">
                  Light Cleaning, Laundry, Ironing, Dishes and Much More!
                </h6>
                <button className="header_btn_one">
                  Book Housekeeping Services
                </button>
                <button className="header_btn_two">
                  <i className="fa fa-phone" /> Call Us: 000-000-0000
                </button>
              </div>
              <div class="carousel-item">
                <img
                  className="bg_img"
                  src={require("../../images/slide2.jpg")}
                  alt="bg_img"
                />
                <h2 className="new_one">Long To-Do List?</h2>
                <h2 className="new_two">We'll Take Care Of It For You!</h2>
                <h6 className="sub_head">
                  Grocery Shopping, Errands, New Mom Assistance And Much More!
                </h6>
                <button className="header_btn_one">
                  Submit A Service Request
                </button>
                <button className="header_btn_two">
                  <i className="fa fa-phone" /> Call Us: 000-000-0000
                </button>
              </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          <div className="design_header">
            <h2 className="section-title">SERVICES WE OFFER</h2>
            <hr className="header_underline" />
          </div>
          <div className="container">
            <p className="s_desc">
              We provide a variety of home and lifetsyle management services to
              our neighbors in Enugu and the surrounding areas. Our goal is to
              help you save time so you can focus on your top priorities, so
              whatever you don’t have time to do, we can do it for you!
            </p>
          </div>
          <div class="container services">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <div class="service_one">
                  <h4>ERRAND SERVICES</h4>
                  <p>
                    Grocery store runs, post office drop-offs,waiting <br />
                    in line, and flowers & gifts deliveries are just a <br />
                    few of the errands we can run for you while <br />
                    you're busy at work, Need help today?
                  </p>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="service_one">
                  <h4>HOUSEKEEPING SERVICES</h4>
                  <p>
                    No time to wash and fold your laundry? Getting <br />
                    tired of seeing a pile of dishes in your sink every <br />
                    day? Allow us to handle all of your
                    <br />
                    housekeeping chores while you're at work so <br />
                    you don't have to come home to do it yourself
                  </p>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="service_one">
                  <h4>NEW MOM SUPPORT SERVICES</h4>
                  <p>
                    Being a new mom is exciting, but trying to get <br />
                    things done around the home while taking care <br />
                    of a new baby can be quite challenging. That's <br />
                    why we created this special package to help you <br />
                    navigate through it all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
