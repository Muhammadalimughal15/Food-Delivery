import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import MenuHeader from './MenuHeader'



const Main = () => {
  const location = useLocation();
  console.log(location.pathname); 


  return (
    <>
    {location.pathname === "/menu" ? <MenuHeader /> : <Header/>}
     
     <Outlet/>
     <Footer/>
    </>
  )
  
}

export default Main
