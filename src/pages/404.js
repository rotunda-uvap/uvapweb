import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeOComponent"
const NotFound = () => {
  return (
    <Layout>
      <SeO/>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound