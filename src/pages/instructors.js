import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function InstructorPage({data}) {
  return (
    <Layout>
        <h2 className="py-5 text-4xl">For Instructors</h2>
        <p>What's here? </p>

   
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
