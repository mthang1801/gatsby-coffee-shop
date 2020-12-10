import React, { useState } from 'react'
import styles from "../../styles/navbar.module.scss"
import logo from "../../images/coffee-brand-icon.png"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {FaAlignRight} from "react-icons/fa"
import links from "../../constants/links"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)  
  return (
    <div className={styles.navbar}>
      <div className={styles.navHeader}>
        <AniLink fade to="/">
          <img src={logo} className={styles.navBrand}/>
        </AniLink>
        <button type="button" className={styles.toggleBtn} onClick={() => setIsOpen(prevState => !prevState)}>
          <FaAlignRight className={styles.icon}/>
        </button>
      </div>
      <ul className={isOpen ? `${styles.navLinks} ${styles.showNavs}` : `${styles.navLinks}`}>
        {links.map(link => (
          <li className={styles.navLinkItem} key={link.name}>
            <AniLink fade to={link.path} className={styles.navLink}>{link.name}</AniLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
