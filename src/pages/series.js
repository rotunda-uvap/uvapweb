import React from "react"
import Layout from "../components/layout"
import ActiveSeries from "../components/active-series"
import CompletedSeries from "../components/CompletedSeries"
import SeO from "../components/SeoComponent"

export default function Series({ data }) {
 return (    
        <Layout>
          <SeO title="Our Series"/>
          <ActiveSeries/>
          <div id="completed">
         <CompletedSeries/></div>      
        </Layout>
 )
}

