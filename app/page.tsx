
 import { Box, Typography, Button } from "@mui/material";
 import Link from "next/link";
import "./style/style.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import AirIcon from "@mui/icons-material/Air";

const services = [
  {
    icon: <FavoriteBorderIcon className="service-icon" />,
    title: "Cardiology",
    text: "Heart care and advanced treatment for a healthy life.",
  },
  {
    icon: <PsychologyIcon className="service-icon" />,
    title: "Neurology",
    text: "Expert care for brain and nervous system disorders.",
  },
  {
    icon: <VaccinesIcon className="service-icon" />,
    title: "Vaccination",
    text: "We provide safe and effective vaccines for children.",
  },
  {
    icon: <AirIcon className="service-icon" />,
    title: "Pulmonology",
    text: "pulmonology provide safe and effective vaccines for children.",
  },
];
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
            <Button href="/contacty" className="primary-btn">
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
  <Box className="medical-services-container">
    <Box className="medical-services-header">
      <Typography className="medical-services-title">
        Our Medical Services
      </Typography>

      <Typography className="medical-services-subtitle">
        We offer a wide range of medical services for you and your family's health.
      </Typography>
    </Box>

    <Box className="medical-services-grid">
      {services.map((item) => (
        <Box className="medical-service-card" key={item.title}>
          {item.icon}

          <Typography className="medical-service-title">
            {item.title}
          </Typography>

          <Typography className="medical-service-text">
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>

    <Box className="medical-services-btn-wrap">
      <Link href="/services" style={{ textDecoration: "none" }}>
        <Button className="medical-services-btn">
          View All Services
        </Button>
      </Link>
    </Box>
  </Box>
</section>



















    </main>
  );
} 