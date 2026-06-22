

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import MedicationLiquidOutlinedIcon from "@mui/icons-material/MedicationLiquidOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "../../style/services-pages.css";

const PulmonologyPage = () => {
  return (
    <>
      {/* ================= Banner Section ================= */}
      {/* <Box className="pulmo-banner">
        <Box className="pulmo-banner-container">
          <Box className="pulmo-banner-content">
            <Typography className="pulmo-breadcrumb">
              Home &gt; Services &gt; <span>Pulmonology</span>
            </Typography>

            <Typography className="pulmo-banner-title">Pulmonology</Typography>

            <Typography className="pulmo-banner-text">
              Our Pulmonology services focus on the diagnosis, treatment, and
              management of respiratory conditions. We are committed to helping
              you breathe better and live healthier.
            </Typography>

            <Button className="pulmo-btn" endIcon={<ArrowForwardIcon />}>
              Book Appointment
            </Button>
          </Box>

          <Box className="pulmo-banner-image">
            <img src="/upload/61.png" alt="Pulmonology" />
          </Box>
        </Box>
      </Box> */}


<Box className="pulmo-banner">
  <Box className="pulmo-banner-container">
    <Box className="pulmo-banner-content">
      <Typography className="pulmo-breadcrumb">
        Home &gt; Services &gt; <span>Pulmonology</span>
      </Typography>

      <Typography className="pulmo-banner-title">Pulmonology</Typography>

      <Typography className="pulmo-banner-text">
        Our Pulmonology services focus on the diagnosis, treatment, and
        management of respiratory conditions. We are committed to helping
        you breathe better and live healthier.
      </Typography>

      <Button className="pulmo-btn" endIcon={<ArrowForwardIcon />}>
        Book Appointment
      </Button>
    </Box>

    <Box className="pulmo-mobile-image">
      <img src="/upload/lungs1.png" alt="Pulmonology" />
    </Box>
  </Box>
</Box>











      {/* ================= About Pulmonology Section ================= */}
      <Box className="pulmo-about-section">
        <Box className="pulmo-about-container">
          <Box className="pulmo-about-image">
            <img src="/upload/64.png" alt="Pulmonology Care" />
          </Box>

          <Box className="pulmo-about-content">
            <Typography className="pulmo-small-title">
              ABOUT PULMONOLOGY
            </Typography>

            <Box className="pulmo-line" />

            <Typography className="pulmo-about-title">
              Better Breathing, Better Living
            </Typography>

            <Typography className="pulmo-about-text">
              Our Pulmonology department is dedicated to providing comprehensive
              care for a wide range of lung and respiratory conditions. From
              asthma and allergies to chronic lung diseases, we offer expert
              care to help you breathe easier and live better.
            </Typography>

            <Button className="pulmo-btn" endIcon={<ArrowForwardIcon />}>
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= Pulmonology Services Section ================= */}
      <Box className="pulmo-services-section">
        <Box className="pulmo-container">
          <Box className="pulmo-section-head">
            <Typography className="pulmo-section-title">
              Our Pulmonology Services
            </Typography>
            <Box className="pulmo-line" />
          </Box>

          <Box className="pulmo-services-grid">
            {[
              {
                icon: <MedicalServicesOutlinedIcon />,
                title: "Pulmonary Consultation",
                text: "Comprehensive evaluation of respiratory symptoms and lung health.",
              },
              {
                icon: <AirOutlinedIcon />,
                title: "Lung Function Test",
                text: "Spirometry and other tests to assess lung function and capacity.",
              },
              {
                icon: <HotelOutlinedIcon />,
                title: "Bronchoscopy",
                text: "Advanced diagnostic procedure to examine airways and lungs in detail.",
              },
              {
                icon: <WaterDropOutlinedIcon />,
                title: "Asthma Management",
                text: "Personalized treatment plans to control asthma and improve quality of life.",
              },
              {
                icon: <CoronavirusOutlinedIcon />,
                title: "Allergy Testing",
                text: "Identify allergens and triggers to help manage respiratory allergies.",
              },
              {
                icon: <MedicationLiquidOutlinedIcon />,
                title: "COPD Treatment",
                text: "Specialized care for Chronic Obstructive Pulmonary Disease.",
              },
              {
                icon: <BedtimeOutlinedIcon />,
                title: "Sleep Apnea Care",
                text: "Diagnosis and treatment for sleep-related breathing disorders.",
              },
              {
                icon: <AirOutlinedIcon />,
                title: "Smoking Cessation",
                text: "Support and programs to help you quit smoking and improve lung health.",
              },
            ].map((item, index) => (
              <Box className="pulmo-service-card" key={index}>
                <Box className="pulmo-service-icon">{item.icon}</Box>
                <Box>
                  <Typography className="pulmo-service-title">
                    {item.title}
                  </Typography>
                  <Typography className="pulmo-service-text">
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ================= Why Choose Us Section ================= */}
      <Box className="pulmo-why-section">
        <Box className="pulmo-why-container">
          <Box className="pulmo-why-left">
            <Typography className="pulmo-section-title">
              Why Choose Us?
            </Typography>
            <Box className="pulmo-line" />

            {[
              "Highly experienced pulmonologists",
              "Advanced diagnostic and treatment facilities",
              "Personalized care for all respiratory conditions",
              "Focus on prevention and long-term lung health",
              "Compassionate care and patient education",
            ].map((item, index) => (
              <Box className="pulmo-why-point" key={index}>
                <CheckCircleIcon />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>

          <Box className="pulmo-why-image">
            <img src="/upload/63.png" alt="Pulmonology Diagnosis" />
          </Box>

          <Box className="pulmo-why-card">
            <Box className="pulmo-why-card-icon">
              <CalendarMonthOutlinedIcon />
            </Box>

            <Typography className="pulmo-why-card-title">
              Breathe Better Today
            </Typography>

            <Typography className="pulmo-why-card-text">
              Don't ignore your breathing problems. Early diagnosis and
              treatment can make a big difference. Book your pulmonology
              consultation today.
            </Typography>

            <Button className="pulmo-btn" endIcon={<ArrowForwardIcon />}>
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= Need Help Section ================= */}
      <Box className="pulmo-help-section">
        <Box className="pulmo-help-container">
          <Box className="pulmo-help-left">
            <Box className="pulmo-help-icon">
              <HeadsetMicOutlinedIcon />
            </Box>

            <Box>
              <Typography className="pulmo-help-title">Need Help?</Typography>
              <Typography className="pulmo-help-text">
                Our support team is here to assist you.
                <br />
                Feel free to contact us for any queries.
              </Typography>
            </Box>
          </Box>

          <Box className="pulmo-help-right">
            <Box className="pulmo-help-info">
              <LocalPhoneOutlinedIcon />
              <Typography>+92 300 1234567</Typography>
            </Box>

            <Box className="pulmo-help-info">
              <MailOutlineOutlinedIcon />
              <Typography>info@medicare.com</Typography>
            </Box>

            <Box className="pulmo-help-info">
              <LocationOnOutlinedIcon />
              <Typography>123, Health Street, Islamabad, Pakistan</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PulmonologyPage;