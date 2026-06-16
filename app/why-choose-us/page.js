
"use client";

import { Box, Container, Grid, Typography, Button } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "../style/style.css";
const cards = [
  { icon: <GroupsOutlinedIcon />, title: "Expert Doctors" },
  { icon: <HealthAndSafetyOutlinedIcon />, title: "Quality Care" },
  { icon: <SupportAgentOutlinedIcon />, title: "24/7 Support" },
  { icon: <MedicalServicesOutlinedIcon />, title: "Modern Facilities" },
  { icon: <FavoriteBorderOutlinedIcon />, title: "Patient Focused" },
  { icon: <SecurityOutlinedIcon />, title: "Trusted & Secure" },
];
export default function () {
  return (
    <main>
      {/* ===================================== banner ============================================= */}
    <Box className="why-banner">
      
      <Typography component="h1" className="why-banner-title">
        Why Choose Us
      </Typography>

      <Typography className="why-banner-text">
        We are committed to providing exceptional healthcare services with
        advanced technology and compassionate care.
      </Typography>
    </Box>
    {/* =============================== second section =================================================== */}
<Box className="why-choose-section">
      
      <Box className="why-mini-container">
        <Box className="why-choose-heading">
          <Typography className="why-subtitle">WHY CHOOSE US</Typography>
          <Box className="why-line" />
        </Box>

        <Grid container spacing={3} className="why-card-grid">
          {cards.map((item, index) => (
           <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
           
              <Box className="why-card">
                <Box className="why-icon">{item.icon}</Box>

                <Typography className="why-card-title">
                  {item.title}
                </Typography>

                <Typography className="why-card-text">
                  Our team provides professional healthcare support with care,
                  safety, and personalized attention.
                </Typography>

                <Box className="why-card-line" />
              </Box>
            </Grid>
             
          ))}
          
        </Grid>
        </Box>
   
    </Box>
    {/* ============================ third section ======================================= */}
<Box className="contact-cta-section">
      <Box className="contact-cta-heading-wrap">
        <Typography className="contact-cta-label">CONTACT US</Typography>
        <Typography component="h2" className="contact-cta-title">
          Need an Appointment?
        </Typography>
      </Box>

      <Box className="contact-cta-box">
        <Box className="contact-cta-left">
          <Box className="contact-cta-icon">
            <CalendarMonthIcon />
          </Box>

          <Box>
            <Typography className="contact-cta-box-title">
              Book Your Visit Today
            </Typography>
            <Typography className="contact-cta-text">
              Book your appointment with our specialist doctors and take the
              first step towards better health.
            </Typography>
          </Box>
        </Box>

        <Box className="contact-cta-divider" />

        <Box className="contact-cta-phone-wrap">
          <Box className="contact-phone-icon">
            <LocalPhoneOutlinedIcon />
          </Box>

          <Box>
            <Typography className="contact-phone-label">
              Call Us Anytime
            </Typography>
            <Typography className="contact-phone-number">
              +92 300 1234567
            </Typography>
          </Box>
        </Box>

        <Button className="contact-cta-btn">Book Appointment</Button>
      </Box>
    </Box>
    </main>
  );
}