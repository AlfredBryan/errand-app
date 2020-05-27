import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

class Form extends Component {
  state = {
    service_starts: new Date(),
  };

  handleDateChange = (date) => {
    this.setState({
      service_starts: date,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="logo-area">
            <img src={require("../../images/logo1.png")} alt="logo" />
          </div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="fname">
                    First Name:<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Please provide your first name"
                    className="form-control"
                    name="fname"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lname">
                    Last Name:<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Please provide your last name"
                    className="form-control"
                    name="lname"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email:<span>*</span>
              </label>
              <input
                type="email"
                placeholder="Please provide your email address"
                className="form-control"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Phone:<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Please provide your phone number"
                className="form-control"
                name="phone"
              />
            </div>
            <label htmlFor="services">
              What type of services do you need assistance with?<span>*</span>
            </label>
            <div class="checkbox">
              <input type="checkbox" id="errands" name="errands" value="" />
              <label htmlFor="errands">
                <span>Errands & Delivery Services</span>
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="personal_assistant"
                name="personal_assistant"
                value=""
              />
              <label htmlFor="personal_assistant">
                <span>Personal Assistant Services</span>
              </label>
            </div>
            <div class="checkbox">
              <input
                type="checkbox"
                id="house_keeping"
                name="house_keeping"
                value=""
              />
              <label htmlFor="house_keeping">
                <span>Housekeeping Services</span>
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="cleaning_services"
                name="cleaning_services"
                value=""
              />
              <label for="cleaning_services">
                <span>Cleaning Services</span>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="address">
                Where would you like us to perform these services?<span>*</span>
              </label>
              <textarea
                rows="7"
                type="text"
                placeholder="Please provide your FULL ADDRESS"
                className="form-control"
                name="address"
              />
            </div>
            <label htmlFor="service_starts">
              When would you like to get started?<span>*</span>
            </label>
            <div className="form-group">
              <DatePicker
                selected={this.state.service_starts}
                onChange={this.handleDateChange}
                className="form-control"
                placeholderText="Select Date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="task_desc">
                Can you give us an idea of the tasks you’d like us to take care
                of for you?<span>*</span>
              </label>
              <textarea
                rows="7"
                type="text"
                placeholder="Start with the most important task"
                className="form-control"
                name="task_desc"
              />
            </div>

            <label htmlFor="communication">
              What is your preferred style of communication?<span>*</span>
            </label>
            <div className="form-group">
              <select className="form-control" name="communication">
                <option selected>SELECT</option>
                <option value="email">EMAIL</option>
                <option value="call">PHONE CALL</option>
                <option value="sms">SMS</option>
              </select>
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
