
import { Box, Grid, Typography, Paper } from "@mui/material";
import mandala1 from "../assets/mandala1.png";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "#FAEDE3",
        position: "relative",
        overflow: "hidden",
        mx: 0,
        px: 0
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{
          width: "100%",
          m: 0,
          px: { xs: 3, md: 8 },
          pt: { xs: 6, md: 12 },
          pb: { xs: 6, md: 10 }
        }}
      >
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ position: "relative", width: { xs: 220, md: 350 }, height: { xs: 220, md: 350 } }}>
            <img
              src={mandala1}
              alt="Decorative mandala pattern"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.25,
                objectFit: "contain"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: { xs: 12, md: 40 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                component="span"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "4rem" },
                  lineHeight: 1.07,
                }}
              >
                <Box component="span" sx={{ color: "#f28c28" }}>V</Box>
                <Box component="span" sx={{ color: "#333" }}>Films</Box>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            textAlign: "center",
            pt: { xs: 4, md: 10 }
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Island Moments', cursive",
              fontWeight: 400,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "6rem" },
              lineHeight: 1,
              letterSpacing: 0,
              color: "#0F3255",
              textAlign: { xs: "center", md: "left" },
              width: { xs: "100%", sm: 420, md: 700, lg: 825 },
              maxWidth: "100%",
              opacity: 1
            }}
          >
            Varnan is where stories find their voice and form
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Halant', serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "1.35rem", sm: "1.8rem", md: "2.2rem", lg: "2.5rem" },
              lineHeight: 1,
              letterSpacing: 0,
              color: "#F15D2B",
              textAlign: { xs: "center", md: "left" },
              width: "auto",
              whiteSpace: "nowrap",
              display: "inline-block",
              opacity: 1,
              mt: { xs: 2, md: 4 },
              ml: { xs: 0, md: 8, lg: 18 }
            }}
          >
            Films &nbsp; . &nbsp; Brands &nbsp; . &nbsp; Art
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Halant', serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.18rem", md: "1.25rem", lg: "1.34rem" },
              color: "#232323",
              lineHeight: 1.6,
              letterSpacing: 0,
              textAlign: { xs: "center", md: "left" },
              width: { xs: "100%", sm: 360, md: 480, lg: 650 },
              maxWidth: "100%",
              opacity: 1,
              mt: { xs: 2, md: 3 }
            }}
          >

            Since 2009, V've been telling stories – stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. But every story starts the same way – by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters. V doesn't just tell stories – V honors them.
          </Typography>

        </Grid>




      </Grid>

    </Box>
  );
}
