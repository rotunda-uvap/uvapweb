import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function SupportPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10">Support UVA Press</h2>
            <a href="https://securelb.imodules.com/s/1535/16-uva/giving.aspx?sid=1535&gid=16&pgid=684&cid=1509&appealcode=21UVAQ14WG&bledit=1&dids=4515&sort=1">
            <button className="bg-blue-500 text-white text-xl py-6 mx-auto w-full">MAKE A GIFT</button></a>
         <div className="py-5" dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         
           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Support UVa Press"}}) {
        html
      }
  }
`
