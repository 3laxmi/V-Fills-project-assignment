import { Box, Typography, Grid, Link as Button } from "@mui/material";
import Arrow from "../assets/Arrow.png";
import Vector5 from "../assets/Vector5.png";
import C1 from "../assets/C1.png"; 
import C2 from "../assets/C2.png"; 
import C3 from "../assets/C3.png"; 
import C4 from "../assets/C4.png";
import C5 from "../assets/C5.png"; 

export default function FilmProduction() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FAEDE3",
        position: "relative",
        overflow: "hidden",
        px: { xs: 1, md: 6 }
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
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    style={{ marginRight: 6, verticalAlign: "middle" }}
  >
    <path
      d="M14 18l-6-6 6-6"
      stroke="#e08018"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  Back
</Button>

    
     
      <Box sx={{ pt: { xs: 6, md: 6 }, mb: 1, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            fontSize: { xs: "1.14rem", md: "1.35rem" },
            color: "#252729",
            mb: 1
          }}
        >
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
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
      

     
      <Grid container spacing={0} alignItems="flex-start" justifyContent="center" sx={{ mt: 1 }}>
       
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
          <Box
            sx={{
              mt: { xs: 1, md: 2 },
              mb: { xs: 2, md: 0 },
              minWidth: { xs: 220, md: 260 },
              maxWidth: { xs: 350, md: 340 },
              position: "relative",
              background: "#fff",
              borderRadius: 2,
              boxShadow: 5,
              border: "2px solid #caeafe"
            }}
          >
            <Box
              component="img"
              src={C5}
              alt="Film Camera Photo"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 1
              }}
            />
            <Typography
              sx={{
                color: "#1A3365",
                fontFamily: "Georgia, serif",
                fontSize: "1.09rem",
                textAlign: "center",
                pt: 1.1,
                pb: 1
              }}
            >
              Film Production
            </Typography>
          </Box>
        </Grid>
   
        <Grid item xs={12} md={7} sx={{ pl: { md: 6 } }}>
          <Box
            sx={{
              mt: { xs: 2, md: 2 }
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", md: "1.19rem" },
                color: "#212121",
                fontFamily: "'Georgia', serif",
                fontWeight: 400
              }}
            >
              Who says films are just an escape? <br />
              We see them as a way to live many lives – to feel, to explore, and to tell stories that stay. <br />
              And with each film, we carry new memories and new reasons to keep creating.<br />
              V crafts:
            </Typography>
          
            <Box component="ul" sx={{ pl: 2, mt: 2, fontSize: "1.12rem", fontFamily: "'Georgia', serif" }}>
              <li><span style={{ color: "#1A3365" }}>Documentaries</span></li>
              <li><span style={{ color: "#1A3365" }}>Corporate Videos</span></li>
              <li><span style={{ color: "#1A3365" }}>2D Animation Videos</span></li>
              <li><span style={{ color: "#1A3365" }}>3D Animation Videos</span></li>
            </Box>
         
            <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: "1.09rem",
                  color: "#222",
                  fontWeight: 500,
                  fontFamily: "'Georgia', serif"
                }}
              >
                Explore Now
              </Typography>
              <Box
                component="img"
                src={Arrow}
                alt="Arrow"
                sx={{
                  ml: 1,
                  width: 42,
                  height: 19
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

  
      <Box
        component="img"
        src={C1}
        alt=""
        sx={{
          position: "absolute",
          top: { xs: 70, md: 68 },
          right: { xs: 29, md: 56 },
          width: { xs: 65, md: 92 },
          opacity: 0.86,
          zIndex: 0
        }}
      />
     

        <Box
        component="img"
        src={C2}
        alt="Decorative Camera Element"
        sx={{
          position: "absolute",
          top: { xs: 120, sm: 150, md: 180, lg: 191, xl: 200 },
          right: { xs: 16, sm: 40, md: 60, lg: 80, xl: 100 },
          width: { xs: 50, sm: 75, md: 95, lg: 115, xl: 130 },
          opacity: 1,
          objectFit: "contain",
          maxWidth: "100%",
          height: "auto",
          zIndex: 2,
        }}
      />
   
      <Box
        component="img"
        src={C3}
        alt=""
        sx={{
          position: "absolute",
          right: { xs: 40, md: 77 },
          bottom: { xs: 22, md: 24 },
          width: { xs: 47, md: 66 },
          opacity: 0.79
        }}
      />
  
       <Box
        component="img"
        src={C4}
        alt=""
        sx={{
          position: "absolute",
          left: { xs: 40, md: 77 },
          bottom: { xs: 22, md: 24 },
          width: { xs: 47, md: 66 },
          opacity: 0.79
        }}
      />
      
    </Box>
  );
}

