import { useState } from "react";
import React from "react";
 // Ensure this path is correct

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    clearState();
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="section-title contact-title">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                  <input type="hidden" name="access_key" value="f2854aa1-bf75-4ef7-8a7a-46922de4ab03" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                      value={name}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                      value={email}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={message}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <button type="submit" className="btn btn-custom" style={{background:"'6372ff"}}>
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                <span><i className="fa fa-map-marker"></i> </span>
                {props.data ? props.data.address : "loading"}
              </p>
              <p>
                <span><i className="fa fa-envelope-o"></i> </span>
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;