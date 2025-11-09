import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useNavigate } from "react-router-dom";


const ICON_SIZE = { xs: 36, md: 42 };


function TwoHorizontalLinesIcon({ onClick }) {
  return (
    <Box
      sx={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "6px", md: "8px" },
        cursor: "pointer",
        ml: { xs: 1, md: 2 }
      }}
      onClick={onClick}
      aria-label="Open navigation menu"
    >
      <svg width="100%" height="8" viewBox="0 0 40 8">
        <rect width="40" height="6" rx="3" fill="#1A3365" />
      </svg>
      <svg width="100%" height="8" viewBox="0 0 40 8">
        <rect width="40" height="6" rx="3" fill="#1A3365" />
      </svg>
    </Box>
  );
}

function CrossIcon({ onClick }) {
  return (
    <Box
      sx={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ml: { xs: 1, md: 2 }
      }}
      onClick={onClick}
      aria-label="Close navigation menu"
    >
      <svg width="100%" height="100%" viewBox="0 0 36 36">
        <line x1="8" y1="8" x2="28" y2="28" stroke="#1A3365" strokeWidth="4" strokeLinecap="round" />
        <line x1="28" y1="8" x2="8" y2="28" stroke="#1A3365" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </Box>
  );
}


function MinimalNavbar({ onMenuClick }) {
  return (
    <Box
      component="nav"
      sx={{
         position: "fixed", 
         left: 0,
    right: 0,
    top: 0,
        width: "100vw",
        bgcolor: "#FAEDE3",
        minHeight: { xs: "50px", md: "60px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 6 },
        py: 1,
        position: "relative",
        zIndex: 1000,
        boxSizing: "border-box"
      }}
    >

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          component="span"
          sx={{
            fontSize: { xs: "1.3rem", md: "1.7rem" },
            lineHeight: 1.07,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box component="span" sx={{ color: "#f28c28" }}>V</Box>
          <Box component="span" sx={{ color: "#333" }}>Films</Box>
        </Typography>
      </Box>
      <TwoHorizontalLinesIcon onClick={onMenuClick} />
    </Box>
  );
}
function FullNavbar({ onClose }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      sx={{
        width: "100vw",
        bgcolor: "#FAEDE3",
        py: { xs: 1.5, md: 2 },
        px: { xs: 2, md: 0 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1100,
        minHeight: { xs: "64px", md: "82px" }
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.2, md: 4 } }}>
        <Button
          sx={{
            color: "#1A3365",
            fontWeight: 400,
            fontSize: "1.13rem",
            textTransform: "none"
          }}
          component={Link}
          to="/services"
        >
          Services
        </Button>
        <Button
          sx={{
            color: "#1A3365",
            fontWeight: 400,
            fontSize: "1.13rem",
            textTransform: "none"
          }}
          component={Link}
          to="/team"
        >
          Their Stories
        </Button>
        <Button
          sx={{
            color: "#1A3365",
            fontWeight: 400,
            fontSize: "1.13rem",
            textTransform: "none"
          }}
          component={Link}
          to="/about"
        >
          Our Story
        </Button>
        <Button
          component={Link}
          to="/"
          sx={{
            color: "#1A3365",
            fontWeight: 400,
            fontSize: "1.13rem",
            textTransform: "none"
          }}
        >
          Varnan
        </Button>
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{
            bgcolor: "#fa6a1f",
            color: "#fff",
            borderRadius: "24px",
            px: 3,
            fontWeight: 500,
            fontSize: "1.1rem",
            ml: 1,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": { bgcolor: "#e08018" }
          }}
          component={Link}
          to="/contact"
        >
          Let&apos;s Talk
        </Button>
        <CrossIcon onClick={onClose} />
      </Box>
    </Box>
  );
}

export default function DualNavbar() {
  const [showFull, setShowFull] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setShowFull(false);
  }, [location.pathname]);


  return (
    <>
      {!showFull && <MinimalNavbar onMenuClick={() => setShowFull(true)} />}
      {showFull && <FullNavbar onClose={() => setShowFull(false)} />}
    </>
  );
}
