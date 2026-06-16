
"use client";

import { useState } from "react";
import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [serviceOpen, setServiceOpen] = useState(false);

const serviceLinks = [
  { title: "General Consultation", link: "/services/general-consultation" },
  { title: "Cardiology", link: "/services/cardiology" },
  { title: "Pulmonology", link: "/services/pulmonology" },
  { title: "Neurology", link: "/services/neurology" },
  { title: "Laboratory Services", link: "/services/laboratory-services" },
  { title: "Radiology", link: "/services/radiology" },
  { title: "Vaccination", link: "/services/vaccination" },
  { title: "Emergency Care", link: "/services/emergency-care" },
];


  return (
    <>
      <Box
        sx={{
           width: "100%",
          // p: { xs: "12px", md: "18px 20px" },
          // background: "#f4faff",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <Box
          sx={{
  width: "100%",
  maxWidth: "1800px",
  height: { xs: "60px", lg: "100px" },
  px: { xs: "16px", lg: "80px" },
  background: "#fff",
  boxShadow: "0 8px 30px rgba(13,91,216,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}}
        >
           <Link href="/home">
            <Box
              component="img"
              src="/upload/logo.png"
              alt="Logo"
              sx={{
                width: { xs: "140px", lg: "190px" },
                display: "block", padding:"12px"
              }}
            />
          </Link> 
          
          <Box
            component="ul"
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: "32px",
              listStyle: "none",
              m: 0,
              p: 0,
              "& a": {
                color: "#061b49",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
              },
              "& a:hover": {
                color: "#075bd8",
              },
            }}
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            

<li style={{ height: "100px", display: "flex", alignItems: "center" }}>
   <Box sx={{ position: "relative" }}>
<Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
  <Link href="/services" onClick={() => setServiceOpen(false)}>
    Services
  </Link>

  <Box
    onClick={() => setServiceOpen(!serviceOpen)}
    sx={{
      color: "#061b49",
      fontSize: "14px",
      fontWeight: 700,
      cursor: "pointer",
      lineHeight: 1,
      px: "4px",
    }}
  >
    ▾
  </Box>
</Box>

    {serviceOpen && (
      <Box
        sx={{
          position: "absolute",
          top: "38px",
          left: 0,
          width: "250px",
          background: "#fff",
          borderRadius: "0 0 12px 12px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
          padding: "10px 0",
          zIndex: 9999,
        }}
      >
        {serviceLinks.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            onClick={() => setServiceOpen(false)}
            style={{
              display: "block",
              padding: "12px 18px",
              color: "#061b49",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {item.title}
          </Link>
        ))}
      </Box>
    )}
  </Box>
</li>






















            <li><Link href="/doctor">Doctors</Link></li>
            {/* <li><Link href="/blog">Blog</Link></li> */}
            <li><Link href="/why-choose-us">Why choose us</Link></li>
             <li><Link href="/contact">Contact</Link></li>
          </Box>

          <Button
            sx={{
              display: { xs: "none", lg: "flex" },
              background: "#075bd8",
              color: "#fff",
              px: "24px",
              py: "11px",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 700,
              "&:hover": { bgcolor: "#2f5896" },
            }}
          >
            Book Appointment
          </Button>

          <Button
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", lg: "none" },
              minWidth: "44px",
              height: "44px",
              background: "#075bd8",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "24px",
              "&:hover": { bgcolor: "#336fc9" },
            }}
          >
            ☰
          </Button>
        </Box>
      </Box>

      <Box
        onClick={() => setOpen(false)}
        sx={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "0.3s",
          zIndex: 1000,
        }}
      />

      <Box
        sx={{
          position: "fixed",
  top: 0,
  left: 0,
  transform: open ? "translateX(0)" : "translateX(-100%)",
  width: { xs: "300px", sm: "500px" },
  height: "100vh",
  background: "#fff",
  zIndex: 1001,
  p: "35px 30px",
  transition: "0.3s ease",
  boxShadow: "8px 0 30px rgba(0,0,0,0.18)",
}}
      >
         { <Button
          
           onClick={() => setOpen(false)}
  sx={{
    position: "absolute",
  top: "30px",
right: "20px",
width: "74px",
height: "74px",
fontSize: "35px",
  p: 0,
  background: "#075bd8",
  color: "white",
  borderRadius: "50%",
 
}}
       > 
          ✕
        </Button> }

        { <Box component="img" src="/upload/logo.png" alt="Logo" sx={{  width: "300px",
    display: "block",
    mb: "50px",
   }} />  
 
}

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: "28px 0 0",
            m: 0,
            "& li": { mb: "45px" },
            "& a": {
              color: "#061b49",
              fontSize: "40px",
              fontWeight: 700,
              textDecoration: "none",
            },
          }}
        >
          
 {/* ============================== mobile menu ============================= */}
  <li>
  <Link href="/" onClick={() => setOpen(false)}>Home</Link>
</li>

<li>
  <Link href="/about" onClick={() => setOpen(false)}>About</Link>
</li> 


 {/* =================================== service ================================== */}
  <li>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Link href="/services" onClick={() => setOpen(false)}>
      Services
    </Link>

    <Box
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setServiceOpen(!serviceOpen);
      }}
      sx={{
        color: "#061b49",
        fontSize: "40px",
        fontWeight: 700,
        cursor: "pointer",
        px: "10px",
      }}
    >
      ▾
    </Box>
  </Box>

  {serviceOpen && (
    <Box sx={{ pl: "20px", pt: "20px" }}>
      {serviceLinks.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          onClick={() => {
            setOpen(false);
            setServiceOpen(false);
          }}
          style={{
            display: "block",
            color: "#061b49",
            fontSize: "28px",
            fontWeight: 600,
            textDecoration: "none",
            marginBottom: "30px",
          }}
        >
          {item.title}
        </Link>
      ))}
    </Box>
  )}
</li>
{/* ======================== right wala ============================ */}
{/* <Box
  onClick={() => setServiceOpen(false)}
  sx={{
    position: "fixed",
    inset: 0,
    visibility: open && serviceOpen ? "visible" : "hidden",
    background: "rgba(0,0,0,0.15)",
    zIndex: 1002,
  }}
>
  <Box
    onClick={(e) => e.stopPropagation()}
    sx={{
      position: "absolute",
      top: "120px",
      left: { xs: "300px", sm: "500px" },
      width: { xs: "260px", sm: "320px" },
      background: "#fff",
      borderRadius: "16px",
      p: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      transform: serviceOpen ? "translateX(0)" : "translateX(-30px)",
      opacity: serviceOpen ? 1 : 0,
      transition: "0.3s ease",
    }}
  >
    {serviceLinks.map((item) => (
      <Link
        key={item.title}
        href={item.link}
        onClick={() => {
          setOpen(false);
          setServiceOpen(false);
        }}
        style={{
          display: "block",
          padding: "12px 10px",
          color: "#061b49",
          fontSize: "18px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        {item.title}
      </Link>
    ))}
  </Box>
</Box>
</li>  */}
{/* ======================= other pages =========================== */}
<li>
  <Link href="/doctor" onClick={() => setOpen(false)}>Doctors</Link>
</li>

<li>
  <Link href="/why-choose-us" onClick={() => setOpen(false)}>Why choose us</Link>
</li>

<li>
  <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
</li>
        </Box>
      </Box>
 
</>
  );
}

