import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import { FaUsers, FaPhoneAlt, FaAddressBook, FaDonate, FaPenAlt } from "react-icons/fa";



export default function AboutPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10">About UVa Press</h2>
            <section className="grid md:grid-cols-5 py-5">
                <Link to={'/contact'}><button className="p-3 border-b-4 border-white hover:bg-black hover:text-white w-full flex flex-col items-center"><FaPhoneAlt/>Contact</button></Link>
                <Link to={'/staff-list'}><button className="p-3 border-b-4 border-white hover:bg-black hover:text-white w-full flex flex-col items-center"><FaAddressBook className="self-center"/> Staff Directory</button></Link>
                <Link to={'/career'}><button className="p-3 border-b-4 border-white hover:bg-black hover:text-white w-full flex flex-col items-center"><FaUsers/>Career Opportunties</button></Link>
                <Link to={'/support'}><button className="p-3 border-b-4 border-white hover:bg-black hover:text-white w-full flex flex-col items-center"><FaDonate/>Support</button></Link>
                <Link to={'/permissions'}><button className="p-3 border-b-4 border-white hover:bg-black hover:text-white w-full flex flex-col items-center"><FaPenAlt/>Rights and Permissions</button></Link>

            </section>

         <div className="py-5" dangerouslySetInnerHTML={{__html: pagedata.html}}/>


          

           
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
