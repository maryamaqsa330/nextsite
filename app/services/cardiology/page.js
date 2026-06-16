import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../style/services-pages.css";

const CardiologyBanner = () => {
  return (
    <Box className="cardio-banner">
      <Box className="cardio-banner-wrapper">

        {/* Left Side */}

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

        </Box>

        {/* Right Side */}

        <Box className="cardio-image">
          <img
            src="/upload/57.png"
            alt="Cardiology"
          />
        </Box>

      </Box>
    </Box>
  );
};

export default CardiologyBanner;

