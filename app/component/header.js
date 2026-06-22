
// =================================== header 2 ==================================
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Box, Button } from "@mui/material";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const hideTimer = useRef(null);
  // ==================================================
const mobileServiceClicked = useRef(false);

const handleMobileServiceClick = (e) => {
  if (!mobileServiceClicked.current) {
    e.preventDefault();
    setServiceOpen(true);
    mobileServiceClicked.current = true;
  } else {
    setOpen(false);
    setServiceOpen(false);
    mobileServiceClicked.current = false;
  }
};


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

  const showDropdown = () => {
    clearTimeout(hideTimer.current);
    setServiceOpen(true);
  };

  const hideDropdown = () => {
    hideTimer.current = setTimeout(() => {
      setServiceOpen(false);
    }, 2500);
  };

  return (
    <>
      <Box sx={{ width: "100%", position: "sticky", top: 0, zIndex: 999 }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1800px",
            height: { xs: "70px", lg: "100px" },
            px: { xs: "16px", lg: "80px" },
            background: "#fff",
            boxShadow: "0 8px 30px rgba(13,91,216,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: "auto",
          }}
        >
          <Link href="/">
            <Box
              component="img"
              src="/upload/logo.png"
              alt="Logo"
              sx={{ width: { xs: "140px", lg: "150px" }, display: "block" }}
            />
          </Link>

          {/* Desktop Menu */}
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
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
              },
              "& a:hover": { color: "#075bd8" },
            }}
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>

            <li
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              style={{ height: "100px", display: "flex", alignItems: "center" }}
            >
              <Box sx={{ position: "relative" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Link href="/services">Services</Link>
                  <Box sx={{ color: "#061b49", fontSize: "14px" }}>▾</Box>
                </Box>

                {serviceOpen && (
                  <Box
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    sx={{
                      position: "absolute",
                      top: "40px",
                      left: 0,
                      width: "260px",
                      background: "#fff",
                      borderRadius: "0 0 14px 14px",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                      p: "10px 0",
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
            <li><Link href="/why-choose-us">Why choose us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </Box>

          <Button
            sx={{
              display: { xs: "none", lg: "flex" },
              background: "#075bd8",
              color: "#fff",
              px: "18px",
              py: "8px",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { bgcolor: "#2f5896" },
            }}
          >
            Book Appointment
          </Button>

          {/* Mobile Hamburger */}
          <Button
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", lg: "none" },
              minWidth: "56px",
              height: "44px",
              background: "#075bd8",
              color: "#fff",
              borderRadius: "43px",
              fontSize: "24px",
              "&:hover": { bgcolor: "#2f5896" },
            }}
          >
            ☰
          </Button>
        </Box>
      </Box>

      {/* Overlay */}
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

      {/* Mobile Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          
         width: { xs: "82%", sm: "420px" },
           height: "100vh",
           background: "#fff",
           zIndex: 1001,
          p: { xs: "28px 24px", sm: "35px 35px" },  
           transition: "0.3s ease",
           // right: 0,
      // transform: open ? "translateX(0)" : "translateX(100%)",         // boxShadow: "-8px 0 30px rgba(0,0,0,0.18)",
          left: 0,
 transform: open ? "translateX(0)" : "translateX(-100%)",
boxShadow: "8px 0 30px rgba(0,0,0,0.18)",
           overflowY: "auto",


        }}
      >
         {/* <Button
          onClick={() => setOpen(false)}
           sx={{
   position: "absolute",
    top: "18px",
    right: "18px",
    minWidth: "35px",
    width: "40px",
    height: "40px",
    fontSize: "18px",
    borderRadius: "80%",
    background: "#075bd8",
    color: "#fff",
  }}
        >
          ✕
        </Button>

        <Box component="img" src="/upload/logo.png" alt="Logo"   sx={{
     width: { xs: "180px", sm: "200px" },
    mt: "10px",
    mb: "25px",
  }}
   />  */}


<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "30px",
  }}
>
  <Box
    component="img"
    src="/upload/logo.png"
    alt="Logo"
    sx={{
      width: { xs: "140px", sm: "220px"  },
      display: "block",
    }}
  />

  <Button
    onClick={() => setOpen(false)}
    sx={{
      minWidth: "40px",
      width: "40px",
      height: "40px",
      fontSize: "18px",
      borderRadius: "50%",
      background: "#075bd8",
      color: "#fff",
      "&:hover": {
        background: "#2f5896",
      },
    }}
  >
    ✕
  </Button>
</Box>


        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
            "& li": { mb: "26px" },
            "& a": {
              color: "#061b49",
              fontSize: { xs: "24px", sm: "30px" },
              fontWeight: 700,
              textDecoration: "none",
            },
          }}
        >
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>

{/* ========================================================= */}
<li>
  <Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Link href="/services" onClick={handleMobileServiceClick}>
        Services
      </Link>

      <Box
        onClick={() => setServiceOpen(!serviceOpen)}
        sx={{ fontSize: "18px", fontWeight: 800, cursor: "pointer" }}
      >
        ▾
      </Box>
    </Box>

    {serviceOpen && (
      <Box sx={{ mt: "16px", pl: "18px" }}>
        {serviceLinks.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            onClick={() => {
              setOpen(false);
              setServiceOpen(false);
              mobileServiceClicked.current = false;
            }}
            style={{
              display: "block",
              fontSize: "17px",
              fontWeight: 600,
              padding: "9px 0",
              color: "#061b49",
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


          <li><Link href="/doctor" onClick={() => setOpen(false)}>Doctors</Link></li>
          <li><Link href="/why-choose-us" onClick={() => setOpen(false)}>Why choose us</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </Box>
      </Box>
    </>
  );
}
