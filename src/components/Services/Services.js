import React, { Component } from "react";
import CustomNav from "../Navbar/CustomNav";

import "./style.css";
import Footer from "../Footer/Footer";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="service_main">
          <div className="header_area">
            <div className="container">
              <h1 className="about_header">SERVICES</h1>
              <div className="design_header">
                <h2 className="section-title">Our Specialties</h2>
                <hr className="header_underline" />
              </div>
            </div>
            <p className="special_p">
              Are you too busy or too tired to get anything done in your home?
              No worries! Here at Macalfred's Errands you’ll find a variety of
              home and lifestyle management services to help you save <br />
              time and make life a little more manageable. No matter what your
              needs are, our company exists to help you with every errand or
              task on your to-do list that you don’t have time to <br />
              do! We pride ourselves on being reliable, trustworthy and
              convenient and we know you’ll enjoy these qualities too.
            </p>
            <div class="container how_it_works">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="service_two">
                    <h4>ERRAND SERVICES</h4>
                    <hr className="header_underline" />
                    <p>
                      Grocery store runs, post office drop-offs, waiting <br />
                      in line, and flowers & gifts deliveries are just a
                      <br />
                      few of the errands we can run for you while <br />
                      you’re busy at work. Need help today?
                    </p>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="service_two">
                    <h4>HOUSEKEEPING SERVICES</h4>
                    <hr className="header_underline" />
                    <p>
                      No time to wash and fold your laundry? Getting
                      <br />
                      tired of seeing a pile of dishes in your sink every
                      <br />
                      day? Allow us to handle all of your <br />
                      housekeeping chores while you’re at work so <br />
                      you don’t have to come home to do it yourself!
                    </p>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="service_two">
                    <h4>CLEANING SERVICES</h4>
                    <hr className="header_underline" />
                    <p>
                      Want an old unoccupied house cleaned in preparation <br />
                      for return, call us. Need regular cleaners for your <br />
                      office complex,banking halls, hotels, company... <br />
                      Contact us now <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="abt_choose">
                <button
                  onClick={() => {
                    this.props.history.push("/public/form/view");
                  }}
                  className="choose_abt"
                >
                  Request A Service Today
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="align_footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Services;
