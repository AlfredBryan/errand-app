import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Spinner } from "reactstrap";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

class Form extends Component {
  state = {
    service_starts: new Date(),
    fname: "",
    lname: "",
    phone: "",
    email: "",
    errands: false,
    personal_assistant: false,
    house_keeping: false,
    cleaning_services: false,
    address: "",
    task_desc: "",
    communication: "",
    cash: false,
    bank_tranfer: false,
    loading: false,
  };

  handleDateChange = (date) => {
    this.setState({
      service_starts: date,
    });
  };

  toggleErrands = () => {
    this.setState({
      errands: !this.state.errands,
    });
  };

  toggleAssistant = () => {
    this.setState({
      personal_assistant: !this.state.personal_assistant,
    });
  };

  toggleHouse = () => {
    this.setState({
      house_keeping: !this.state.house_keeping,
    });
  };

  toggleCleaning = () => {
    this.setState({
      cleaning_services: !this.state.cleaning_services,
    });
  };

  toggleCash = () => {
    this.setState({
      cash: !this.state.cash,
    });
  };

  toggleTransfer = () => {
    this.setState({
      bank_transfer: !this.state.bank_tranfer,
    });
  };

  handleStringChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      fname,
      lname,
      phone,
      email,
      address,
      service_starts,
      personal_assistant,
      errands,
      house_keeping,
      cleaning_services,
      task_desc,
      communication,
      cash,
      bank_tranfer,
    } = this.state;
    this.setState({
      loading: true,
    });
    axios
      .post("https://errand-api.herokuapp.com/api/v1/request", {
        fname,
        lname,
        phone,
        email,
        address,
        service_starts,
        personal_assistant,
        errands,
        house_keeping,
        cleaning_services,
        task_desc,
        communication,
        cash,
        bank_tranfer,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        throw error;
      });
  };

  render() {
    const {
      fname,
      lname,
      phone,
      email,
      address,
      service_starts,
      personal_assistant,
      errands,
      house_keeping,
      cleaning_services,
      task_desc,
      communication,
      cash,
      bank_tranfer,
      loading,
    } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="logo-area">
            <img src={require("../../images/logo1.png")} alt="logo" />
          </div>
          <form onSubmit={this.handleSubmit}>
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
                    value={fname}
                    onChange={this.handleStringChange}
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
                    value={lname}
                    onChange={this.handleStringChange}
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
                value={email}
                onChange={this.handleStringChange}
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
                value={phone}
                onChange={this.handleStringChange}
              />
            </div>
            <label htmlFor="services">
              What type of services do you need assistance with?<span>*</span>
            </label>
            <div class="checkbox">
              <input
                type="checkbox"
                id="errands"
                checked={errands}
                onChange={this.toggleErrands}
              />
              <label htmlFor="errands">
                <span>Errands & Delivery Services</span>
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="personal_assistant"
                checked={personal_assistant}
                onChange={this.toggleAssistant}
              />
              <label htmlFor="personal_assistant">
                <span>Personal Assistant Services</span>
              </label>
            </div>
            <div class="checkbox">
              <input
                type="checkbox"
                id="house_keeping"
                checked={house_keeping}
                onChange={this.toggleHouse}
              />
              <label htmlFor="house_keeping">
                <span>Housekeeping Services</span>
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                id="cleaning_services"
                checked={cleaning_services}
                onChange={this.toggleCleaning}
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
                value={address}
                onChange={this.handleStringChange}
              />
            </div>
            <label htmlFor="service_starts">
              When would you like to get started?<span>*</span>
            </label>
            <div className="form-group">
              <DatePicker
                selected={service_starts}
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
                value={task_desc}
                onChange={this.handleStringChange}
              />
            </div>

            <label htmlFor="communication">
              What is your preferred style of communication?<span>*</span>
            </label>
            <div className="form-group">
              <select
                className="form-control"
                name="communication"
                value={communication}
                onChange={this.handleStringChange}
              >
                <option selected>SELECT</option>
                <option value="email">EMAIL</option>
                <option value="call">PHONE CALL</option>
                <option value="sms">SMS</option>
              </select>
            </div>
            <label htmlFor="payment">
              How would you like to pay for your services?<span>*</span>
            </label>
            <div class="checkbox">
              <input
                type="checkbox"
                id="cash"
                checked={cash}
                onChange={this.toggleCash}
              />
              <label htmlFor="cash">
                <span>I will pay Cash</span>
              </label>
            </div>
            <div class="checkbox">
              <input
                type="checkbox"
                id="bank_transfer"
                checked={bank_tranfer}
                onChange={this.toggleTransfer}
              />
              <label htmlFor="bank_transfer">
                <span>I will do a Bank Transfer</span>
              </label>
            </div>
            <div className="abt_choose">
              <button onClick={this.handleSubmit} className="choose_submit">
                {loading ? <Spinner /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
