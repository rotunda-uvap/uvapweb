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
            <button className="text-gray-800 hover:bg-gray-800 hover:text-white text-xl w-full py-6 text-center mx-auto border-b-4 border-gray-800">MAKE A GIFT</button></a>
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
