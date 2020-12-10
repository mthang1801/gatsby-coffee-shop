import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "../components/Globals/background-section"
import Info from "../components/Home/info"
export default function Home() {
  return (
    <Layout>
      <BackgroundImage title="Strong Coffee" home={true}/>
      <Info/>
    </Layout>
  )
}
