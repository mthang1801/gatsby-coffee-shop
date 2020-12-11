import React, { useState, useEffect } from "react"
import styles from "../../styles/navbar.module.scss"
import logo from "../../images/coffee-brand-icon.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import links from "../../constants/links"
import Menu from "./menu"

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useEffect(()=> {
    function onHoverMenu(){
      setIsOpenMenu(true)
    }
    function onBlurMenu(){
      setIsOpenMenu(false);
    }
    document.getElementById("menu").addEventListener("mouseenter", onHoverMenu);
    document.getElementById("menu").addEventListener("mouseleave", onBlurMenu);
    return () => {
      document.getElementById("menu").removeEventListener("mouseenter", onHoverMenu);
      document.getElementById("menu").removeEventListener("mouseleave", onBlurMenu);
    }
  }) 
  
  return (
    <div className={styles.navbar}>
      <div className={styles.navHeader}>
        <AniLink fade to="/">
          <img src={logo} className={styles.navBrand} />
        </AniLink>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setIsOpen(prevState => !prevState)}
        >
          <FaAlignRight className={styles.icon} />
        </button>
      </div>
      <ul
        className={
          isOpen
            ? `${styles.navLinks} ${styles.showNavs}`
            : `${styles.navLinks}`
        }
      >
        {links.map(link => (
          <li className={styles.navLinkItem} key={link.name} id={link.name}>
            <AniLink fade to={link.path}  className={styles.navLink}>
              {link.name}               
            </AniLink>          
            {link.name === "menu" ? <Menu isOpen={isOpenMenu}/> : null}  
          </li>                    
        ))}        
        
      </ul>
      
    </div>
  )
}

export default Navbar
