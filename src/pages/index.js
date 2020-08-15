import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import Portfolio from "../components/sections/portfolio"
import Services from "../components/sections/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Services />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage
