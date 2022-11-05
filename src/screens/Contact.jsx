import React from "react";

const Contact = () => {
  return (
    <main className="contact">
      <section className="inner-container">
        <h1 className="heading">Contact Me</h1>
        <p className="para">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form className="form-container">
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
          <div className="form-check">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              You agree to providing your data to Bonaventure who may contact
              you.
            </label>
          </div>
          <div className="form-control">
            <button id="btn__submit" type="submit">
              Send message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
