import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Hoc = (Prospect) => (props) => {
    const colorList = ['purple', 'white', 'red', 'green', 'blue', 'gray', 'yellow', 'pink'];
    const randColor = colorList[Math.floor(Math.random() * colorList.length)];

    const customTheme = createTheme({
        palette: {
          background: {
            default: randColor
          }
        }
      });

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Prospect />
        </ThemeProvider>
    );
};

export default Hoc;