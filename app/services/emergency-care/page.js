import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import "../../style/services-pages.css";


const services = [
  { icon: <EmergencyOutlinedIcon />, title: "Trauma Care", text: "Advanced care for injuries and accidents." },
  { icon: <FavoriteBorderOutlinedIcon />, title: "Cardiac Emergencies", text: "Immediate care for heart attacks, chest pain and related issues." },
  { icon: <PsychologyAltOutlinedIcon />, title: "Stroke Management", text: "Rapid diagnosis and treatment for stroke patients." },
  { icon: <AirOutlinedIcon />, title: "Respiratory Emergencies", text: "Treatment for severe breathing difficulties and asthma attacks." },
  { icon: <MonitorHeartOutlinedIcon />, title: "Critical Care Support", text: "24/7 critical care for unstable and high-risk patients." },
  { icon: <ChildCareOutlinedIcon />, title: "Pediatric Emergencies", text: "Specialized emergency care for infants, children and teens." },
  { icon: <ReportProblemOutlinedIcon />, title: "Poisoning & Allergies", text: "Immediate treatment for poisoning, allergic reactions and more." },
  { icon: <LocalFireDepartmentOutlinedIcon />, title: "Burns & Wound Care", text: "Comprehensive care for burns and deep wounds." },
];

 const EmergencyCarePage = () => {
  return (
   <Box className="emergency-page">
      {/* Banner */}
      <Box className="emergency-hero">
        <Box className="emergency-container emergency-hero-grid">
          <Box className="emergency-hero-content">
            <Typography className="emergency-breadcrumb">
              <HomeOutlinedIcon /> Home &gt; Services &gt; <span>Emergency Care</span>
             </Typography>

            <Typography component="h1" className="emergency-hero-title">
              Emergency Care <br /> When Every Second Counts
            </Typography>

            <Typography className="emergency-hero-text">
              Our emergency care services are available 24/7 to provide immediate
            medical attention when you need it the most. We are always ready
               to care for you and your loved ones.
           </Typography>

             <Box className="emergency-hero-buttons">
              <Button className="emergency-primary-btn">Book Appointment →</Button>
              <Button className="emergency-outline-btn">
                <PhoneOutlinedIcon /> +92 300 1234567
              </Button>
            </Box>
           </Box>
<Box className="emergency-mobile-image">
  <img src="/upload/78.png" alt="Emergency Care" />
</Box>
        </Box>
     </Box>

      {/* About */}
      <Box className="emergency-about">
        <Box className="emergency-container emergency-about-grid">
          <Box className="emergency-about-img">
            <img src="/upload/79.png" alt="Emergency Department" />
          </Box>

          <Box className="emergency-about-content">
            <Typography className="emergency-label">ABOUT EMERGENCY CARE</Typography>

            <Typography component="h2" className="emergency-section-title">
              Immediate Care, <br /> When You Need It Most
            </Typography>

            <Typography className="emergency-section-text">
              Medical emergencies can happen at any time. Our emergency department
              is fully equipped to handle a wide range of critical conditions.
              From minor injuries to life-threatening situations, our team is
              committed to delivering fast, effective and compassionate care.
            </Typography>

            {[
              "Immediate medical attention",
              "Advanced life support",
              "Specialized emergency physicians",
              "Seamless coordination with all departments",
            ].map((item) => (
              <Typography className="emergency-check-item" key={item}>
                <CheckCircleIcon /> {item}
              </Typography>
            ))}
          </Box>

          <Box className="emergency-helpline-card">
            <PhoneOutlinedIcon />
            <Typography component="h3">Emergency Helpline</Typography>
            <Typography>Call Us Anytime</Typography>
            <Typography className="emergency-phone-no">+92 300 1234567</Typography>
            <Button className="emergency-red-btn">24/7 AVAILABLE</Button>
          </Box>
        </Box>
      </Box>

      {/* Services */}
      <Box className="emergency-services">
        <Box className="emergency-container">
          <Typography component="h2" className="emergency-small-heading">
            Our Emergency Services
          </Typography>

          <Box className="emergency-services-grid">
            {services.map((item) => (
              <Box className="emergency-service-card" key={item.title}>
                <Box className="emergency-service-icon">{item.icon}</Box>
                <Box>
                  <Typography component="h3">{item.title}</Typography>
                  <Typography>{item.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Why Choose */}
      <Box className="emergency-why">
        <Box className="emergency-container emergency-why-grid">
          <Box>
            <Typography component="h2" className="emergency-small-heading">
              Why Choose Our Emergency Care?
            </Typography>

            {[
              "24/7 emergency services",
              "Experienced emergency physicians",
              "Modern equipment and technology",
              "Fast and efficient care",
              "Patient-centered approach",
            ].map((item) => (
              <Typography className="emergency-check-item" key={item}>
                <CheckCircleIcon /> {item}
              </Typography>
            ))}
          </Box>

          <Box className="emergency-why-img">
            <img src="/upload/73.png" alt="Emergency Hospital" />
          </Box>

          <Box className="emergency-help-card">
            <ReportProblemOutlinedIcon />
            <Box>
              <Typography component="h3">Don't Wait, Get Help Now!</Typography>
              <Typography>
                In an emergency, every second counts. Our team is ready to
                provide immediate care when you need it.
              </Typography>
              <Button className="emergency-primary-btn">Book Appointment →</Button>
            </Box>
          </Box>
        </Box>
      </Box>

       {/* Bottom CTA */}
      <Box className="emergency-bottom">
        <Box className="emergency-container emergency-cta-grid">
          <Box className="emergency-cta-left">
            <HeadsetMicOutlinedIcon />
            <Box>
              <Typography component="h3">Need Immediate Help?</Typography>
              <Typography>Our emergency team is here for you 24/7.</Typography>
              <Typography>Your health and safety are our priority.</Typography>
            </Box>
          </Box>

          <Box className="emergency-cta-info">
            <PhoneOutlinedIcon />
            <span>+92 300 1234567</span>
          </Box>

          <Box className="emergency-cta-info">
            <EmailOutlinedIcon />
            <span>info@medicare.com</span>
          </Box>

          <Box className="emergency-cta-info">
            <LocationOnOutlinedIcon />
            <span>123, Health Street, Islamabad, Pakistan</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmergencyCarePage; 

