import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer_class">
          <div className="svg_roll">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="svg_area">
                    <img
                      src={require("../../images/building.png")}
                      alt="building"
                    />
                    <div>
                      <p className="label_svg"> Macalfred's Errands</p>
                      <p className="svg_feature">We're here to Serve You</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="svg_area">
                    <img
                      src={require("../../images/clock.png")}
                      alt="building"
                    />
                    <div>
                      <p className="label_svg">We'll Help You</p>
                      <p className="svg_feature">Save Time</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="svg_area">
                    <img
                      src={require("../../images/clipboard.png")}
                      alt="building"
                    />
                    <div>
                      <p className="label_svg">And We Offer 100%</p>
                      <p className="svg_feature">Satisfaction Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p className="copyright">
              &copy; Copyright {new Date().getFullYear()}
              <span>Zara Errands</span> by <span>Bryan</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
