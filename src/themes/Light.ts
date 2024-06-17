import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#A73200',
            dark: '#972D00',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#040C19',
        },
        text: {
            primary: '#fff',
            secondary: '#A73200',
        }
    }
});