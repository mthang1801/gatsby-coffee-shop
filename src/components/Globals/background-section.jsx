import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
const getBackgroundDefault = graphql`
  {
    bgDefault: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BackgroundSection = ({ img, className, title, children, home }) => {
  const { bgDefault } = useStaticQuery(getBackgroundDefault)
  return (
    <BackgroundImage
      fluid={img || bgDefault.childImageSharp.fluid}
      className={className}
      home={home}
    >
      <h1 className="title">{title}</h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default  title",
  className: "background-default",
}

export default styled(BackgroundSection)`
  min-height: ${({ home }) => (home ? `calc(100vh - 80px)` : "50vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgba(255, 158, 9, 0.6),
    rgba(255, 158, 9, 0.6));
  
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
  color: var(--mainWhite);
  text-align: center;
  .title{
    font-size : 2.5em;
  }
  z-index: - 1;
`
