
"use client";

import { Box, Button, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "../style/style.css";

const doctors = [
  {
    name: "Dr. Ahmed Khan",
    role: "General Physician",
    image: "/upload/10.png",
    exp: "8+ Years Experience",
    rating: "4.8 (120 Reviews)",
    days: "Mon - Sat",
  },
  {
    name: "Dr. Sara Malik",
    role: "Cardiologist",
    image: "/upload/11.png",
    exp: "10+ Years Experience",
    rating: "4.9 (150 Reviews)",
    days: "Mon - Sat",
  },
  {
    name: "Dr. Ayesha Noor",
    role: "Pulmonologist",
    image: "/upload/12.png",
    exp: "9+ Years Experience",
    rating: "4.7 (98 Reviews)",
    days: "Mon - Fri",
  },
  {
    name: "Dr. Bilal Hassan",
    role: "Neurologist",
    image: "/upload/13.png",
    exp: "12+ Years Experience",
    rating: "4.9 (110 Reviews)",
    days: "Mon - Sat",
  },
  {
    name: "Dr. Zain Ali",
    role: "Laboratory Consultant",
    image: "/upload/14.png",
    exp: "7+ Years Experience",
    rating: "4.6 (80 Reviews)",
    days: "Mon - Sat",
  },
  {
    name: "Dr. Hina Farooq",
    role: "Radiologist",
    image: "/upload/15.png",
    exp: "8+ Years Experience",
    rating: "4.8 (95 Reviews)",
    days: "Mon - Fri",
  },
  {
    name: "Dr. Sana Yousaf",
    role: "Vaccination Specialist",
    image: "/upload/16.png",
    exp: "6+ Years Experience",
    rating: "4.7 (70 Reviews)",
    days: "Mon - Sat",
  },
  {
    name: "Dr. Umar Shah",
    role: "Emergency care Specialist",
    image: "/upload/17.png",
    exp: "11+ Years Experience",
    rating: "4.9 (130 Reviews)",
    days: "24hrs (Available)",
  },
];

export default function () {
  return (
    <main>
      {/* ================================== banner section ============================ */}
{/* <Box className="doctors-banner">
      <Box className="doctors-banner-content">
        <Typography className="doctor-breadcrumb">Home &gt; Doctors</Typography>

        <Typography component="h1" className="doctors-banner-title">
          Meet Our <br /> Specialist Doctors
        </Typography>

        <Typography className="doctors-banner-text">
          Our experienced and compassionate doctors are dedicated to providing
          the highest quality care across a wide range of specialties hhhhhhhhhhhhhhh.
        </Typography>
            </Box>
      <Box className="doctors-banner-image-box">
        <img src="/upload/55.png" alt="Specialist Doctors" className="doctors-banner-img" />
      </Box>
     </Box> */}
    {/* ============================== 2 =========================== */}
      <Box className="doctor-detail-banner">
  <Box className="doctor-detail-content">
    <Typography className="doctor-detail-label">
      OUR DOCTORS
    </Typography>

    <Typography component="h1" className="doctor-detail-title">
      Meet Our <br /> Specialist Doctors
    </Typography>

    <Typography className="doctor-detail-text">
      Our experienced and compassionate doctors are dedicated to providing
      the highest quality care across a wide range of specialties.
    </Typography>
  </Box>

  <Box className="doctor-detail-mobile-img" />
</Box> 
{/* ========================== 3 ========================== */}


      {/* ============================= second section ====================================== */}

      <Box className="doctors-section">
        <Box className="doctors-grid">
          {doctors.map((doctor, index) => (
            <Box className="doctor-card" key={index}>
              <Box className="doctor-image-wrap">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-img"
                />

                <Typography className="doctor-status">Available</Typography>
              </Box>

              <Box className="doctor-content">
                <Typography component="h3" className="doctor-name">
                  {doctor.name}
                </Typography>

                <Typography className="doctor-role">{doctor.role}</Typography>
                <Typography className="doctor-exp">{doctor.exp}</Typography>

                <Box className="doctor-meta">
                  <Typography className="doctor-rating">
                    <StarIcon /> {doctor.rating}
                  </Typography>

                  <Typography className="doctor-days">
                    <AccessTimeIcon /> {doctor.days}
                  </Typography>
                </Box>

                <Button className="primary-btn" startIcon={<CalendarMonthIcon />}>
                  contact us
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
{/* ===================================== third section ========================================== */}

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