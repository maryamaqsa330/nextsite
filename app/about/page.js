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
              Our mission is to improve the health and well-being of or
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
    
   </main>
  );
}


 