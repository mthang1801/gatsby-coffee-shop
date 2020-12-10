import React from "react"
import Title from "../Globals/title"
import styles from "../../styles/info.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Info = () => {
  return (
    <section className={styles.info}>
      <Title title="our" subtitle="story" />
      <div className={styles.center}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          tempore odit dolore id et, nulla blanditiis velit. Dolorum odio maxime
          explicabo voluptatum impedit asperiores at libero, sint nulla labore
          consequuntur dolorem eius aperiam eaque. Sed, odit voluptatum eveniet,
          quae esse quod autem possimus incidunt enim reprehenderit assumenda
          voluptatibus accusantium sapiente dolorum quas odio, commodi illum.
          Obcaecati et enim aperiam accusamus reiciendis dignissimos, iste a,
          itaque, exercitationem suscipit distinctio maiores earum? Numquam non
          asperiores distinctio accusamus rerum doloremque nostrum saepe impedit
          magni similique vel et minus, velit aperiam dolore vero excepturi
          sapiente repudiandae molestias aliquam. Ex architecto quisquam
          provident corrupti ipsum et, vel fugit veniam! Fuga dicta nam quia
          quis earum magni. Expedita natus est, illo mollitia, ipsam dolores hic
          odio esse autem cupiditate quo at? Asperiores aliquam optio ut dolor
          architecto saepe obcaecati tenetur, placeat dolorum labore sit
          nesciunt minima officiis et illum eveniet tempore quia quae nemo
          cupiditate. Quisquam.
        </p>
      </div>

      <AniLink className="btn-yellow" to="/about">About page</AniLink>
    </section>
  )
}

export default Info
