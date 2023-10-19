import React, { useState } from 'react';
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Button } from "@mui/material";
import { PDFDownloadLink } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});

export default function Alarms() {

    const PDFDocument = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      );

    const today = new Date(); // Esto crea un objeto Date que representa la fecha y hora actual.

    // Puedes acceder a diferentes componentes de la fecha, como el año, mes, día, hora, minuto, etc.
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Los meses comienzan desde 0, así que agregamos 1.
    const day = today.getDate();

    const [selectedDateInit, setSelectedDateInit] = useState(
        new Date(`${year}-09-${day}T12:00:00`)
    )
    const handleChangeInit = (date) => {
        setSelectedDateInit(date)
    };

    const [selectedDateEnd, setSelectedDateEnd] = useState(
        new Date(`${year}-${month}-${day}T12:00:00`)
    )
    const handleChangeEnd = (date) => {
        setSelectedDateEnd(date)
    };

    return (
        <Grid container spacing={3}>
            
            <Grid item xs={12} justifyContent="center">
                <Box marginTop={0}>
                    <Typography variant="h4" align="center" sx={{ color: "grey" }}>
                        Alarmas de Esmeralda Ana
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
                            <Typography color="initial" variant="body2" align="center">
                                Número de días sin bucear.
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
                                Máximo inmersiones diarias
                            </Typography>
                            <Typography color="initial" variant="body2" align="center">
                                Número de faltas por pasar un máximo de 3 inmersiones al día.
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
                            <Typography color="initial" variant="body2" align="center">
                                Número de faltas al pasar un máximo de 40 mts de profundidad en inmersiones.
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
                            4
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
                                Nitrógeno acumulado crítico
                            </Typography>
                            <Typography color="initial" variant="body2" align="center">
                                Número de escenarios donde el nitrógeno acumulado podría traer consecuencias en la salud del trabajador.
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
                        marginTop={7}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "10px",
                        }}
                        >
                        <Link to="/metrics/alarmas/detalles-alarma5" style={{ textDecoration: "none" }}>
                            <Typography color="initial" variant="h6" align="center" style={{ textDecoration: "underline" }}>
                                Límite Buceo yo-yo
                            </Typography>
                            <Typography color="initial" variant="body2" align="center">
                                Número de faltas por superar las 7 inmersiones sucesivas.
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
                        marginTop={7}
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
                            <Typography color="initial" variant="body2" align="center">
                                Número de faltas por incumplir la tabla de descompresión en ascenso.
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
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={1}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                    // Agrega una lógica aquí si deseas realizar alguna acción antes de descargar el PDF.
                    }}
                >
                    Generar Resumen
                </Button>
                <PDFDownloadLink
                    document={PDFDocument}
                    fileName="example.pdf"
                >
                    {/* {({ blob, url, loading, error }) =>
                    loading ? 'Cargando documento...' : 'Descargar Resumen'
                    } */}
                </PDFDownloadLink>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
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
