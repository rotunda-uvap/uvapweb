import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import AcqStaff from "../components/AcqStaff"


export default function AuthorsPage({ data }) {
    
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="text-5xl py-2">For Authors</h2>

        <section className="py-5 grid grid-cols-2 mx-auto">
            <div className="p-3 uppercase">Current Authors</div>
            <button className="p-3 bg-green-500 hover:bg-green-400 text-white uppercase"><Link to={'/prospective'}>Prospective Authors</Link></button>

        </section>
            <section>
            <p dangerouslySetInnerHTML={{__html: pagedata.html}}/>

            </section>

            <section className="py-10">
                <h3 className="p-3 text-lg font-black">UVaP Editors</h3>
                <div className="grid md:grid-cols-2 gap-2"> 
               <AcqStaff />

                     </div>
                
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
   
     
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Current Authors"}}) {
        html
      }
  }
`
