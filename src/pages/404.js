import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import { StaticImage } from "gatsby-plugin-image"

const NotFound = () => {
  return (
    <Layout>
      <SeO title="Page not found"/>
      <div className=" min-h-screen flex items-center text-gray-500">
  <div className="container mx-auto p-5 flex flex-wrap items-center">
    <div className="w-full md:w-5/12 text-center p-4">
    <StaticImage  src="../images/404.png" alt="page missing" />
    </div>
    <div className="w-full md:w-7/12 text-center md:text-left p-4">
      <div className="text-6xl font-medium">404</div>
      <div className="text-xl md:text-3xl font-medium mb-4">
        Oops. This page has gone missing.
      </div>
      <div className="text-lg mb-6">
        The address may be incorrect or the page may have moved.
      </div>
      <Link to="/" className="border border-gray-500 rounded p-2">Go Home</Link>
    </div>
  </div>
</div>
    </Layout>
  )
}

export default NotFound