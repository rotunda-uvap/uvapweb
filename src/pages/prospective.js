import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import ActiveSeries from "../components/active-series"
import AcqStaff from "../components/AcqStaff"


export default function ProspectiveAuthorsPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10">For Prospective Authors</h2>

         <p dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         <section className="pt-10 px-5">
           <h5 className="text-2xl font-black">Outline for a Book Proposal</h5>
           <div className="flex flex-auto py-7">
             <a href={'UVaP_Book_Proposal.doc'} title="Download form"><button className="py-3 px-5 rounded bg-black text-white hover:bg-blue-200 hover:text-black">Download</button></a>
          <p>NEEDS INSTRUCTIONS</p>
           </div>
       
         </section>
         
         <section className="py-10 px-5 bg-blue-400">
           <h5 className="text-2xl font-black">Prospective Author Questionnaire</h5>
           <div className="flex flex-auto py-7">
             <a href={'UVaP_Author_Questionnaire.doc'} title="Download form"><button className="py-3 px-5 rounded bg-black text-white hover:bg-white hover:text-black">Download</button></a>
          <p>Submit this questionnaire to the acquisitions department only after your manuscript has been invited for consideration by an acquisitions editor. The questionnaire should accompany any manuscript invited for consideration.</p>
           </div>
       
         </section>

         
         <section className="py-10 px-5">
         <h5 className="text-2xl font-black">Our Acquisitions Team</h5>

                <div className="grid md:grid-cols-2 gap-2 p-10"> 
                <AcqStaff/>

                     </div>
                
            </section>
         
            <section>
         <ActiveSeries/>
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
