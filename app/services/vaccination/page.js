
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../../style/services-pages.css";
const services = [
  ["Child Vaccination", "Routine immunizations to protect children from serious infectious diseases."],
  ["Adult Vaccination", "Vaccines for adults to protect against flu, hepatitis, tetanus and more."],
  ["Senior Vaccination", "Special vaccines for seniors to strengthen immunity and prevent illness."],
  ["Travel Vaccination", "Essential vaccines for safe and healthy international travel."],
  ["Seasonal Vaccination", "Flu and other seasonal vaccines to keep you protected all year round."],
  ["School & College Vaccination", "Required vaccines for school and college students as per guidelines."],
  ["Corporate Vaccination", "On-site vaccination programs for employees to promote a healthy workplace."],
  ["Booster Dose", "Booster doses to maintain long-term immunity and better protection."],
];

export default function VaccinationPage() {
  return (
    <Box className="vaccination-page">

      {/* ================= HERO BANNER ================= */}
      <Box className="vacc-hero">
        <Box className="vacc-container vacc-hero-inner">
          <Box className="vacc-hero-content">
            <Typography className="vacc-breadcrumb">
              Home &gt; Services &gt; <span>Vaccination</span>
            </Typography>

            <Typography variant="h1">
              Vaccination  Services
            </Typography>

            <Typography className="vacc-hero-text">
              Protect yourself and your loved ones with safe and effective vaccines.
              We provide a wide range of vaccination services for all age groups.
            </Typography>

            <Button className="vacc-btn">
              Book Appointment <ArrowForwardIcon />
            </Button>
          </Box>

         <Box className="vacc-mobile-image">
            <img src="/upload/75.png" alt="Vaccination Services" />
       </Box>

        </Box>
      </Box>

      {/* ================= ABOUT SECTION ================= */}
      <Box className="vacc-about-section">
        <Box className="vacc-container vacc-about-grid">

          <Box className="vacc-about-img">
            <img src="/upload/76.png" alt="Vaccination" />
          </Box>

          <Box className="vacc-about-content">
            <Typography className="vacc-small-title">ABOUT VACCINATION</Typography>

            <Typography variant="h2">
              Prevention Today, <br /> Protection Tomorrow
            </Typography>

            <Typography className="vacc-para">
              Vaccination is one of the most effective ways to protect against serious
              diseases. Our vaccination services follow international safety standards
              to ensure maximum protection for you and your family.
            </Typography>

            <Box className="vacc-list">
              {[
                "WHO-recommended vaccines",
                "Safe, sterile and high-quality vaccines",
                "Protects individuals and communities",
                "Helps prevent future outbreaks",
              ].map((item, index) => (
                <Typography key={index}>
                  <CheckCircleIcon /> {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box className="vacc-priority-card">
            <Box className="vacc-card-icon">🛡</Box>
            <Typography variant="h4">Your Health <br /> Our Priority</Typography>
            <Typography>
              We are committed to keeping you and your family protected.
            </Typography>
          </Box>

        </Box>
      </Box>

      {/* ================= SERVICES SECTION ================= */}
      <Box className="vacc-services-section">
        <Box className="vacc-container">
          <Typography variant="h2" className="vacc-section-title">
            Our Vaccination Services
          </Typography>

          <Box className="vacc-services-grid">
            {services.map((item, index) => (
              <Box className="vacc-service-card" key={index}>
                <Box className="vacc-service-icon">✚</Box>
                <Box>
                  <Typography variant="h4">{item[0]}</Typography>
                  <Typography>{item[1]}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <Box className="vacc-why-section">
        <Box className="vacc-container vacc-why-grid">

          <Box className="vacc-why-content">
            <Typography variant="h2" className="vacc-section-title">
              Why Choose Us?
            </Typography>

            <Box className="vacc-list">
              {[
                "Certified and experienced healthcare professionals",
                "High-quality and government-approved vaccines",
                "Strict safety and hygiene protocols",
                "Personalized care for every individual",
                "Comfortable and patient-friendly environment",
              ].map((item, index) => (
                <Typography key={index}>
                  <CheckCircleIcon /> {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box className="vacc-why-img">
            <img src="/upload/77.png" alt="Vaccine Injection" />
          </Box>

          <Box className="vacc-book-card">
            <Box className="vacc-card-icon">📅</Box>
            <Typography variant="h3">Book Your Vaccination</Typography>
            <Typography>
              Stay protected, stay healthy. Book your vaccination appointment today.
            </Typography>
            <Button className="vacc-btn">
              Book Appointment <ArrowForwardIcon />
            </Button>
          </Box>

        </Box>
      </Box>

      {/* ================= HELP SECTION ================= */}
      <Box className="vacc-help-section">
        <Box className="vacc-container">
          <Box className="vacc-help-box">
            <Box>
              <Typography variant="h2">Need Help?</Typography>
              <Typography>
                Our support team is here to assist you. Feel free to contact us for any queries.
              </Typography>
            </Box>

            <Box className="vacc-help-info">
              <Typography>+92 300 1234567</Typography>
              <Typography>info@medicare.com</Typography>
              <Typography>123, Health Street, Islamabad, Pakistan</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}