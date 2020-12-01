import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import AwardWinners from "../components/award-winners"


export default function Marketing({data}) {
  return (
    <Layout>
        <h1>Marketing</h1>
        <AwardWinners/>

   
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      site {
        siteMetadata {
          title
          logo
          description
        }
      }
  }`
