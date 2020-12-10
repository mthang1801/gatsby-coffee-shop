import React from "react"
import styles from "../../styles/footer.module.scss"
import links from "../../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {links.map(link => (
          <AniLink fade to={link.path} key={link.name}>
            {link.name}
          </AniLink>
        ))}
      </ul>
      <p>
        Copyright @Coffee Shop {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
