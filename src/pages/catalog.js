import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CurrentList from "../components/current-list"

export default function Catalog({data}) {
    return (
      <Layout>
       <h2>Catalog</h2>
       <p>Download Current Catalog<a href={`/fall20.pdf`}> <img src={`/fall20.jpg`}/></a></p>
       <p>Previous catalog links</p>
       <p>Link to Edelweiss</p>
       <CurrentList/>
       

      </Layout>
    )
  }
  