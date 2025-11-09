
import { Box, Typography, Grid, Link as Button } from "@mui/material";
import Arrow from "../assets/Arrow.png";
import Vector5 from "../assets/Vector5.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";

export default function Branding() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FAEDE3",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Button
        href="/services"
        variant="outlined"
        sx={{
          position: "absolute",
          top: 73,
          left: 34,
          zIndex: 12,
          display: "flex",
          alignItems: "center",
          color: "#e08018",
          borderColor: "#e08018",
          borderRadius: "40px",
          fontWeight: 500,
          fontSize: "1rem",
          px: 2.7,
          py: 0.5,
          minWidth: "unset",
          textTransform: "none",
          gap: 1,
          background: "none",
          '&:hover': {
            borderColor: "#fa6a1f",
            color: "#fa6a1f",
            background: "transparent"
          }
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6, verticalAlign: "middle" }}>
          <path d="M14 18l-6-6 6-6" stroke="#e08018" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </Button>


      <Box sx={{ pt: 4, mb: 0, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            fontSize: { xs: "1.10rem", md: "1.28rem" },
            color: "#252729",
            mb: 1.3
          }}
        >
          A brand is a voice, and a product is a souvenir." – Lisa Gansky
        </Typography>
        <Box
          component="img"
          src={Vector5}
          alt="Decorative Brush Vector"
          sx={{
            width: { xs: "70vw", md: 330 },
            minWidth: 180,
            maxWidth: 480,
            mt: 1,
            mb: -1,
            mx: "auto",
            display: "block"
          }}
        />
      </Box>




      <Grid
        item
        xs={12}
        md={8}
        sx={{
          px: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mt: { xs: 0, md: 10 },
            mb: { xs: 2, md: 0 },
            ml: { xs: 0, md: "550px" },
            mr: { xs: 0, md: "0px" },
            width: { xs: "100%", md: "92%" },
            maxWidth: 600,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.17rem", md: "1.22rem" },
              color: "#252729",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              mb: 1,
              lineHeight: 1.40,
              textAlign: "left"
            }}
          >
            A brand isn’t just what you see – it’s what you remember, what you carry home, and what you trust.<br />
            We shape brands that people remember, return to, and fall in love with.<br />
            V creates:
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 3,
              mt: 0.5,
              mb: 0,
              color: "#252729",
              fontSize: { xs: "1.17rem", md: "1.22rem" },
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              textAlign: "left"
            }}
          >
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </Box>
        </Box>
      </Grid>


      <Box
        component="img"
        src={b5}
        alt=""
        sx={{
          position: "absolute",
          top: "130.37px",
          left: "150.3px",
          width: "429.4px",
          height: "400.08px",
          opacity: 1,
          p: "11.4px 9.5px",
          zIndex: 2
        }}
      />

      <Box
        component="img"
        src={b2}
        alt=""
        sx={{
          position: "absolute",
          top: "191px",
          right: "100px",
          width: "130px",
          height: "130px",
          opacity: 1,
          zIndex: 3
        }}
      />

      <Box
        component="img"
        src={b4}
        alt=""
        sx={{
          position: "absolute",
          top: "400px",
          left: "50px",
          width: "110px",
          height: "110px",
          opacity: 1,
          zIndex: 4
        }}
      />

      <Box
        component="img"
        src={b3}
        alt=""
        sx={{
          position: "absolute",
          top: "505.47px",
          right: "100.25px",
          width: "165px",
          height: "165px",
          opacity: 1,
          zIndex: 5
        }}
      />

      <Box
        component="img"
        src={b1}
        alt=""
        sx={{
          position: "absolute",
          top: "250px",
          right: "500px",
          width: "113px",
          height: "113px",
          opacity: 1,
          zIndex: 6
        }}
      />


      <Box
        sx={{
          mt: 2.5,
          width: { xs: "100%", md: "690px" },
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          pl: { xs: 2, md: 30 }
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#222",
            fontWeight: 500,
            fontFamily: "'Georgia', serif",
            mr: 1
          }}
        >
          Explore Now
        </Typography>
        <Box
          component="img"
          src={Arrow}
          alt="Arrow"
          sx={{
            width: 46,
            height: 18,
            mt: 0.5
          }}
        />
      </Box>
    </Box>
  );
}
