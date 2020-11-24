import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Catalog({data}) {
    return (
      <Layout>
       <h2>Catalog</h2>
       <p>Link to current catalog download</p>
       <p>Link to Edelweiss</p>
       <p>List of all titles available in current catalog</p>
       <p>Previous catalog links</p>

      </Layout>
    )
  }