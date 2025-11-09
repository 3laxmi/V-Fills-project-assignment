import { Box, Typography } from "@mui/material";
import cam from "../assets/Cam .png";
import portfolio from "../assets/portfolio.png";
import FooterVector from "../assets/Footer Vector.png";

export default function Portfolio() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#FAEDE3",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Box
        component="img"
        src={cam}
        alt="Camera Illustration"
        sx={{
          position: "absolute",
          top: { xs: 20, md: 36 },
          left: { xs: 12, md: 36 },
          width: { xs: 75, md: 128 },
          zIndex: 1,
          opacity: 0.95
        }}
      />


      <Box
        component="img"
        src={FooterVector}
        alt="Footer Decoration"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: 90, md: 180 },
          opacity: 0.83,
          zIndex: 1
        }}
      />


      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 7, md: 9 }
        }}
      >


        <Typography
          variant="h5"
          sx={{
            color: "#252729",
            fontWeight: 500,
            letterSpacing: 1,
            mb: 0.5,
            textAlign: "center",
            fontFamily: "'Georgia', serif"
          }}
        >
          The Highlight Reel
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#222",
            mb: { xs: 4, md: 5 },
            textAlign: "center"
          }}
        >
          Watch the magic we've captured.
        </Typography>


        <Box
          sx={{
            position: "relative",
            width: { xs: 320, sm: 420, md: 620 },
            height: { xs: 180, sm: 220, md: 350 },
            mb: { xs: 0, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          <Box
            component="img"
            src={portfolio}
            alt="Portfolio Filmstrip"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 3,
              boxShadow: 4,
              zIndex: 2
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
