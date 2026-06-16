
"use client";

import {Box, Button,Typography, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import "../style/style.css";


const services = [
  {
    title: " General Consultation",
    image: "/upload/1.png",
    text: "Comprehensive health checkups, expert diagnosis, and personalized medical guidance for patients of all. ",
    link: "/#",
  },
  {
    title: "Cardiology",
    image: "/upload/2.png",
    text: "Advanced heart care services including diagnosis, prevention, and treatment for cardiovascular.",
    link: "/#",
  },
  {
    title: " Pulmonology",
    image: "/upload/3.png",
    text: "Specialized care for asthma, lung diseases, breathing disorders, and respiratory health management.",
    link: "/#",
  },
  {
    title: "Neurology",
    image: "/upload/4.png",
    text: "Expert diagnosis and treatment for brain, spine, nerve, headache, and neurological disorders.",
    link: "/#",
  },
  {
    title: " Laboratory Services",
    image: "/upload/5.png",
    text: "Accurate laboratory testing with modern equipment for reliable diagnosis and effective treatment.",
    link: "/#",
  },
  {
    title: " Radiology",
    image: "/upload/6.png",
    text: "High-quality imaging services including X-rays, ultrasound, CT scans, and diagnostic evaluations.",
    link: "/#",
  },
  {
    title: " Vaccination",
    image: "/upload/7.png",
    text: "Safe and effective immunization services for children and adults to prevent infectious diseases.",
    link: "/#",
  },
  {
    title: " Emergency Care",
    image: "/upload/8.png",
    text: "24/7 emergency medical services with rapid response and immediate treatment for critical conditions.",
    link: "/#",
  },
];
// =================================== why choose us =============================
const items = [
  {
    icon: <GroupsOutlinedIcon />,
    title: "Expert Doctors",
    text: "Highly qualified specialists you can trust.",
  },
  {
    icon: <HealthAndSafetyOutlinedIcon />,
    title: "Quality Care",
    text: "We ensure the highest standards of care.",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "24/7 Support",
    text: "Our team is available around the clock.",
  },
  {
    icon: <FavoriteBorderIcon />,
    title: "Patient Focused",
    text: "We treat every patient with care.",
  },
];
export default function ServiceBanner() {
  return (
     <main>
    <Box className="service-banner">
      <Box className="service-content">
        <Typography className="service-label">OUR SERVICES</Typography>

        <Typography component="h1" className="service-title">
          Comprehensive Healthcare Services For You and Your Family
        </Typography>

        <Typography className="service-text">
          We offer a wide range of medical services with advanced technology and
          expert healthcare professionals.
        </Typography>

        <Button className="primary-btn" endIcon={<ArrowForwardIcon />}>
          Book Appointment
        </Button>
      </Box>

      <Box className="service-img-box">
        <img
          src="/upload/55.png"
          alt="Lady Doctor"
          className="service-img"
        /> 
      </Box>
    </Box>
    {/* // ============================= second section ====================================== */}
 <Box className="who-section">
 
   
      <Box className="who-image-box">
        <img src="/upload/hospital2.png" alt="Hospital" className="who-image" />
      </Box>

      <Box className="who-content">
         <Typography className="who-label">WHO WE ARE</Typography> 

        <Typography component="h2" className="who-title">
          We Are Committed to Providing Quality Healthcare for You
        </Typography>

        <Typography className="who-text">
          At MediCare, we believe in delivering exceptional healthcare with
          compassion and integrity. Our experienced team uses advanced technology
          and a patient-first approach to ensure the best possible care for you
          and your family.
        </Typography>

        <Box className="who-features">
          <Box className="who-feature">
            <Box className="who-icon"><TrackChangesIcon /></Box>
            <Box>
              <Typography className="who-feature-title">Mission</Typography>
              <Typography className="who-feature-text">
                To deliver accessible, affordable, and high-quality healthcare.
              </Typography>
            </Box>
          </Box>

          <Box className="who-feature">
            <Box className="who-icon"><ShieldOutlinedIcon /></Box>
            <Box>
              <Typography className="who-feature-title">Values</Typography>
              <Typography className="who-feature-text">
                Integrity, respect, compassion, and excellence in everything.
              </Typography>
            </Box>
          </Box>

          <Box className="who-feature">
            <Box className="who-icon"><VisibilityOutlinedIcon /></Box>
            <Box>
              <Typography className="who-feature-title">Vision</Typography>
              <Typography className="who-feature-text">
                To be a trusted healthcare leader known for innovation.
              </Typography>
            </Box>
          </Box>

          <Box className="who-feature">
            <Box className="who-icon"><FavoriteBorderIcon /></Box>
            <Box>
              <Typography className="who-feature-title">Our Promise</Typography>
              <Typography className="who-feature-text">
                Your health and well-being are always our first priority.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
{/* ==================================== third section ========================================== */}

<Box className="services-grid-section">
      <Typography className="services-top-title">OUR SERVICES</Typography>

      <Box className="services-grid">
        {services.map((service, index) => (
          <Box className="service-card-box" key={index}>
            <Box className="service-card-img-wrap">
              <img
                src={service.image}
                alt={service.title}
                className="service-card-img"
              />
            </Box>

            <Box className="service-card-content">
              <Typography component="h3" className="service-card-title">
                {service.title}
              </Typography>

              <Typography className="service-card-text">
                {service.text}
              </Typography>
              <Link
  href={service.link}
  style={{ textDecoration: "none" }}
>
              <Button className="primary-btn" endIcon={<ArrowForwardIcon />}>
          view more
        </Button>
        </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>

{/* ==================================== fourth section ===================================== */}
<Box className="why-mini-section">
      {/* <Container maxWidth="xl"> */}
      <Box className="why-mini-container">
        <Box className="why-mini-box">
          <Box className="why-mini-heading">
            <Typography className="why-mini-subtitle">WHY CHOOSE US</Typography>

            <Typography className="why-mini-title">
              Your Health, Our Priority
            </Typography>

            <Box className="why-mini-line" />

            <Typography className="why-mini-desc">
              We are committed to providing exceptional healthcare services with
              compassion, expertise, and advanced technology.
            </Typography>
          </Box>

          <Grid container className="why-mini-grid">
            {items.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box className="why-mini-card">
                  <Box className="why-mini-icon">{item.icon}</Box>

                  <Typography className="why-mini-card-title">
                    {item.title}
                  </Typography>

                  <Typography className="why-mini-card-text">
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box className="why-mini-divider" />

          <Box className="why-mini-btn-wrap">
            <Link href="/why-choose-us" style={{ textDecoration: "none" }}>
            <Button
              className="primary-btn"
              endIcon={<ArrowForwardIcon />}
              onClick={() => router.push("/why-choose-us")}
            >
              Discover Why Choose Us
            </Button>
            </Link>
          </Box>
        </Box>
        </Box>
      {/* </Container> */}
    </Box>

    {/* ===================================== fifth section =============================== */}
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