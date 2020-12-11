import React from "react"
import Layout from "../components/layout"
import Category from "../components/Home/category";
import Info from "../components/Home/info"
export default function Home() {
  return (
    <Layout title="The first you need to begin your day" home={true}>     
      <Info/>     
      <Category/>
    </Layout>
  )
}
