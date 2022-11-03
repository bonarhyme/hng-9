import React from "react";

const Contact = () => {
  return (
    <main>
      <h1>Contact Me</h1>
      <h3>Hi there, contact me to ask me about anything you have in mind.</h3>
      <form>
        <div className="twin-form">
          <div className="form-control">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email">First name</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div className="form-control">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            You agree to providing your data to Bonaventure who may contact you.
          </label>
        </div>
        <div className="form-control">
          <button id="btn__submit">Send message</button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
