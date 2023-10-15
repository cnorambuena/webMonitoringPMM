import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Register() {
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
          <Typography component="h1" variant="h5">
            Registro de cuenta
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de usuario"
              name="username"
              autoComplete="username"
              autoFocus
              InputProps={{
                startAdornment: <AccountCircleIcon />,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              InputProps={{
                startAdornment: <EmailIcon />,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="new-password"
              InputProps={{
                startAdornment: <LockIcon />,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Typography
              variant="body2"
              color="white"
              sx={{ textAlign: 'center' }}
            >
              Por el momento no es posible registrar nuevos usuarios.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
