import { Box, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "../style/style.css";


export default function AboutPage() {
  return (
     <main>
    <Box className="about-banner">
      <Box className="about-content">
        <Typography className="about-title">About Us</Typography>

        <Box className="breadcrumb">
          <span>Home</span>
          <span>›</span>
          <span>About Us</span>
        </Box>

        <Button className="primary-btn">Learn More</Button>
      </Box>

      <Box className="about-image-box">
         <img
          src="/upload/doctor team2.png"
          alt="Doctor Team"
          className="about-doctor-img"
        /> 
      </Box>
    </Box>
      {/* ============================== second section ================================== */}
{/* <Box className="who-section">
      <Box className="who-content">
        <Typography className="who-title">Who We Are</Typography>

        <Typography className="who-text">
          MediCare is a modern healthcare facility committed to providing
          exceptional medical services with compassion, integrity, and
          excellence.
        </Typography>

         <Typography className="who-text">
          Our team of experienced doctors and healthcare professionals use
          advanced technology to deliver the best possible care.
        </Typography> 

        <Button className="who-btn">Learn More</Button>
      </Box>
    </Box> */}
     {/* ================================== third section ======================================= */}
 <Box className="mission-section">
      <Box className="mission-container">
        <Box className="mission-image-box">
          <img
            src="/upload/team2.jpg"
            alt="Medical Team"
            className="mission-image"
          />
        </Box>

        <Box className="mission-content">
          <Box className="mission-icon">◎</Box>

          <Box>
            <Typography className="mission-title">Our Mission</Typography>

            <Typography className="mission-text">
              Our mission is to improve the health and well-being of our 
              patients by providing high-quality, patient-centered care in a
              safe and comfortable environment.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
     {/* ================================== fourth section ======================================= */}

<Box className="values-section">
  <Box className="values-container">
    <Typography className="values-title">Our Values</Typography>

    <Box className="values-grid">
      <Box className="value-card">
        <FavoriteBorderIcon className="value-icon" />
        <Typography className="value-heading">Compassion</Typography>
        <Typography className="value-text">
          We care for our patients with kindness.
        </Typography>
      </Box>

      <Box className="value-card">
        <AutoAwesomeIcon className="value-icon" />
        <Typography className="value-heading">Excellence</Typography>
        <Typography className="value-text">
          We maintain the highest standards of care.
        </Typography>
      </Box>

      <Box className="value-card">
        <ShieldOutlinedIcon className="value-icon" />
        <Typography className="value-heading">Integrity</Typography>
        <Typography className="value-text">
          We act with honesty and transparency.
        </Typography>
      </Box>

      <Box className="value-card">
        <SettingsOutlinedIcon className="value-icon" />
        <Typography className="value-heading">Innovation</Typography>
        <Typography className="value-text">
          We embrace new technology for better healthcare.
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>
    {/* ================================== fifth section ======================================== */}
{/* <section className="why-choose-section">
  <Box className="why-overlay">
    <Box className="why-container">

      <Box className="why-heading">
        <Typography className="why-title">Why Choose Us</Typography>
        <Typography className="why-subtitle">
          We are committed to provide the best healthcare for you and your family.
        </Typography>
      </Box>

      <Box className="why-grid">
        <Box className="why-card">
          <div className="why-icon">◎</div>
          <Typography className="why-number">10+</Typography>
          <Typography className="why-text">Years of Experience</Typography>
        </Box>

        <Box className="why-card">
          <div className="why-icon">⚙</div>
          <Typography className="why-number">50K+</Typography>
          <Typography className="why-text">Happy Patients</Typography>
        </Box>

        <Box className="why-card">
          <div className="why-icon">♙</div>
          <Typography className="why-number">200+</Typography>
          <Typography className="why-text">Expert Doctors</Typography>
        </Box>

        <Box className="why-card">
          <div className="why-icon">✿</div>
          <Typography className="why-number">15+</Typography>
          <Typography className="why-text">Medical Services</Typography>
        </Box>
      </Box>

    </Box>
  </Box>
</section>
 */}
   </main>
  );
}


 