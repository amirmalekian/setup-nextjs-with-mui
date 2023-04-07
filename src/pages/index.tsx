import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center" }}>
        <Typography gutterBottom>
          سلام سلام ،‌ امیدوارم حالتون خوب باشه
        </Typography>
      </Box>
    </Container>
  );
}
