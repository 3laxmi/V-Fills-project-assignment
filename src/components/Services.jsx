import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Vector5 from "../assets/Vector5.png";
import Frame1 from "../assets/Frame 1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import tap1 from "../assets/tap1.png";
import tap2 from "../assets/tap2.png";
import tap3 from "../assets/tap3.png";
import mandla2 from "../assets/mandla2.png";

export default function Services() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FAEDE3",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          pt: { xs: 3, md: 6 },
          px: { xs: 2, md: 8 },
          pb: 2,
          textAlign: "center",
          position: "relative"
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontWeight: 500,
            fontSize: { xs: "1.13rem", md: "1.6rem" },
            color: "#252729",
            mb: 0.3
          }}
        >
          The storyboard reveals the breadth of our craft.
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
        container
        spacing={0}
        justifyContent="center"
        alignItems="flex-end"
        sx={{ mt: { xs: 2, md: 4 }, pb: 5 }}
      >
        <Grid item xs={12} md={4}>
          <Link to="/services/film-production" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <Box sx={{ position: "relative", mb: 1 }}>
                <Box
                  component="img"
                  src={tap1}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: -36,
                    left: 32,
                    width: 127,
                    zIndex: 2
                  }}
                />
                <Box
                  component="img"
                  src={Frame1}
                  alt="Film Production"
                  sx={{
                    width: { xs: 210, md: 242 },
                    borderRadius: 3,
                    boxShadow: 4,
                    transform: "rotate(-7deg)"
                  }}
                />
              </Box>
              <Typography sx={{
                mt: 2,
                fontFamily: "Georgia, serif",
                color: "#252729",
                fontWeight: 500,
                fontSize: "1.13rem"
              }}>
                Film Production
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/services/branding" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <Box sx={{ position: "relative", mb: 1 }}>
                <Box
                  component="img"
                  src={tap2}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: -35,
                    left: 50,
                    width: 128,
                    zIndex: 2
                  }}
                />
                <Box
                  component="img"
                  src={Frame2}
                  alt="Branding"
                  sx={{
                    width: { xs: 210, md: 242 },
                    borderRadius: 3,
                    boxShadow: 4,
                    transform: "rotate(2deg)"
                  }}
                />
              </Box>
              <Typography sx={{
                mt: 2,
                fontFamily: "Georgia, serif",
                color: "#252729",
                fontWeight: 500,
                fontSize: "1.13rem"
              }}>
                Branding
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/services/art-curation" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <Box sx={{ position: "relative", mb: 1 }}>
                <Box
                  component="img"
                  src={tap3}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: -35,
                    left: 32,
                    width: 110,
                    zIndex: 2
                  }}
                />
                <Box
                  component="img"
                  src={Frame3}
                  alt="Art Curation"
                  sx={{
                    width: { xs: 210, md: 242 },
                    borderRadius: 3,
                    boxShadow: 4,
                    transform: "rotate(6deg)"
                  }}
                />
              </Box>
              <Typography sx={{
                mt: 2,
                fontFamily: "Georgia, serif",
                color: "#252729",
                fontWeight: 500,
                fontSize: "1.13rem"
              }}>
                Art Curation
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
      <Box
        component="img"
        src={mandla2}
        alt="Mandala Border Decoration"
        sx={{
          width: "100vw",
          position: "absolute",
          left: 0,
          bottom: -100,
          pointerEvents: "none",
          userSelect: "none"
        }}
      />
    </Box>
  );
}
