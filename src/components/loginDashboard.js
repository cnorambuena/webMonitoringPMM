import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import '../assets/css/LogIn.css';


export default function Login() {

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            borderRadius: 1,
            bgcolor: '#2074d4',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          <AccountCircleIcon sx={{ fontSize: '4rem', mb: 1 }} />
          <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
            Iniciar sesión
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label={<span className="white-text">Usuario</span>}
              name="username"
              autoComplete="username"
              autoFocus
              InputLabelProps={{
                className: 'white-text',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={<span className="white-text">Contraseña</span>}
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                className: 'white-text',
              }}
            />
            <Link to="/metrics" style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesión
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
