
 import { Box, Typography, Button } from "@mui/material";
 import Link from "next/link";
import "./style/style.css";

export default function Home() {
  return (
    <main>
      {/* =========================== hero section ====================== */}
      <section className="hero-section">

        <Box className="hero-container">
          <Box className="hero-content">
            <span className="tag">WE CARE ABOUT YOUR HEALTH</span>

            <Typography className="hero-title">
              Your Health Is <br />
              <span>Our Priority</span>
            </Typography>

            <Typography className="hero-text">
              We provide world class medical services with a focus on patient
              care and advanced technology.
            </Typography>

            <Box className="hero-buttons">
              <Button className="primary-btn">Book Appointment</Button>
               <Link href="/about" style={{ textDecoration: "none" }}>
                <Button className="primary-btn">About us ▶</Button>
                </Link>
            </Box>
          </Box>

          <Box className="hero-image-box">
            <img
              src="/upload/doctor1.png"
              alt="Doctor"
              className="doctor-img"
            />

            {/* <Box className="floating-card card-one">
              <span>⚕</span>
              <h3>24/7</h3>
              <p>Emergency Service</p>
            </Box>

            <Box className="floating-card card-two">
              <span>♡</span>
              <h3>100%</h3>
              <p>Patient Satisfaction</p>
            </Box> */}
          </Box>
        </Box>
      </section>
      {/* =========================== second section ==================== */}

     <section className="features-section">
      <Box className="features-wrapper">

        <Box className="feature-card">
          <div className="feature-icon">☑</div>
          <Typography className="feature-title">Emergency Care</Typography>
          <Typography className="feature-text">
            24/7 professional emergency support.
          </Typography>
        </Box>

        <Box className="feature-card">
          <div className="feature-icon">👨‍⚕️</div>
          <Typography className="feature-title">Expert Doctors</Typography>
          <Typography className="feature-text">
            Experienced and specialized doctors.
          </Typography>
        </Box>

        <Box className="feature-card">
          <div className="feature-icon">⚙</div>
          <Typography className="feature-title">Advanced Technology</Typography>
          <Typography className="feature-text">
            Modern technology for better treatment.
          </Typography>
        </Box>

        <Box className="feature-card">
          <div className="feature-icon">🛡</div>
          <Typography className="feature-title">Personalized Care</Typography>
          <Typography className="feature-text">
            Care tailored to your health needs.
          </Typography>
        </Box>

      </Box>
    </section>

    {/* ========================== third section ========================= */}
   

<section className="medical-services-section">
  <Box className="services-container">
    
    <Box className="services-heading">
      <Typography className="services-title">
        Our Medical Services
      </Typography>
      <Typography className="services-subtitle">
        We offer a wide range of medical services for you and your family's health.
      </Typography>
    </Box>

    <Box className="services-grid">
      <Box className="service-card">
        <div className="service-icon">♡</div>
        <Typography className="service-title">Cardiology</Typography>
        <Typography className="service-text">
          Heart care and advanced treatment for a healthy life.
        </Typography>
      </Box>

      <Box className="service-card">
        <div className="service-icon">🧠</div>
        <Typography className="service-title">Neurology</Typography>
        <Typography className="service-text">
          Expert care for brain and nervous system disorders.
        </Typography>
      </Box>

      <Box className="service-card">
         <div className="service-icon">💉</div> 
        <Typography className="service-title">Vaccination</Typography>
        <Typography className="service-text">
          We provide safe and effective vaccines for children
        </Typography>
      </Box>

      <Box className="service-card">
        <div className="service-icon">🌬️</div>
        <Typography className="service-title">Pulmonology</Typography>
        <Typography className="service-text">
          Our pulmonology services help diagnose and treat asthma, allergies.
        </Typography>
      </Box>
    </Box>

    <Box className="services-btn-wrap">
       <Link href="/services" style={{ textDecoration: "none" }}>
      <Button className="primary-btn">View All Services</Button>
      </Link>
    </Box>

  </Box>
</section>
    
    </main>
  );
}