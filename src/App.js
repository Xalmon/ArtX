import logo from './logo.svg';
import './App.css';
import { Routes } from './Route';
import {useRoutes} from "react-router-dom"
import { DefaultTheme } from './Theme/DefaultTheme';
import {CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getUser } from './component/state/Authentication/Action';

function App() {
  const dispatch=useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)
  useEffect(()=>{
   dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
     {useRoutes(Routes) }
    </ThemeProvider>
    )
}

export default App;
