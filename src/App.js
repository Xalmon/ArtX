import logo from './logo.svg';
import './App.css';
import { Routes } from './Route';
import {useRoutes} from "react-router-dom"

function App() {
  return useRoutes(Routes);
}

export default App;
