import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import ActiveSeries from "../components/active-series"
import CompletedSeries from "../components/CompletedSeries"
import AcqStaff from "../components/AcqStaff"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import FileDownloadButton from "../components/FileDownloadButton"

export default function ProspectiveAuthorsPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          <SeO title="Prospective Authors"/>
            {/* <h2 className="py-10 px-3 font-light">For Prospective Authors</h2> */}
            <section className="border-b-2 border-gray-100 text-gray-600 body-font">
  <div className="container p-5 mx-auto">
  
            <div className="flex flex-col text-center w-full">
<PageHeader text={"For Prospective Authors"}/>      <span className="font-medium title-font text-gray-500 pb-4"><Link to={'/authors'}>
            Current Authors <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              </span>
              </Link></span>
      <p className="lg:w-3/3 leading-relaxed text-base text-left">
         <div className="cms dropCap" dangerouslySetInnerHTML={{__html: pagedata.html}}/></p>
         
    </div>
        
        
      </div>
      </section>

     

      <section className="border-b-2 border-gray-100 text-gray-600 body-font">
      <div className="container p-5 mx-auto">
        <div className="text-center mb-10">
          <SectionHeader text={'Prospective Author Questionnaire'}/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Prospective Author Questionnaire</h1> */}
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Submit this questionnaire to the acquisitions department only after your manuscript has been invited for consideration by an acquisitions editor. The questionnaire should accompany any manuscript invited for consideration.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
       
          
          <div className="p-2 sm:w-1/2 w-full">
         
             <FileDownloadButton name="Author Questionnaire" file={'UVaP_Author_Questionnaire.doc'}/>
</div>

        </div>
      </div>
    </section>

      <section className="py-4 border-b-2 border-gray-100 text-gray-600 body-font">
      <div className="container p-5 mx-auto">
        <div className="text-center mb-10">
          <SectionHeader text={'Outline for a Book Proposal'}/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Outline for a Book Proposal</h1> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
       
          
          <div className="p-2 sm:w-1/2 w-full">
         
             <FileDownloadButton name="Outline" file={'UVaP_Book_Proposal.doc'}/>
</div>

        </div>
      </div>
    </section>

       
         
         <section className="border-b-2 border-gray-100">
         <div className="container p-5 mx-auto">
            <div className="flex flex-col text-center w-full">
              <SectionHeader text={'Our Acquisitions Team'}/>
        </div>

                <AcqStaff/>

                </div>
            </section>
         
         
         <ActiveSeries/>
         <CompletedSeries/>
           
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
