import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../assets/css/LogIn.css';
// import { useNavigate  } from 'react-router-dom';


export default function Login() {
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   // Realizar lógica de inicio de sesión aquí

  //   // Redirigir a la página /metrics
  //   navigate('/metrics');
  // };

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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
