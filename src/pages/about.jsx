import React from "react"
import Layout from "../components/Globals/layout"
import BackgroundImage from "../components/Globals/background-section"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/SEO/seo"
import Info from "../components/About/info";
const getBackgroundImage = graphql`
  {
    bgAbout: file(relativePath: { eq: "background-about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const About = () => {
  const {bgAbout} = useStaticQuery(getBackgroundImage);
  return (
    <Layout img={bgAbout.childImageSharp.fluid} title="About Us">    
    <SEO title="About"/>
      <Info/>
    </Layout>
  )
}

export default About
