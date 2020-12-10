import React from 'react'
import Navbar from "./Globals/navbar";
import Footer from "./Globals/footer"
import "../styles/styles.css"
import BackgroundSection from "../components/Globals/background-section"
// import "../styles/bootstrap.min.css"
const Layout = ({children}) => {
  return (
    <>
      <Navbar/>     
      {children}
      <Footer/>
    </>
  )
}

export default Layout
