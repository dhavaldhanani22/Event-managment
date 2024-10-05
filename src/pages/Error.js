import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

import auth from "routing/auth";

export default function Error() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (auth.idLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={handleSubmit}>
              Back Home
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
