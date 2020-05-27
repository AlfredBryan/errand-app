import React, { Component } from "react";
import PhoneNumber from "react-phone-number";
import CustomNav from "../Navbar/CustomNav";

import "./style.css";
import Footer from "../Footer/Footer";

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
                <button
                  onClick={() => {
                    this.props.history.push("/public/form/view");
                  }}
                  className="header_btn_one"
                >
                  Book Housekeeping Services
                </button>
                <button className="header_btn_two">
                  <i className="fa fa-phone" /> Call Us:
                  <PhoneNumber number="+2348116557414" isLinked={true} />
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
                <button
                  onClick={() => {
                    this.props.history.push("/public/form/view");
                  }}
                  className="header_two_btn_one"
                >
                  Submit A Service Request
                </button>
                <button className="header_two_btn_two">
                  <i className="fa fa-phone" /> Call Us:
                  <PhoneNumber number="+2348116557414" isLinked={true} />
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
              We provide a variety of home and lifestyle management services to
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
                  <h4>CLEANING SERVICES</h4>
                  <p>
                    Want an old unoccupied house cleaned in preparation <br />
                    for return, call us. Need regular cleaners for your <br />
                    office complex,banking halls, hotels, company... <br />
                    Contact us now <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="choose_us">
            <div className="container">
              <div className="choose">
                <h2>WHY YOU CAN CHOOSE US</h2>
                <div className="row choose_main">
                  <div className="col-md-6 feature_item">
                    <div className="list_number">1</div>
                    <div className="item_desc">
                      <h4>WE PRIORITIZE OUR CUSTOMERS</h4>
                      <p>
                        Our staff members are trained professionals and we are
                        all passionate about helping you with your daily errands
                        and home chores, especially if you’re unable to get them
                        done on time. Nothing is more important to us than your
                        satisfaction and that’s why we aim to always provide top
                        quality services to you.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 feature_item">
                    <div className="list_number">2</div>
                    <div className="item_desc">
                      <h4>WE'LL HELP YOU SAVE TIME</h4>
                      <p>
                        Do you have an important project to complete? Or do you
                        prefer to spend your time with family and friends doing
                        the things you enjoy most? If the answer is yes to these
                        2 questions, then you’re in the right place! We’ll help
                        you save your valuable time by handling all of your
                        tedious tasks on your to-do lists. That way you can
                        focus on your top priorities without having to worry
                        about the small stuff.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row choose_main">
                  <div className="col-md-6 feature_item">
                    <div className="list_number">3</div>
                    <div className="item_desc">
                      <h4>OUR TEAMS ARE RELIABLE & TRUSTWORTHY</h4>
                      <p>
                        Our customers are important to us and so is our
                        reputation. We know you depend on us to help you save
                        time so you can focus on what matters most to you, and
                        we promise to always be there when you need us! At the
                        end of the day, we want to be known as the company you
                        can trust and completely rely on to get things done when
                        you need it!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn_choose">
                  <button
                    onClick={() => {
                      this.props.history.push("/public/form/view");
                    }}
                    className="choose_btn"
                  >
                    Submit A Service Request
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="design_header">
            <h2 className="section-title">Need Help Today?</h2>
            <hr className="header_underline" />
          </div>
          <p className="how_it">Here’s how it works…</p>
          <div class="container how_it_works">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <div class="service_two">
                  <h4>
                    <span>1.</span>Tell Us About Your Tasks
                  </h4>
                  <p>
                    Give us a call, send a text message or submit your <br />
                    request online. Whatever your needs are, we’re here and
                    <br />
                    ready to help!
                  </p>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="service_two">
                  <h4>
                    <span>2.</span>We'll Get Them Done For You
                  </h4>
                  <p>
                    Once we have all the details about your tasks, we’ll <br />
                    schedule a date and time to get started and we’ll handle{" "}
                    <br />
                    the rest.
                  </p>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <div class="service_two">
                  <h4>
                    <span>3.</span>Enjoy Your Free Time
                  </h4>
                  <p>
                    While we’re running your errands or cleaning your home,
                    <br /> you can simply relax, work on your projects or do
                    <br /> whatever makes you happy!
                  </p>
                </div>
              </div>
            </div>
            <div className="btn_choose">
              <button
                onClick={() => {
                  this.props.history.push("/public/form/view");
                }}
                className="choose_btn"
              >
                Submit A Service Request
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
