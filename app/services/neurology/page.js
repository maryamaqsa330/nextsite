
"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../style/services-pages.css";

export default function NeurologyPage() {
  return (
    <>
       <NeurologyBanner /> 
      <AboutNeurology />
      <NeurologyServices />
      <WhyChooseNeurology />
      <NeurologyHelpBar />
    </>
  );
}

/* ================= Banner Section ================= */

 function NeurologyBanner() {
   return (
     <Box className="neuro-banner-section">
       <Box className="neuro-banner-container">
        <Box className="neuro-banner-content">
           <Typography className="neuro-breadcrumb">
             Home &gt; Services &gt; <span>Neurology</span>
           </Typography>

           <Typography component="h1" className="neuro-banner-title">
           Neurology
         </Typography>

           <Box className="neuro-title-line" />

          <Typography className="neuro-banner-text">
           Our Neurology services focus on the diagnosis, treatment, and
             management of disorders of the brain, spine, and nervous system.
             We are dedicated to restoring function and improving quality of life.
          </Typography>

          <Button
             className="neuro-btn"
            endIcon={<ArrowForwardIcon />}
           >
            Book Appointment
          </Button>
        </Box>

          {/* <Box className="neuro-banner-image">
          <img src="/upload/67.png" alt="Neurology" />
         </Box>  */}
         <Box className="neuro-mobile-image">
/ <img src="/upload/brain3.png" alt="Neurology" />
 </Box>
       </Box>
     </Box>
    );
  }

/* ================= Second Section About Neurology ================= */

function AboutNeurology() {
  return (
    <Box className="neuro-about-section">
      <Box className="neuro-about-container">
        <Box className="neuro-about-image">
          <img src="/upload/68.png" alt="About Neurology" />
        </Box>

        <Box className="neuro-about-content">
          <Typography className="neuro-small-title">
            ABOUT NEUROLOGY
          </Typography>

          <Box className="neuro-small-line" />

          <Typography component="h2" className="neuro-about-title">
            Advanced Care for a Healthy Nervous System
          </Typography>

          <Typography className="neuro-about-text">
            Our neurology department provides comprehensive care for a wide
            range of neurological conditions. From headaches to complex
            neurological disorders, we are here to help you live a healthier,
            more active life.
          </Typography>

          <Box className="neuro-check-list">
            {[
              "Accurate diagnosis and specialized treatment",
              "Advanced equipment and modern facilities",
              "Patient-centered approach for better outcomes",
            ].map((item, index) => (
              <Box className="neuro-check-item" key={index}>
                <CheckCircleIcon />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="neuro-call-card">
          <PhoneInTalkIcon />
          <Typography className="neuro-call-title">
            Need Immediate Help?
          </Typography>
          <Typography className="neuro-call-text">
            Call us anytime
          </Typography>
          <Typography className="neuro-call-number">
            +92 300 1234567
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Third Section Services ================= */

function NeurologyServices() {
  const services = [
    ["Neurological Consultation", "Comprehensive evaluation of neurological symptoms and medical history."],
    ["Headache & Migraine Management", "Diagnosis and treatment for chronic headaches and migraines."],
    ["Stroke & Paralysis Treatment", "Advanced care for stroke recovery and management."],
    ["Epilepsy & Seizure Management", "Diagnosis and long-term management of epilepsy."],
    ["Sleep Disorder Treatment", "Assessment and treatment of insomnia and other sleep issues."],
    ["Neurophysiology Testing", "Advanced nerve and muscle testing for accurate diagnosis."],
    ["Parkinson’s Disease Care", "Specialized treatment and support for Parkinson’s patients."],
    ["Spinal Cord & Nerve Disorders", "Care for back pain, sciatica, and nerve-related conditions."],
  ];

  return (
    <Box className="neuro-services-section">
      <Box className="neuro-main-container">
        <Typography component="h2" className="neuro-section-title">
          Our Neurology Services
        </Typography>

        <Box className="neuro-section-line" />

        <Box className="neuro-services-grid">
          {services.map((item, index) => (
            <Box className="neuro-service-card" key={index}>
              <Box className="neuro-service-icon">
                <CheckCircleIcon />
              </Box>

              <Box>
                <Typography component="h3" className="neuro-service-title">
                  {item[0]}
                </Typography>

                <Typography className="neuro-service-text">
                  {item[1]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Fourth Section Why Choose Us ================= */

function WhyChooseNeurology() {
  return (
    <Box className="neuro-why-section">
      <Box className="neuro-main-container neuro-why-grid">
        <Box className="neuro-why-card">
          <Typography component="h2" className="neuro-section-title">
            Why Choose Us?
          </Typography>

          <Box className="neuro-section-line" />

          {[
            "Experienced and compassionate neurologists",
            "Advanced diagnostic and treatment facilities",
            "Personalized care for every patient",
            "Focus on long-term recovery and wellness",
            "Trusted by thousands of patients and families",
          ].map((item, index) => (
            <Box className="neuro-check-item" key={index}>
              <CheckCircleIcon />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="neuro-why-image">
          <img src="/upload/60.png" alt="Neurology Care" />
        </Box>

        <Box className="neuro-cta-card">
          <CalendarMonthIcon />
          <Typography component="h2">
            Take the First Step
          </Typography>

          <Typography>
            Don’t ignore neurological symptoms. Early diagnosis and treatment
            can make a big difference.
          </Typography>

          <Button className="neuro-white-btn" endIcon={<ArrowForwardIcon />}>
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Last Help Bar Section ================= */

function NeurologyHelpBar() {
  return (
    <Box className="neuro-help-section">
      <Box className="neuro-main-container neuro-help-bar">
        <Box className="neuro-help-left">
          <HeadsetMicIcon />
          <Box>
            <Typography component="h2">Need Help?</Typography>
            <Typography>
              Our support team is here to assist you.
            </Typography>
          </Box>
        </Box>

        <Box className="neuro-help-item">
          <PhoneInTalkIcon />
          <Typography>+92 300 1234567</Typography>
        </Box>

        <Box className="neuro-help-item">
          <MailOutlineIcon />
          <Typography>info@medicare.com</Typography>
        </Box>

        <Box className="neuro-help-item">
          <LocationOnIcon />
          <Typography>123, Health Street, Islamabad</Typography>
        </Box>
      </Box>
    </Box>
  );
}