import { Box, Typography, Grid, Link as Button} from "@mui/material";
import Arrow from "../assets/Arrow.png";
import Vector5 from "../assets/Vector5.png";
import a1 from "../assets/a1.png"; 
import a2 from "../assets/a2.png"; 
import a3 from "../assets/a3.png"; 
import a4 from "../assets/a4.png"; 
import a5 from "../assets/a5.png"; 

export default function ArtCuration() {
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


  
      <Box sx={{ pt: 4, mb: 0, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            fontSize: { xs: "1.08rem", md: "1.23rem" },
            color: "#252729",
            mb: 1.3
          }}
        >
          "V take art where it belongs, to the people." – Vernita Verma
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
              <Box
                      component="img"
                      src={a1}
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
                    src={a3}
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
       Art isn’t meant to sit on distant walls – it's meant to breathe, to travel, to belong.<br />
              Through every festival, every performance, and every gathering, we help stories find their stage and their people.<br />
              V curates:
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
       <li>Art Festivals</li>
              <li>Live Performances</li>
              <li>Community Events</li>
              <li>Cultural Storytelling</li>
      
    </Box>
  </Box>
</Grid>

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
  <Box
        component="img"
        src={a2}
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
              src={a5}
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
             src={a4}
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
    </Box>
  );
}
