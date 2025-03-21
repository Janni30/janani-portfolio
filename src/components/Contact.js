import React from "react";
import data from "../data/data.json";

const Contact = () => {
  const { contactParagraph, email } = data.data;

  return (
    <div className="contact-sec" id="contact">
      <div className="container contact-div">
        <div className="title">
          <h1>Contact</h1>
          <div className="title-underline"></div>
        </div>
        <div className="contact-content">
          {/* Two-column layout */}
          <div className="contact-grid">
            {/* Text Section */}
            <div className="contact-info">
              <p>{contactParagraph}</p>
              <p>
                Email me at{" "}
                <a href={`mailto:${email}`} className="underline-link">
                  {email}
                </a>{" "}
                and let's connect!
              </p>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="input-field"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="input-field"
                ></textarea>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
