
import Link from "next/link";
import { Box, Typography } from "@mui/material";

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
     Home
  </Typography>
</Link>

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
     About Us
  </Typography>
</Link>

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
     Contact
  </Typography>
</Link>

          </Box>
        </Box>

        {/* Services */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>
            Our Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              color: "#d7e4ff",
            }}
          >
            <Typography>Cardiology</Typography>
            <Typography>Neurology</Typography>
            <Typography>Orthopedics</Typography>
            <Typography>Pediatrics</Typography>
            <Typography>Emergency Care</Typography>
          </Box>
        </Box>

        {/* Contact */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2,}}>   
  
            Contact Info
          </Typography>

          <Typography sx={{ color: "#d7e4ff", mb: 1.5 }}>
            📞 +92 316 7415051
          </Typography>

          <Typography sx={{ color: "#d7e4ff", mb: 1.5 }}>
            ✉️ info@medicare.com
          </Typography>

          <Typography sx={{ color: "#d7e4ff", mb: 3 }}>
            📍 123, Health Street, Islamabad, Pakistan
          </Typography>

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
      </Box>

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