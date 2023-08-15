import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976D2", // Change this to your desired primary color
        },
        secondary: {
            main: "#FF5722", // Change this to your desired secondary color
        },
    },
    transitions: {
        easing: {
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
});

export default theme