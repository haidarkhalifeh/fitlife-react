import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Contact() {
  const [message, setMessage] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Thank you! Your message has been sent successfully."
    );
  };

  return (
    <>
      <Navbar />

      <section className="section">

        <h2 className="section-title">
          Contact Us
        </h2>

        <div className="cards-grid">

          <div className="card">
            <div className="card-content">
              <h3>Get In Touch</h3>

              <form
                className="form-container"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Send Message
                </button>
              </form>

              {message && (
                <p
                  style={{
                    marginTop: "15px",
                    color: "green",
                  }}
                >
                  {message}
                </p>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Contact Information</h3>

              <p>
                📍 Beirut, Lebanon
              </p>

              <p>
                📞 +961 70 123 456
              </p>

              <p>
                ✉ info@fitlife.com
              </p>

              <p>
                🕒 Mon - Sat:
                8:00 AM - 8:00  PM
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;