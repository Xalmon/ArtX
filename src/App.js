
import './App.css';
import { useRoutes } from 'react-router-dom';
import {ROUTES} from './routes/index'
import { useDispatch, useSelector } from 'react-redux';
// import { store } from './State/Authentication/store';
import { useEffect } from 'react';
import { getArtistProfile, getCollectorProfile } from './State/Authentication/Action';

function App() {
  const dispatch = useDispatch()
  const id = localStorage.getItem("id")
  const artistId = localStorage.getItem("artistId")
  const {auth} = useSelector(store=>store)
  // useEffect(()=>{
  //   dispatch(getCollectorProfile(auth.id || id))
  // },[auth.id])
  useEffect(()=>{
    dispatch(getArtistProfile(auth.artistId || artistId))
  },[auth.artistId])
  
  return useRoutes(ROUTES)
}

export default App;
