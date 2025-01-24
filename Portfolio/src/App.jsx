import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setuser } from "./redux/colour/userSlice.js";
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Createnew from './components/Createnew'
import { setcolour } from './redux/colour/colourSlice.js';

function Getdata() {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {

    //Online mode
    fetch(id ? `REPLACE_ME_WITH_SERVERS_LINK/${id}` : 'REPLACE_ME_WITH_SERVERS_LINK/')
      .then((response) => { return response.json() })
      .then((data) => { dispatch(setuser(data)); dispatch(setcolour(data.color)) })
      .catch((err) => { console.log(err) })
      
  }, [])

  const info = useSelector((state) => state.userdata.value)

  if (!info) { return <div>loading...</div> }
  else { return (<><Navbar id={info.basicinfo.email}/><Home /></>) }
}

function App() {

  const info = useSelector((state) => state.userdata.value)
  let navprop;
  if(info){navprop=info.basicinfo.email}
  else{navprop=""}

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Getdata /> </>,
    },
    {
      path: '/:id',
      element: <><Getdata /> </>,
    },
    {
      path: '/createyourportfolio',
      element: <><Navbar id={navprop}/><Createnew /></>,
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
