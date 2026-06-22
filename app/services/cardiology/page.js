import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  MedicalServicesOutlined,
  MonitorHeartOutlined,
  VolunteerActivismOutlined,
  DirectionsRunOutlined,
  FavoriteBorderOutlined,
  HealthAndSafetyOutlined,
} from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "../../style/services-pages.css";



// ===================================== banner section =========================================
const CardiologyBanner = () => {
  return (
    <>
     {/* <Box className="cardio-banner"> 
      <Box className="cardio-banner-wrapper"> */}

        {/* Left Side */}
{/* 
        <Box className="cardio-content">

          <Typography className="cardio-breadcrumb">
            Home &gt; Services &gt; <span>Cardiology</span>
          </Typography>

          <Typography className="cardio-title">
            Cardiology
          </Typography>

          <Typography className="cardio-description">
            Our Cardiology services focus on the diagnosis,
            treatment and prevention of heart and cardiovascular
            conditions. Your heart health is our priority.
          </Typography>

          <Button
            className="cardio-btn"
            endIcon={<ArrowForwardIcon />}
          >
            Book Appointment
          </Button>

        </Box> */}

        {/* Right Side */}

        {/* <Box className="cardio-image">
          <img
            src="/upload/57.png"
            alt="Cardiology"
          />
        </Box>

      </Box>
    </Box>  */}





    <Box className="cardio-banner">
      <Box className="cardio-banner-wrapper">

        <Box className="cardio-content">
          <Typography className="cardio-breadcrumb">
            Home &gt; Services &gt; <span>Cardiology</span>
          </Typography>

          <Typography className="cardio-title">Cardiology</Typography>

          <Typography className="cardio-description">
            Our Cardiology services focus on the diagnosis,
            treatment and prevention of heart and cardiovascular
            conditions. Your heart health is our priority.
          </Typography>

          <Button className="cardio-btn" endIcon={<ArrowForwardIcon />}>
            Book Appointment
          </Button>
        </Box>

        <Box className="cardio-mobile-image">
          <img src="/upload/heart3.png" alt="Cardiology" />
        </Box>

      </Box>
    </Box>
  


























{/* // ==================================== second section ================================= */}
<Box className="cardio-about-section">

        <Box className="cardio-about-image">
          <img src="/upload/heart2.png" alt="Cardiology" />
        </Box>

        <Box className="cardio-about-content">

          <Typography className="cardio-about-subtitle">
            ABOUT CARDIOLOGY
          </Typography>

          <Box className="cardio-about-line" />

          <Typography className="cardio-about-title">
            Comprehensive Heart Care
            <br />
            You Can Trust
          </Typography>

          <Typography className="cardio-about-description">
            Our Cardiology department offers a wide range of services to help
            diagnose, treat, and manage heart conditions.
          </Typography>

          <Button className="cardio-about-btn">
            Book Appointment
          </Button>

        </Box>

      </Box>
{/* ================= Third Section  ================= */}

<Box className="cardio-services-section">
  <Box className="cardio-services-container">

    <Box className="cardio-section-header">
      <Typography className="cardio-section-title">
        Our Cardiology Services
      </Typography>
      <Box className="cardio-title-line" />
    </Box>

    <Box className="cardio-services-grid">

      <Box className="cardio-service-card">
        <Box className="cardio-service-icon">
  <MedicalServicesOutlined />
</Box>
        <Box>
          <Typography className="cardio-service-title">Heart Consultation</Typography>
          <Typography className="cardio-service-text">
            Detailed evaluation and risk assessment by expert cardiologists.
          </Typography>
        </Box>
      </Box>

      <Box className="cardio-service-card">
        <Box className="cardio-service-icon"><MonitorHeartOutlined /></Box>
        <Box>
          <Typography className="cardio-service-title">ECG & EKG</Typography>
          <Typography className="cardio-service-text">
            Accurate monitoring of heart rhythms and electrical activity.
          </Typography>
        </Box>
      </Box>

      <Box className="cardio-service-card">
        <Box className="cardio-service-icon"><VolunteerActivismOutlined /></Box>
        <Box>
          <Typography className="cardio-service-title">Echocardiography</Typography>
          <Typography className="cardio-service-text">
            Advanced imaging to assess heart structure and function.
          </Typography>
        </Box>
      </Box>

      <Box className="cardio-service-card">
        <Box className="cardio-service-icon"><DirectionsRunOutlined /></Box>
        <Box>
          <Typography className="cardio-service-title">Stress Test</Typography>
          <Typography className="cardio-service-text">
            Evaluates heart performance during physical stress and exercise.
          </Typography>
        </Box>
      </Box>

      <Box className="cardio-service-card">
        <Box className="cardio-service-icon"><FavoriteBorderOutlined /></Box>
        <Box>
          <Typography className="cardio-service-title">Blood Pressure Management</Typography>
          <Typography className="cardio-service-text">
            Monitoring and treatment to control high blood pressure.
          </Typography>
        </Box>
      </Box>

      <Box className="cardio-service-card">
        <Box className="cardio-service-icon"><HealthAndSafetyOutlined /></Box>
        <Box>
          <Typography className="cardio-service-title">Preventive Cardiology</Typography>
          <Typography className="cardio-service-text">
            Personalized guidance to prevent heart disease and improve health.
          </Typography>
        </Box>
      </Box>

    </Box>
  </Box>
</Box>
{/* =================================== fourth section =============================== */}


<Box className="cardio-why-section">
  <Box className="cardio-why-container">

    <Box className="cardio-why-left">
      <Typography className="cardio-why-title">Why Choose Us?</Typography>
      <Box className="cardio-why-line" />

      {[
        "Highly experienced and compassionate cardiologists",
        "Advanced diagnostic and treatment facilities",
        "Personalized care and treatment plans",
        "Focus on prevention, wellness, and education",
        "Trusted by thousands of patients and families",
      ].map((item, index) => (
        <Box className="cardio-why-point" key={index}>
          <CheckCircleIcon />
          <Typography>{item}</Typography>
        </Box>
      ))}
    </Box>

    <Box className="cardio-why-image">
      <img src="/upload/60.png" alt="Cardiology operation room" />
    </Box>

    <Box className="cardio-why-cta">
      <Box className="cardio-why-cta-icon">
        <CalendarMonthOutlinedIcon />
      </Box>

      <Typography className="cardio-why-cta-title">
        Take Care of Your Heart
      </Typography>

      <Typography className="cardio-why-cta-text">
        Don't wait for symptoms.
        <br />
        Early diagnosis can save lives.
        <br />
        Book your cardiology consultation today.
      </Typography>

      <Button
        className="cardio-why-btn"
        endIcon={<ArrowForwardIcon />}
      >
        Book Appointment
      </Button>
    </Box>

  </Box>
</Box>
{/* ====================================== contact section ===================================== */}
<Box className="cardio-help-section">
  <Box className="cardio-help-container">

    <Box className="cardio-help-left">
      <Box className="cardio-help-icon">
        <HeadsetMicOutlinedIcon />
      </Box>

      <Box>
        <Typography className="cardio-help-title">
          Need Help?
        </Typography>

        <Typography className="cardio-help-text">
          Our support team is here to assist you.
          <br />
          Feel free to contact us for any queries.
        </Typography>
      </Box>
    </Box>

    <Box className="cardio-help-right">

      <Box className="cardio-help-info">
        <LocalPhoneOutlinedIcon />
        <Typography>+92 300 1234567</Typography>
      </Box>

      <Box className="cardio-help-info">
        <MailOutlineOutlinedIcon />
        <Typography>info@medicare.com</Typography>
      </Box>

      <Box className="cardio-help-info">
        <LocationOnOutlinedIcon />
        <Typography>123, Health Street, Islamabad, Pakistan</Typography>
      </Box>

    </Box>

  </Box>
</Box>
































    </>
  );
}
;

export default CardiologyBanner;
