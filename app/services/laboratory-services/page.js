
"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "../../style/services-pages.css";

export default function LaboratoryServicesPage() {
  return (
    <>
      <LabBanner />
      <AboutLab />
      <LabServices />
      <WhyChooseLab />
      <LabHelpBar />
    </>
  );
}

/* ================= Banner Section ================= */

function LabBanner() {
  return (
    <Box className="lab-banner-section">
      <Box className="lab-banner-container">
        <Box className="lab-banner-content">
          <Typography className="lab-breadcrumb">
            Home &gt; Services &gt; <span>Laboratory Services</span>
          </Typography>

          <Typography component="h1" className="lab-banner-title">
            Laboratory Services
          </Typography>

          <Typography className="lab-banner-text">
            Our laboratory services provide accurate, reliable, and timely
            results to help in the diagnosis, treatment, and prevention of
            diseases. Your health is our priority.
          </Typography>

          <Button className="lab-btn" endIcon={<ArrowForwardIcon />}>
            Book Appointment
          </Button>
        </Box>

<Box className="lab-mobile-image">
  <img src="/upload/69.png" alt="Laboratory Services" />
</Box>

      </Box>
    </Box>
  );
}


/* ================= Second Section About Lab ================= */

function AboutLab() {
  return (
    <Box className="lab-about-section">
      <Box className="lab-about-container">
        <Box className="lab-about-image">
          <img src="/upload/70.png" alt="Laboratory Testing" />
        </Box>

        <Box className="lab-about-content">
          <Typography className="lab-small-title">ABOUT OUR LAB</Typography>
          <Box className="lab-small-line" />

          <Typography component="h2" className="lab-about-title">
            Comprehensive Testing for Better Healthcare
          </Typography>

          <Typography className="lab-about-text">
            Our laboratory is equipped with the latest technology and follows
            strict quality control measures to ensure accurate and dependable
            test results. From routine screenings to advanced diagnostic tests,
            we provide a wide range of services to support your health journey.
          </Typography>

          {[
            "NABL Accredited Laboratory",
            "High Quality & Accurate Testing",
            "Confidential & Secure Reports",
            "Dedicated Support",
          ].map((item, index) => (
            <Box className="lab-check-item" key={index}>
              <CheckCircleIcon />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="lab-trust-card">
          <BiotechOutlinedIcon />
          <Typography component="h3">Quality You Can Trust</Typography>
          <Typography>
            We are committed to maintaining the highest standards in laboratory
            testing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Third Section Services ================= */

function LabServices() {
  const services = [
    ["Hematology", "Complete blood count, anemia testing, clotting tests and more."],
    ["Clinical Pathology", "Urine, stool and body fluid analysis for accurate diagnosis."],
    ["Biochemistry", "Blood sugar, liver, kidney and lipid profile tests."],
    ["Microbiology", "Bacterial, fungal and other microbial infection tests."],
    ["Immunology", "Allergy tests, autoimmune disorders and immunodeficiency."],
    ["Hormone Assays", "Thyroid, diabetes, fertility and other hormone level tests."],
    ["Serology", "Infectious disease and viral marker testing."],
    ["Specialized Tests", "Advanced and specialized tests as per clinical requirements."],
  ];

  return (
    <Box className="lab-services-section">
      <Box className="lab-main-container">
        <Typography component="h2" className="lab-section-title">
          Our Laboratory Services
        </Typography>
        <Box className="lab-section-line" />

        <Box className="lab-services-grid">
          {services.map((item, index) => (
            <Box className="lab-service-card" key={index}>
              <Box className="lab-service-icon">
                <BiotechOutlinedIcon />
              </Box>

              <Box>
                <Typography component="h3" className="lab-service-title">
                  {item[0]}
                </Typography>
                <Typography className="lab-service-text">{item[1]}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Fourth Section Why Choose Lab ================= */

function WhyChooseLab() {
  return (
    <Box className="lab-why-section">
      <Box className="lab-main-container lab-why-grid">
        <Box className="lab-why-content">
          <Typography component="h2" className="lab-section-title">
            Why Choose Our Laboratory?
          </Typography>
          <Box className="lab-section-line" />

          {[
            "Advanced laboratory with modern equipment",
            "Experienced and certified professionals",
            "Strict quality control and safety measures",
            "Quick turnaround time for reports",
            "Affordable pricing and transparent process",
          ].map((item, index) => (
            <Box className="lab-check-item" key={index}>
              <CheckCircleIcon />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="lab-why-image">
          <img src="/upload/71.png" alt="Modern Laboratory" />
        </Box>

        <Box className="lab-book-card">
          <CalendarMonthIcon />
          <Typography component="h2">Book a Lab Test</Typography>
          <Typography>
            Taking a test is the first step towards better health. Book your lab
            test today and get accurate results you can rely on.
          </Typography>

          <Button className="lab-btn" endIcon={<ArrowForwardIcon />}>
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Last Help Bar Section ================= */

function LabHelpBar() {
  return (
    <Box className="lab-help-section">
      <Box className="lab-main-container lab-help-bar">
        <Box className="lab-help-left">
          <HeadsetMicIcon />
          <Box>
            <Typography component="h2">Need Help?</Typography>
            <Typography>
              Our support team is here to assist you. Feel free to contact us for
              any queries.
            </Typography>
          </Box>
        </Box>

        <Box className="lab-help-info">
          <Box className="lab-help-item">
            <PhoneInTalkIcon />
            <Typography>+92 300 1234567</Typography>
          </Box>

          <Box className="lab-help-item">
            <MailOutlineIcon />
            <Typography>info@medicare.com</Typography>
          </Box>

          <Box className="lab-help-item">
            <LocationOnIcon />
            <Typography>123, Health Street, Islamabad, Pakistan</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}