
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export default function Footer() {
  return (
    <Box
      sx={{
          width:"100%",
        background: "linear-gradient(135deg,#031b44,#052b68)",
        color: "#fff",
        pt: "60px",
        pb: 0,
        px: { xs: "20px", md: "60px" },
      }}
    >
      <Box
        sx={{
             padding: "0 38px ",
          width:"100%",
          maxWidth: "1800px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1.4fr 1fr 1fr 1.2fr",
          },
          gap: "40px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Logo */}
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 800,
              mb: 2,
            }}
          >
            ✚ MediCare
          </Typography>

          <Typography
            sx={{
              color: "#d7e4ff",
              lineHeight: "28px",
              fontSize: "14px",
            }}
          >
            MediCare is dedicated to providing exceptional healthcare
            services with compassion and excellence.
          </Typography>
        </Box>

        {/* Pages */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>
            Quick Links
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {/* =============== home ================ */}
         <Link href="/" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      color: "#d7e4ff",
       transition: "0.3s",
       cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
      //   pl: "6px",
      },
    }}
  >
     Home
  </Typography>
</Link>
   {/* ====================== about ============================= */}
<Link href="/about" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      color: "#d7e4ff",
       transition: "0.3s",
       cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
      //   pl: "6px",
      },
    }}
  >
     About 
  </Typography>
</Link>
    {/* ========================= contact ============================== */}
<Link href="/contact" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      color: "#d7e4ff",
       transition: "0.3s",
       cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
      //   pl: "6px",
      },
    }}
  >
     Contact
  </Typography>
</Link>
    {/* ============================ doctor ========================= */}
<Link href="/doctor" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      color: "#d7e4ff",
       transition: "0.3s",
       cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
      //   pl: "6px",
      },
    }}
  >
     Doctors
  </Typography>
</Link>
    {/* ======================= why choose us ===================== */}
<Link href="/why-choose-us" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      color: "#d7e4ff",
       transition: "0.3s",
       cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
      //   pl: "6px",
      },
    }}
  >
     why choose us
  </Typography>
</Link>
     {/* ==================== contact =========================== */}
<Link href="/contact" style={{ textDecoration: "none" }}>
  <Typography
    sx={{
      color: "#d7e4ff",
       transition: "0.3s",
       cursor: "pointer",
      "&:hover": {
        color: "#ffffff",
      //   pl: "6px",
      },
    }}
  >
     Contact
  </Typography>
</Link>
          </Box>
        </Box>
        {/* Services */}
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 1,
  }}
>
  <Link href="/services/general-consultation" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      General Consultation
    </Typography>
  </Link>

  <Link href="/services/radiology" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Radiology
    </Typography>
  </Link>

  <Link href="/services/cardiology" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Cardiology
    </Typography>
  </Link>

  <Link href="/services/neurology" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Neurology
    </Typography>
  </Link>

  <Link href="/services/laboratory-services" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Laboratory Service
    </Typography>
  </Link>

  <Link href="/services/pulmonology" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Pulmonology
    </Typography>
  </Link>

  <Link href="/services/vaccination" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Vaccination
    </Typography>
  </Link>

  <Link href="/services/emergency-care" style={{ textDecoration: "none" }}>
    <Typography sx={{ color: "#d7e4ff", "&:hover": { color: "#fff" } }}>
      Emergency Care
    </Typography>
  </Link>
</Box>
        {/* Contact */}
  
<Box>
  <Typography sx={{ fontWeight: 700, mb: 2 }}>
    Contact Info
  </Typography>

  <Link href="tel:+923167415051" style={{ textDecoration: "none" }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
      <PhoneOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
      <Typography sx={{ color: "#d7e4ff" }}>
        +92 316 7415051
      </Typography>
    </Box>
  </Link>

  <Link href="mailto:info@medicare.com" style={{ textDecoration: "none" }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
      <EmailOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
      <Typography sx={{ color: "#d7e4ff" }}>
        info@medicare.com
      </Typography>
    </Box>
  </Link>

  <Link
    href="https://maps.google.com"
    target="_blank"
    style={{ textDecoration: "none" }}
  >
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 3 }}>
      <LocationOnOutlinedIcon sx={{ color: "#fff", fontSize: 20, mt: "2px" }} />
      <Typography sx={{ color: "#d7e4ff" }}>
        123, Health Street, Islamabad, Pakistan
      </Typography>
    </Box>
  </Link>

  <Box
    sx={{
      display: "flex",
      gap: 1.5,
      justifyContent: { xs: "center", md: "flex-start" },
    }}
  >
    {["F", "T", "IN", "IG"].map((item) => (
      <Box
        key={item}
        sx={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "#0d5bd7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        {item}
      </Box>
    ))}
  </Box>
</Box> 

























   <Box
    sx={{
      display: "flex",
      gap: 1.5,
      justifyContent: { xs: "center", md: "flex-start" },
    }}
  >
    {["F", "T", "IN", "IG"].map((item) => (
      <Box
        key={item}
        sx={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "#0d5bd7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        {item}
      </Box>
    ))}
  </Box>
</Box> 

         {/* <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {["F", "T", "IN", "IG"].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#0d5bd7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box> */}

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          mt: 5,
          py: 3,
          textAlign: "center",
          color: "#d7e4ff",
          fontSize: "14px",
        }}
      >
        © 2024 MediCare. All rights reserved.
      </Box>
    </Box>
  );
}