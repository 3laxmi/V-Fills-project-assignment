import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import door from "../assets/door.png";
import content from "../assets/content.png";
import people from "../assets/people.png";

export default function Team() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

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
        sx={{
          display: "flex",
          flexDirection: isSmall ? "column" : "row",
          alignItems: isSmall ? "stretch" : "flex-start",
          justifyContent: isSmall ? "center" : "space-between",
          width: "100%",
          pt: { xs: 2, md: 5 },
          px: { xs: 1, md: 6 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 2,
            width: { xs: "100%", md: "30%" },
            minWidth: { md: 365 }
          }}
        >
          <Box
            component="img"
            src={content}
            alt="Sticky Note"
            sx={{
              width: { xs: 220, md: 280 },
              maxWidth: "98vw",
              mb: { xs: 2, md: 0 },
              mt: { xs: 0, md: 0 },
              boxShadow: 1,
              borderRadius: 2,
              transform: { xs: "none", md: "rotate(-10deg)" }
            }}
          />
          <Typography
            sx={{
              mt: { xs: 0.5, md: 5 },
              ml: { xs: 0, md: 3 },
              color: "#2c3954",
              fontFamily: "cursive",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Branding Experts
          </Typography>
          <Box
            component="img"
            src={door}
            alt="India Gate"
            sx={{
              width: { xs: 120, md: 160 },
              mt: { xs: 2, md: 4 },
              background: "#FAEDE3",
              borderRadius: 2,
              boxShadow: 1
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            minWidth: { md: 420 },
            pt: { xs: 2, md: 0 }
          }}
        >
          <Box sx={{
            position: "absolute",
            left: { xs: "18%", md: "25%" },
            top: "-32px",
            display: { xs: "none", md: "block" },
            fontFamily: "cursive",
            fontSize: "1.1rem",
            color: "#1A3365"
          }}>
            Film Makers
          </Box>
          <Box sx={{
            position: "absolute",
            right: { xs: "16%", md: "18%" },
            top: "-32px",
            display: { xs: "none", md: "block" },
            fontFamily: "cursive",
            fontSize: "1.1rem",
            color: "#1A3365"
          }}>
            Art Curators
          </Box>
          <Box
            component="img"
            src={people}
            alt="Team Silhouette"
            sx={{
              width: { xs: "95vw", md: 400, lg: 475 },
              maxWidth: 600,
              mt: { xs: 3, md: 0 },
              border: "2px solid #A2B6C6",
              bgcolor: "#FAEDE3",
              borderRadius: 2,
              boxShadow: 1
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: 6, md: 7 }
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Halant', serif",
            fontWeight: 400,
            fontSize: { xs: "1.3rem", sm: "2rem", md: "2.3rem" },
            color: "#252729",
            border: "2px solid #57BC68",
            borderRadius: 2,
            px: { xs: 2, md: 4 },
            py: 1,
            bgcolor: "#FAEDE3",
            mb: { xs: 2, md: 3 },
            textAlign: "center"
          }}
        >
          Take a closer look at the stories V bring to life.
        </Typography>
      <Button
  component={Link}
  to="/portfolio"
  variant="contained"
  sx={{
    bgcolor: "#fa6a1f",
    borderRadius: "24px",
    fontWeight: 500,
    px: 3,
    py: 1.0,
    textTransform: "none",
    fontSize: { xs: "1rem", md: "1.1rem" },
    "&:hover": { bgcolor: "#e08018" }
  }}
>
  View Portfolio
</Button>
      </Box>
    </Box>
  );
}
