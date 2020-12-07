import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import ActiveSeries from "../components/active-series"
import AcqStaff from "../components/AcqStaff"


export default function ProspectiveAuthorsPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="text-4xl py-2">For Prospective Authors</h2>

         <p dangerouslySetInnerHTML={{__html: pagedata.html}}/>


         <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2 p-10 bg-green-400 text-white"> 
                <AcqStaff/>

                     </div>
                
            </section>
         
            <section>
         <ActiveSeries/>
            </section>

           
            <section className="py-20 bg-gray-100">
                <h3 className="text-4xl">Files</h3>
            <p>Files to download, how display? </p>
            </section>

           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Prospective Authors"}}) {
        html
      }
  }
`
