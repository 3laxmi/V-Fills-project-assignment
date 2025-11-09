import { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import mandla3 from "../assets/mandla3.png";
import mandla4 from "../assets/mandla4.png";

export default function Contactform() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
 
  function validateEmail(email) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async e => {
  e.preventDefault();
  setError("");
  setSuccess("");
  if (!form.name || !form.email || !form.phone || !form.message) {
    setError("All fields are required."); return;
  }
  if (!validateEmail(form.email)) {
    setError("Invalid email format."); return;
  }

  if (!/^\d{10}$/.test(form.phone)) {
    setError("Phone number must be 10 digits.");
    return;
  }
  try {
    const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", form);
    if (res.status === 200 || res.status === 201) {
  setSuccess("Form Submitted");
  setForm({ name: "", email: "", phone: "", message: "" }); 
} else {
  setError("Submission failed.");
}
  }

  catch {
    setError("Submission failed.");
   }
};

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
        component="img"
        src={mandla3}
        alt=""
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: { xs: 270, md: 340 },
          zIndex: 0,
          opacity: 1,
          pointerEvents: "none"
        }}
      />
      <Box
        component="img"
        src={mandla4}
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: 300, md: 370 },
          zIndex: 0,
          opacity: 1,
          pointerEvents: "none"
        }}
      />

      <Grid container sx={{ minHeight: "100vh", alignItems: "center", zIndex: 2, position: "relative" }}>
      
        <Grid item xs={12} md={6} sx={{ px: { xs: 2, md: 10 }, pt: { xs: 13, md: 0 } }}>
          <Box
            sx={{
              bgcolor: "transparent",
              border: "2px solid #e270c3",
              borderRadius: 2,
              p: 2.5,
              maxWidth: 460,
              mt: { xs: 0, md: 0 }
            }}
          >
            <Typography sx={{ color: "#21181d", fontSize: "1.065rem", fontFamily: "Georgia, serif" }}>
              Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br />
              Let's catch up over coffee.<br />
              Great stories always begin with a good conversation.
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6} sx={{ pt: { xs: 8, md: 0 }, px: { xs: 3, md: 0 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ mb: 1, textAlign: 'center', fontFamily: "Georgia, serif" }}>
            Join the Story
          </Typography>
          <Typography sx={{ textAlign: 'center', mb: 2 }}>
            Ready to bring your vision to life? Let’s talk.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 480 }}>
            <TextField fullWidth label="Your name" name="name" sx={{ mb: 2 }}   value={form.name} onChange={handleChange} />
            <TextField fullWidth label="Your email" name="email" sx={{ mb: 2 }}  value={form.email}   onChange={handleChange} />
            <TextField fullWidth label="Phone" name="phone" sx={{ mb: 2 }} value={form.phone} onChange={handleChange} />
            <TextField fullWidth label="Your message" name="message" sx={{ mb: 2 }}   value={form.message} onChange={handleChange} multiline minRows={3} />
            <Button type="submit" variant="contained" sx={{
              bgcolor: "#fa6a1f",
              borderRadius: "18px",
              fontWeight: 500,
              px: 4,
              minWidth: 118,
              "&:hover": { bgcolor: "#e08018" },
              display: "block",
              mx: "auto",
              my: 2
            }}>
              Submit
            </Button>
            {error &&
              <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>
            }
            {success &&
              <Typography color="success.main" sx={{ mt: 1 }}>{success}</Typography>
            }
          </Box>
          <Typography sx={{ mt: 3, textAlign: 'center', color: "#df4605", fontWeight: 500, fontFamily: "Georgia, serif" }}>
            vernita@varnanfilms.co.in &nbsp; | &nbsp; +91 98736 84567
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
