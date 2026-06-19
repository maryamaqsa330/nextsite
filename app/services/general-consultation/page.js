
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import "../../style/services-pages.css";

export default function GeneralConsultationPage() {
  return (
    <>
      <GeneralConsultationBanner />
      <OverviewSection />
      <WhatToExpectSection />
      <WhoCanBenefitSection/>
    </>
  );
}

/* ================= Banner Section ================= */

// function GeneralConsultationBanner() {
//   return (
//     <Box className="gc-banner-section">
//       <Box className="gc-banner-container">
//         <Box className="gc-banner-content">
//           <Typography component="h1" className="gc-banner-title">
//             General Consultation
//           </Typography>

//           <Typography className="gc-banner-text">
//             Our General Consultation services provide you with a comprehensive
//             evaluation of your health. Our experienced doctors are here to
//             listen, diagnose, and guide you towards better health.
//           </Typography>

//           <Button
//             className="gc-banner-btn"
//             endIcon={<ArrowForwardIcon className="gc-banner-btn-icon" />}
//           >
//             Book Appointment
//           </Button>
//         </Box>

//         <Box className="gc-banner-image">
//           <img src="/upload/56.png" alt="General Consultation" />
//         </Box>
//       </Box>
//     </Box>
//   );
// }
function GeneralConsultationBanner() {
  return (
    <Box className="gc-new-banner-section">
      <Box className="gc-new-banner-content">
        <Typography component="h1" className="gc-new-banner-title">
          General Consultation
        </Typography>

        <Typography className="gc-new-banner-text">
          Our General Consultation services provide you with a comprehensive
          evaluation of your health. Our experienced doctors are here to listen,
          diagnose, and guide you towards better health.
        </Typography>

        <Button
          className="gc-new-banner-btn"
          endIcon={<ArrowForwardIcon className="gc-new-banner-btn-icon" />}
        >
          Book Appointment
        </Button>
      </Box>

      <Box className="gc-new-mobile-img" />
    </Box>
  );
}

/* ================= second Section ================= */

function OverviewSection() {
  const overviewCards = [
    {
      icon: <MedicalServicesOutlinedIcon />,
      title: "Personalized Care",
      text: "We take time to understand your health concerns and provide personalized solutions.",
    },
    {
      icon: <AssignmentTurnedInOutlinedIcon />,
      title: "Accurate Diagnosis",
      text: "Our doctors use their expertise to diagnose and recommend the best treatment.",
    },
    {
      icon: <FavoriteBorderOutlinedIcon />,
      title: "Preventive Health",
      text: "We focus on prevention and early detection to help you stay healthy and active.",
    },
    {
      icon: <HealthAndSafetyOutlinedIcon />,
      title: "Continuity of Care",
      text: "We build long-term relationships to support your health journey.",
    },
  ];

  return (
    <Box className="gc-overview-section">
      <Box className="gc-overview-container">
        <Box className="gc-overview-head">
          <Typography component="h2" className="gc-overview-title">
            Overview
          </Typography>

          <Box className="gc-overview-line" />

          <Typography className="gc-overview-desc">
            General Consultation is the first step towards good health. Whether
            you're feeling unwell, need a routine check-up, or have questions
            about your health, our doctors are here to help.
          </Typography>
        </Box>

        <Box className="gc-overview-grid">
          {overviewCards.map((item, index) => (
            <Box className="gc-overview-card" key={index}>
              <Box className="gc-overview-icon">{item.icon}</Box>

              <Typography component="h3" className="gc-overview-card-title">
                {item.title}
              </Typography>

              <Typography className="gc-overview-card-text">
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ================= third Section ================= */

function WhatToExpectSection() {
  const expectItems = [
    {
      title: "Health Assessment",
      text: "We review your medical history and current health concerns.",
    },
    {
      title: "Physical Examination",
      text: "A thorough physical examination to assess your overall health.",
    },
    {
      title: "Diagnosis & Treatment Plan",
      text: "We provide an accurate diagnosis and a personalized treatment plan.",
    },
    {
      title: "Follow-up & Support",
      text: "We ensure continuous support and follow-up for better health outcomes.",
    },
  ];

  return (
    <Box className="gc-expect-section">
      <Box className="gc-expect-container">
        <Box className="gc-expect-image">
          <img src="/upload/22.png" alt="What to Expect" />
        </Box>

        <Box className="gc-expect-content">
          <Typography component="h2" className="gc-expect-title">
            What to Expect
          </Typography>

          <Box className="gc-expect-line" />

          <Box className="gc-expect-list">
            {expectItems.map((item, index) => (
              <Box className="gc-expect-item" key={index}>
                <Box className="gc-expect-icon">
                  <CheckCircleRoundedIcon />
                </Box>

                <Box>
                  <Typography component="h3" className="gc-expect-item-title">
                    {item.title}
                  </Typography>

                  <Typography className="gc-expect-item-text">
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
  }
  /* ================= fourth Section ================= */

function WhoCanBenefitSection() {
  const benefitItems = [
    {
      icon: <GroupsOutlinedIcon />,
      text: "Individuals with fever, cold, or flu",
    },
    {
      icon: <PersonOutlineOutlinedIcon />,
      text: "People with chronic conditions",
    },
    {
      icon: <FavoriteBorderOutlinedIcon />,
      text: "Those needing regular check-ups",
    },
    {
      icon: <MedicalServicesOutlinedIcon />,
      text: "Anyone seeking health advice",
    },
  ];

  return (
    <Box className="gc-benefit-section">
      <Box className="gc-benefit-container">
        <Box className="gc-benefit-head">
          <Typography component="h2" className="gc-benefit-title">
            Who Can Benefit?
          </Typography>

          <Box className="gc-benefit-line" />
        </Box>

        <Box className="gc-benefit-grid">
          {benefitItems.map((item, index) => (
            <Box className="gc-benefit-item" key={index}>
              <Box className="gc-benefit-icon">
                {item.icon}
              </Box>

              <Typography className="gc-benefit-text">
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
