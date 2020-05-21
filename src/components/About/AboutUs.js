import React, { Component } from "react";

import CustomNav from "../Navbar/CustomNav";
import Footer from "../Footer/Footer";

import "./style.css";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="about_main">
          <div className="header_area">
            <div className="container">
              <h1 className="about_header">ABOUT US</h1>
              <div className="design_header">
                <h2 className="section-title">The Company</h2>
                <hr className="header_underline" />
              </div>
              <p className="f_p">
                Macalfred's Errands, LLC specializes in providing Errand
                Services and Personal Assistant Services to the residents of
                Enugu town. When we first started our company in 2019, our goal
                and mission were to always provide professional, trustworthy,
                reliable and convenient services to busy individuals and
                families who struggle with completing their daily errands,
                to-do’s, and home chores.
              </p>
              <p className="f_p">
                At MacAlfred's Errands, we know and understand that life can be
                stressful, overwhelming and even tiring because of all the
                things we are responsible for doing on a daily basis. There are
                24 hours in a day, but sometimes you feel like there’s simply
                not enough time to get everything done.
              </p>
              <p className="f_p">
                And for this reason, we aim to provide the perfect solution for
                you. Life is short and time is valuable. That’s why we want to
                help you save time so you can focus on your top priorities and
                do the things that truly matters to you.
              </p>
              <p className="f_p">
                From Grocery shopping, to closet decluttering and organization,
                to laundry services, we are highly prepared to help you with all
                of your daily needs.
              </p>
              <p className="f_p">
                Whatever you don’t have time to do, we can and will do it for
                you!
              </p>
              <div className="abt_choose">
                <button className="choose_abt">
                  Submit A Service Request Today
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

export default AboutUs;
