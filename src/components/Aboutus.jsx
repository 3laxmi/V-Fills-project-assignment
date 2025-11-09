import { Box, Typography, Grid } from "@mui/material";
import o1 from "../assets/o1.png";
import o2 from "../assets/o2.png";
import o3 from "../assets/o3.png";
import o4 from "../assets/o4.png";
import o6 from "../assets/o6.png";

export default function AboutUs() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FAEDE3",
        position: "relative",
        overflow: "hidden",
        px: { xs: 1, sm: 4, md: 10 },
        pt: { xs: 3, md: 5 }
      }}
    >

      <Box
        component="img"
        src={o2}
        alt="Arc"
        sx={{
          position: "absolute",
          bottom: { xs: "20px", md: "50px" },
          right: { xs: "50px", md: "100px" },
          width: { xs: "165px", sm: "300px", md: "360px" },
          opacity: 0.33,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />


      <Grid container spacing={0} alignItems="flex-start">

        <Grid item xs={12} md={6} sx={{ pt: 8, pb: 5, pl: { md: 2 } }}>

          <Typography
            sx={{
              fontFamily: "'Patrick Hand', cursive, 'Comic Sans MS', cursive",
              fontWeight: 400,
              fontSize: { xs: "1.45rem", sm: "2rem", md: "2.38rem" },
              color: "#283B6B",
              lineHeight: 1.18,
              mb: 5,
            }}
          >
            Every project is more than just a brief -<br />
            it's a new chapter waiting to be written.<br />
            Together, we've crafted tales that inspire,<br />
            connect, and endure.
          </Typography>


          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontWeight: 500,
              fontSize: { xs: "1.5rem", md: "2.18rem" },
              color: "#252729",
              mb: 3,
              zIndex: 2,
              position: "relative"
            }}
          >
            A montage of familiar faces and names.
          </Typography>

          <Typography
            sx={{
              color: "#313132",
              fontFamily: "'Georgia', serif",
              fontWeight: 400,
              mb: 3,
              fontSize: { xs: "1rem", md: "1.22rem" },
              lineHeight: 1.62,
              zIndex: 2,
              position: "relative"
            }}
          >
            Some stories come from the biggest names.<br />
            Others begin with bold, rising voices.<br />
            We've been fortunate to walk alongside both –
            listening, creating, and building stories that matter.
          </Typography>

          <Box
  sx={{
    width: "100%",
    display: "flex",
    gap: "10px",
    mt: 4,
    mb: 1,
    justifyContent: { xs: "center", md: "flex-start" }
  }}
>
  <Box
    component="img"
    src={o3}
    alt="Projects"
    sx={{
      width: "235px",
      height: "233px",
      opacity: 1,
      transform: "rotate(-10deg)",
      p: "48px 51px",
      objectFit: "contain"
    }}
  />
  <Box
    component="img"
    src={o4}
    alt="Happy Clients"
    sx={{
      width: "256px",
      height: "233px",
      opacity: 1,
      transform: "rotate(-10deg)",
      p: "48px 51px",
      objectFit: "contain"
    }}
  />
  <Box
    component="img"
    src={o6}
    alt="Experts Team"
    sx={{
      width: "254px",
      height: "233px",
      opacity: 1,
      transform: "rotate(-10deg)",
      p: "48px 51px",
      objectFit: "contain"
    }}
  />
</Box>

        </Grid>
      </Grid>
      <Box
        component="img"
        src={o1}
        alt="Bottom Mountain"
        sx={{
          position: "absolute",
          bottom: { xs: "-10px", md: "-4px" },
          right: { xs: "5vw", md: "7vw" },
          width: { xs: "160px", sm: "270px", md: "378px" },
          zIndex: 3,
        }}
      />
    </Box>
  );
}
