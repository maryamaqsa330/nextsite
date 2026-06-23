
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Footer() {
  const linkStyle = {
    color: "#d7e4ff",
    transition: "0.3s",
    cursor: "pointer",
    fontSize: "15px",
    "&:hover": { color: "#fff" },
  };

  const headingStyle = {
    fontWeight: 700,
    mb: 2,
    fontSize: "20px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(135deg,#031b44,#052b68)",
        color: "#fff",
        pt: { xs: "45px", md: "60px" },
        pb: 0,
        px: { xs: "20px", md: "60px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1800px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1.4fr 1fr 1fr 1.2fr",
          },
          gap: { xs: "35px", md: "45px" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Logo */}
        <Box>
          <Box
            component="img"
            src="/upload/white-logo.png"
            alt="MediCare Logo"
            sx={{
              width: { xs: "180px", md: "220px" },
              maxWidth: "100%",
              height: "auto",
              mb: 2,
            }}
          />

          <Typography
            sx={{
              color: "#d7e4ff",
              lineHeight: "28px",
              fontSize: "15px",
              maxWidth: "360px",
              mx: { xs: "auto", sm: 0 },
            }}
          >
            MediCare is dedicated to providing exceptional healthcare services
            with compassion and excellence.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography sx={headingStyle}>Quick Links</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Home</Typography>
            </Link>

            <Link href="/about" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>About</Typography>
            </Link>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Contact</Typography>
            </Link>

            <Link href="/doctor" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Doctors</Typography>
            </Link>

            <Link href="/why-choose-us" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Why choose us</Typography>
            </Link>
          </Box>
        </Box>

        {/* Services */}
        <Box>
          <Typography sx={headingStyle}>Services</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/services/general-consultation" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>General Consultation</Typography>
            </Link>

            <Link href="/services/radiology" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Radiology</Typography>
            </Link>

            <Link href="/services/cardiology" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Cardiology</Typography>
            </Link>

            <Link href="/services/neurology" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Neurology</Typography>
            </Link>

            <Link href="/services/laboratory-services" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Laboratory Service</Typography>
            </Link>

            <Link href="/services/pulmonology" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Pulmonology</Typography>
            </Link>

            <Link href="/services/vaccination" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Vaccination</Typography>
            </Link>

            <Link href="/services/emergency-care" style={{ textDecoration: "none" }}>
              <Typography sx={linkStyle}>Emergency Care</Typography>
            </Link>
          </Box>
        </Box>

        {/* Contact */}
        <Box>
          <Typography sx={headingStyle}>Contact Info</Typography>

          <Link href="tel:+923167415051" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "flex-start" }, gap: 1.5, mb: 1.5 }}>
              <PhoneOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
              <Typography sx={linkStyle}>+92 316 7415051</Typography>
            </Box>
          </Link>

          <Link href="mailto:info@medicare.com" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "flex-start" }, gap: 1.5, mb: 1.5 }}>
              <EmailOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
              <Typography sx={linkStyle}>info@medicare.com</Typography>
            </Box>
          </Link>

          <Link href="https://maps.google.com" target="_blank" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: { xs: "center", sm: "flex-start" }, gap: 1.5, mb: 3 }}>
              <LocationOnOutlinedIcon sx={{ color: "#fff", fontSize: 20, mt: "2px" }} />
              <Typography sx={linkStyle}>Bahria Town, Pakistan</Typography>
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            {["F", "T", "IN", "IG"].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#0d5bd7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          mt: 5,
          py: 3,
          textAlign: "center",
          color: "#d7e4ff",
          fontSize: { xs: "13px", md: "16px" },
        }}
      >
        © 2024 MediCare. All rights reserved.
      </Box>
    </Box>
  );
}