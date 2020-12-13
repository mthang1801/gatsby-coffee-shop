import React from "react"
import Layout from "../components/Globals/layout"
import Category from "../components/Home/category";
import Info from "../components/Home/info"
import Contact from "../components/Home/contact"
import SEO from "../components/SEO/seo"
export default function Home() {
  return (
    <Layout title="The first you need to begin your day" home={true}>     
    <SEO title="Home"/>
      <Info/>     
      <Category/>
      <Contact/>
    </Layout>
  )
}
