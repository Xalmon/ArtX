import logo from './logo.svg';
import './App.css';
import { Routes } from './Route';
import {useRoutes} from "react-router-dom"
import { DefaultTheme } from './Theme/DefaultTheme';
import {CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
     {useRoutes(Routes) }
    </ThemeProvider>
    )
}

export default App;
