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
            {/* <h2 className="py-10 px-3 font-light">For Prospective Authors</h2> */}
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
      {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">For Prospective Authors</h2> */}
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">For Prospective Authors</h1>
      <p className="lg:w-3/3 mx-auto leading-relaxed text-base"> <div dangerouslySetInnerHTML={{__html: pagedata.html}}/></p>
    </div>
        
         <div className="flex flex-wrap">
         <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Prospective Author Questionnaire</h2>
        <p className="leading-relaxed text-base mb-4">Submit this questionnaire to the acquisitions department only after your manuscript has been invited for consideration by an acquisitions editor. The questionnaire should accompany any manuscript invited for consideration.</p>
        <a className="text-indigo-500 inline-flex items-center" href={'UVaP_Author_Questionnaire.doc'} title="Download form">Download
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
         
        </a>
      </div>
      <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Outline for a Book Proposal</h2>
        <p className="leading-relaxed text-base mb-4">NEEDS INSTRUCTIONS</p>
        <a className="text-indigo-500 inline-flex items-center" href={'UVaP_Book_Proposal.doc'} title="Download form">Download
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
        </a>
      </div>
      </div>
      </div>
      </section>

        {/*  <section className="pt-10 px-5">
           <h5 className="text-2xl font-light">Outline for a Book Proposal</h5>
           <div className="flex flex-auto py-7">
             <a href={'UVaP_Book_Proposal.doc'} title="Download form"><button className="py-3 px-5 rounded bg-black text-white hover:bg-blue-200 hover:text-black">Download</button></a>
          <p>NEEDS INSTRUCTIONS</p>
           </div>
       
         </section> */}
         
     {/*     <section className="py-10 px-5 greige">
           <h5 className="text-2xl font-light">Prospective Author Questionnaire</h5>
           <div className="flex flex-auto py-7">
             <a href={'UVaP_Author_Questionnaire.doc'} title="Download form"><button className="py-3 px-5 rounded bg-black text-white hover:bg-white hover:text-black">Download</button></a>
          <p>Submit this questionnaire to the acquisitions department only after your manuscript has been invited for consideration by an acquisitions editor. The questionnaire should accompany any manuscript invited for consideration.</p>
           </div>
       
         </section> */}

         
         <section>
         <div className="container px-5 py-12 mx-auto">
         <h5 className="text-2xl font-light">Our Acquisitions Team</h5>

                <div className="grid md:grid-cols-2 gap-2 p-10"> 
                <AcqStaff/>

                     </div>
                </div>
            </section>
         
         
         <ActiveSeries/>
           
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
