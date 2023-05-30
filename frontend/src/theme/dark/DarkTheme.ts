import {createTheme} from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff",
            secondary: "#dedede"
        }
    },
});
