import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../../styles/styles.css"
import BackgroundSection from "./background-section"
import styled from "styled-components"
const Layout = ({ img, title, home, children, className }) => {
  return (
    <main className={className}>
      <Navbar />
      <BackgroundSection img={img} title={title} home={home}/>      
      <div className="content">
        {children}      
      </div>
      <Footer />
    </main>
  )
}

export default styled(Layout)`
  display : flex ; 
  flex-direction : column ; 
  min-height : 100vh ; 
  .content{
    flex-grow : 1 ;
  }
`
