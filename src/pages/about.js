import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function AboutPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10">About UVa Press</h2>
            <section className="grid md:grid-cols-5 py-5">
                <Link to={'/contact'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Contact</button></Link>
                <Link to={'/staff-list'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Staff Directory</button></Link>
                <Link to={'/content/career'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Career Opportunties</button></Link>
                <Link to={'/content/support-uva-press'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Support</button></Link>
                <Link to={'/permissions'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Rights and Permissions</button></Link>

            </section>

         <p className="py-5" dangerouslySetInnerHTML={{__html: pagedata.html}}/>


          

           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "About"}}) {
        html
      }
     
  }
`
