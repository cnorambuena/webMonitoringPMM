import React, { useState } from 'react';
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

export default function Alarms() {

    const [selectedDateInit, setSelectedDateInit] = useState(
        new Date("2023-06-05T12:00:00")
    )
    const handleChangeInit = (date) => {
        setSelectedDateInit(date)
    };

    const [selectedDateEnd, setSelectedDateEnd] = useState(
        new Date("2023-06-09T12:00:00")
    )
    const handleChangeEnd = (date) => {
        setSelectedDateEnd(date)
    };

    return (
        <Grid container spacing={3}>
            
            <Grid item xs={12} justifyContent="center">
                <Box marginTop={0}>
                    <Typography variant="h4" align="center" sx={{ color: "grey" }}>
                        Nombre Usuario
                    </Typography>
                </Box>
            </Grid>

            <Grid item container spacing={3} justifyContent="center">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6} textAlign="center">
                        <KeyboardDatePicker
                        disableToolbar
                        variant='inline'
                        format='dd/MM/yyy'
                        margin='normal'
                        id='date-picker-init'
                        label='Fecha inicio periodo'
                        value={selectedDateInit}
                        onChange={handleChangeInit}
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                        }}
                        />
                    </Grid>
                          
                    <Grid item xs={6} textAlign="center">
                        <KeyboardDatePicker
                        disableToolbar
                        variant='inline'
                        format='dd/MM/yyy'
                        margin='normal'
                        id='date-picker-end'
                        label='Fecha termino periodo'
                        value={selectedDateEnd}
                        onChange={handleChangeEnd}
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                        }}
                        />
                    </Grid>

                </MuiPickersUtilsProvider>
            </Grid>

            <Grid item container spacing={3}>

                <Grid item xs={4}>
                    <Box
                        marginLeft={2}
                        marginTop={6}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma1" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Días sin bucear
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                            backgroundColor: "red",
                            borderRadius: "10px",
                            marginTop: "10px",
                            padding: "10px",
                            }}
                        >
                            <Typography variant="h4" align="center" color="white">
                            6
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                
                <Grid item xs={4}>
                    <Box
                        marginTop={6}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma2" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Máximo periodo de buceo diario
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                            backgroundColor: "green",
                            borderRadius: "10px",
                            marginTop: "10px",
                            padding: "10px",
                            }}
                        >
                            <Typography variant="h4" align="center" color="white">
                            0
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                
                <Grid item xs={4}>
                    <Box
                        marginRight={2}
                        marginTop={6}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma3" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Máximo de profundidad
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                            backgroundColor: "green",
                            borderRadius: "10px",
                            marginTop: "10px",
                            padding: "10px",
                            }}
                        >
                            <Typography variant="h4" align="center" color="white">
                            0
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <Grid item container spacing={3}>
            <Grid item xs={4}>
                    <Box
                        marginLeft={2}
                        marginTop={6}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma4" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Máximo nitrógeno acumulado
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                            backgroundColor: "green",
                            borderRadius: "10px",
                            marginTop: "10px",
                            padding: "10px",
                            }}
                        >
                            <Typography variant="h4" align="center" color="white">
                            0
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box
                        marginTop={6}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma5" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Máximo buceo Yoyo
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                            backgroundColor: "orange",
                            borderRadius: "10px",
                            marginTop: "10px",
                            padding: "10px",
                            }}
                        >
                            <Typography variant="h4" align="center" color="white">
                            2
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box
                        marginRight={2}
                        marginTop={6}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma6" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Incumple tabla de descompresión
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                            backgroundColor: "orange",
                            borderRadius: "10px",
                            marginTop: "10px",
                            padding: "10px",
                            }}
                        >
                            <Typography variant="h4" align="center" color="white">
                            3
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <Grid item container spacing={3}>

                <Grid item xs={6} sx={{ marginLeft: "20px", marginBottom: "20px" }}>
                <Link to="/metrics" className="Back-button">
                    <IconButton color="inherit" aria-label="Back">
                        <KeyboardBackspaceTwoToneIcon sx={{ color: "#2074d4" }} />
                    </IconButton>
                </Link>
                </Grid>
            </Grid>
      
        </Grid>
    );
  }
