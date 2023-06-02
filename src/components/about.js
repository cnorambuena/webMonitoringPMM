import React from "react";
import { Box, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";

export default function SquareCard() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={900}
      height={500}
      borderRadius={20}
      bgcolor="#2074d4" // Color de fondo actualizado
      color="primary.contrastText"
      p={2}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Image sx={{ fontSize: 100 }} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum mauris quis felis tincidunt, a convallis elit tempor.
          Maecenas ullamcorper tellus et lorem tincidunt dignissim.
        </Typography>
      </Box>
    </Box>
  );
}
