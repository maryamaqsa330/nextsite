"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "../../style/services-pages.css";

export default function RadiologyPage() {
  return (
    <>
      <RadiologyBanner />
      {/* <RadiologyFeatureStrip /> */}
      <AboutRadiology />
      <RadiologyServices />
      <WhyChooseRadiology />
      <RadiologyHelpBar />
    </>
  );
}

/* ================= Banner Section ================= */

function RadiologyBanner() {
  return (
    <Box className="radio-banner-section">
      <Box className="radio-banner-container">
        <Box className="radio-banner-content">
          <Typography className="radio-breadcrumb">
            Home &gt; Services &gt; <span>Radiology</span>
          </Typography>

          <Typography component="h1" className="radio-banner-title">
            Radiology Services
          </Typography>

          <Typography className="radio-banner-text">
            Our Radiology services provide advanced imaging solutions for
            accurate diagnosis and effective treatment planning. We are
            committed to quality, safety, and patient care.
          </Typography>

          <Button className="radio-btn" endIcon={<ArrowForwardIcon />}>
            Book Appointment
          </Button>
        </Box>
        <Box className="radio-mobile-image">
  <img src="/upload/radiology1.png" alt="Radiology Services" />
</Box>
      </Box>
    </Box>
  );
}

/* ================= Feature Strip Section ================= */

// function RadiologyFeatureStrip() {
//   const items = [
//     {
//       icon: <TrackChangesIcon />,
//       title: "Accurate Diagnosis",
//       text: "High-quality images for precise diagnosis and better treatment.",
//     },
//     {
//       icon: <ShieldOutlinedIcon />,
//       title: "Advanced Technology",
//       text: "State-of-the-art equipment for clear and detailed imaging.",
//     },
//     {
//       icon: <AccessTimeOutlinedIcon />,
//       title: "Quick & Reliable",
//       text: "Fast turnaround time with reliable results.",
//     },
//     {
//       icon: <HealthAndSafetyOutlinedIcon />,
//       title: "Patient Safety",
//       text: "We follow strict safety protocols for your well-being.",
//     },
//   ];

//   return (
//     <Box className="radio-feature-section">
//       <Box className="radio-main-container radio-feature-box">
//         {items.map((item, index) => (
//           <Box className="radio-feature-item" key={index}>
//             <Box className="radio-feature-icon">{item.icon}</Box>

//             <Typography component="h3" className="radio-feature-title">
//               {item.title}
//             </Typography>

//             <Typography className="radio-feature-text">
//               {item.text}
//             </Typography>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

/* ================= Second Section About Radiology ================= */

function AboutRadiology() {
  return (
    <Box className="radio-about-section">
      <Box className="radio-about-container">
        <Box className="radio-about-image">
          <img src="/upload/73.png" alt="About Radiology" />
        </Box>

        <Box className="radio-about-content">
          <Typography className="radio-small-title">
            ABOUT RADIOLOGY
          </Typography>

          <Box className="radio-small-line" />

          <Typography component="h2" className="radio-about-title">
            Advanced Imaging, Better Insights
          </Typography>

          <Typography className="radio-about-text">
            Our radiology department offers a wide range of imaging services to
            help physicians diagnose and treat conditions effectively. We use
            cutting-edge technology and the expertise of experienced
            radiologists to deliver accurate and timely results.
          </Typography>

          {[
            "Experienced & Certified Radiologists",
            "High-Resolution Imaging",
            "Digital Reports & Secure Data",
            "Patient-Centered Care",
          ].map((item, index) => (
            <Box className="radio-check-item" key={index}>
              <CheckCircleIcon />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="radio-call-card">
          <PhoneInTalkIcon />
          <Typography component="h3">Need Help?</Typography>
          <Typography>Call us anytime</Typography>
          <Typography className="radio-call-number">
            +92 300 1234567
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Third Section Radiology Services ================= */

function RadiologyServices() {
  const services = [
    ["X-Ray", "Digital X-rays for quick and accurate diagnosis of bones and organs."],
    ["Ultrasound", "Real-time imaging for internal organs, pregnancy, and soft tissue evaluation."],
    ["CT Scan", "Detailed cross-sectional images for precise diagnosis."],
    ["MRI Scan", "Advanced imaging for brain, spine, joints, and soft tissue assessment."],
    ["Mammography", "Specialized imaging for early detection of breast conditions."],
    ["Doppler Studies", "Evaluate blood flow in veins and arteries for accurate diagnosis."],
    ["Fluoroscopy", "Real-time X-ray imaging for dynamic evaluation of body functions."],
    ["Bone Densitometry", "Assess bone density and detect osteoporosis early."],
  ];

  return (
    <Box className="radio-services-section">
      <Box className="radio-main-container">
        <Typography component="h2" className="radio-section-title">
          Our Radiology Services
        </Typography>

        <Box className="radio-section-line" />

        <Box className="radio-services-grid">
          {services.map((item, index) => (
            <Box className="radio-service-card" key={index}>
              <Box className="radio-service-icon">
                <MedicalServicesOutlinedIcon />
              </Box>

              <Box>
                <Typography component="h3" className="radio-service-title">
                  {item[0]}
                </Typography>

                <Typography className="radio-service-text">
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

/* ================= Fourth Section Why Choose Radiology ================= */

function WhyChooseRadiology() {
  return (
    <Box className="radio-why-section">
      <Box className="radio-main-container radio-why-grid">
        <Box className="radio-why-content">
          <Typography component="h2" className="radio-section-title">
            Why Choose Our Radiology?
          </Typography>

          <Box className="radio-section-line" />

          {[
            "Latest imaging technology and modern facilities",
            "Highly experienced radiologists and staff",
            "Accurate reporting and fast results",
            "Safe, comfortable and patient-friendly environment",
            "Comprehensive imaging services under one roof",
          ].map((item, index) => (
            <Box className="radio-check-item" key={index}>
              <CheckCircleIcon />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>

        <Box className="radio-why-image">
          <img src="/upload/74.png" alt="Radiology Scan" />
        </Box>

        <Box className="radio-book-card">
          <CalendarMonthIcon />
          <Typography component="h2">Book Your Scan</Typography>

          <Typography>
            Early diagnosis leads to better treatment. Book your radiology
            appointment today.
          </Typography>

          <Button className="radio-btn" endIcon={<ArrowForwardIcon />}>
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

/* ================= Last Help Bar Section ================= */

function RadiologyHelpBar() {
  return (
    <Box className="radio-help-section">
      <Box className="radio-main-container radio-help-bar">
        <Box className="radio-help-left">
          <HeadsetMicIcon />

          <Box>
            <Typography component="h2">Need Help?</Typography>
            <Typography>
              Our support team is here to assist you. Feel free to contact us
              for any queries.
            </Typography>
          </Box>
        </Box>

        <Box className="radio-help-info">
          <Box className="radio-help-item">
            <PhoneInTalkIcon />
            <Typography>+92 300 1234567</Typography>
          </Box>

          <Box className="radio-help-item">
            <MailOutlineIcon />
            <Typography>info@medicare.com</Typography>
          </Box>

          <Box className="radio-help-item">
            <LocationOnIcon />
            <Typography>123, Health Street, Islamabad, Pakistan</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
