import { Typography } from "@mui/material";
import Link from "next/link";
import "../style/style.css";
export default function ContactPage() {
  return (
   <main>
    
{/*  =================================== banner section ==================================== */}
      <section className="inner-banner">
        <div className="inner-banner-content">
          <div className="inner-banner-text">
            <h1>Contact Us</h1>

            <div className="inner-breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Contact Us</span>
            </div>
          </div>

          <div className="inner-banner-image">
            <img className="image" src="/upload/doctor team2.png" alt="Contact Us" />
          </div>
        </div>
      </section>
 {/* ================================= second section ======================================= */}
<section className="contact-section">
  <div className="contact-wrap">
    <div className="contact-info-box">
      <h2>Get In Touch</h2>
      <p>Have questions or need assistance? We’re here to help.</p>

      <div className="contact-info-item">
        <div className="contact-icon">☎</div>
        <div>
          <h4>Phone</h4>
          <p>+92 316 7415051</p>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="contact-icon">✉</div>
        <div>
          <h4>Email</h4>
          <p>info@medicare.com</p>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="contact-icon">📍</div>
        <div>
          <h4>Location</h4>
          <p>123, Health Street, Islamabad, Pakistan...</p>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="contact-icon">⏱</div>
        <div>
          <h4>Working Hours</h4>
          <p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: Closed..</p>
        </div>
      </div>
    </div>

    <div className="contact-form-box">
      <h2>Send Us A Message</h2>

      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Phone</label>
        <input type="text" placeholder="Enter your phone number" />

        <label>Message</label>
        <textarea placeholder="Write your message..." />

        <button type="submit">Send Message ➤</button>
      </form>
    </div>
  </div>
</section>
{/* ===================================== third section ==================================== */}
<section className="contact-page-section">
        <div className="contact-container">
          <div className="contact-box">
            {/* Left Side */}
            <div className="contact-info-side">
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>123, Health Street, Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="contact-form-side">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" placeholder="Enter your phone number" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Write your message..."></textarea>
                </div>

                <button type="submit" className="contact-btn">
                  Send Message ➤
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-wrapper">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps?q=Bahria%20Phase%204%20Islamabad&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    


     </main> 
  );
}