
 import { Box, Typography, Button } from "@mui/material";
 import Link from "next/link";
import "./style/style.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Home() {
  return (
    <main>
      {/* =========================== hero section ====================== */}
       <Box className="home-banner">
      <Box className="home-banner-container">
        <Box className="home-banner-content">
          <Typography className="home-banner-tag">
            WE CARE ABOUT YOUR HEALTH
          </Typography>

          <Typography component="h1" className="home-banner-title">
            Your Health Is <br />
            <span>Our Priority</span>
          </Typography>

          <Typography className="home-banner-text">
            We provide world class medical services with a focus on patient care
            and advanced technology.
          </Typography>

          <Box className="home-banner-buttons">
            <Button href="/appointment" className="primary-btn">
              Book Appointment
            </Button>

            <Button href="/about" className="primary-btn">
              About Us <span><PlayArrowIcon /></span>
            </Button>
          </Box>
        </Box>

        <Box className="home-banner-image-box">
          <img src="/upload/80.png" alt="Doctor" />
        </Box>
      </Box>
    </Box> 
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