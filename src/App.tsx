import { Routes, Route } from "react-router-dom";
import Patient from "./pages/Patient";
import Layout from "./layout";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Patient />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
