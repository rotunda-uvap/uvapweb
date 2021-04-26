import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import AcqStaff from "../components/AcqStaff"
import FileDownloadButton from "../components/FileDownloadButton"


export default function AuthorsPage({ data }) {
    
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="py-10 px-3 font-light">For Authors</h2>

        <section className="py-5 px-5 grid grid-cols-2 mx-auto">
            <div className="py-3 md:pl-20 uppercase md:border-r md:border-b-0 border-b border-gray-300 mt-4"> 
            Current Authors</div>
            <button className="p-3 uppercase  md:border-b-0 border-b border-gray-300"><Link to={'/prospective'}>
            
      Prospective Authors <span className="inline-flex items-center mt-4">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg></span></Link></button>

        </section>
            <section>
            <div dangerouslySetInnerHTML={{__html: pagedata.html}}/>

            </section>
 
            <section className="py-2 greige">
                <h3 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 px-10">UVaP Editors</h3>
                <div className="grid md:grid-cols-2 gap-2"> 
               <AcqStaff />
                     </div>
            </section>
           
                <section className="text-gray-700 body-font">
  <div className="container flex flex-wrap px-5 pb-12 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Illustrations Guidelines</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about illustration guidelines.</p>
      
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <nav className="flex flex-wrap list-none -mb-1">
      <FileDownloadButton name="Art Guidelines" file="UVAP_Art_Guidelines.pdf"/>
                    <FileDownloadButton name="Art Log" file="UVAP_Art_Log.docx"/>
                    <FileDownloadButton name="Cover Design Questionnaire" file="UVAP_Author-Cover-Q_0.docx"/>
        
       
      </nav>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font" >
  <div className="container flex flex-wrap px-5 pb-12 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Manuscript Guidelines</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about Manuscript Guidelines.</p>
      
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <nav className="flex flex-wrap list-none -mb-1">
      <FileDownloadButton name="Guide to Manuscript Prepration" file="UVaP_MS_Prep_Guide.doc"/>
                    <FileDownloadButton name="Final Manuscript Basics" file="UVaP_Final_MS_Basics.docx"/>
                    <FileDownloadButton name="Order of MS Elements" file="UVaP_Order_MS_Elements.doc"/>
        
       
      </nav>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font" >
  <div className="container flex flex-wrap px-5 pb-12 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Permissions</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about Permissions.</p>
      
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <nav className="flex flex-wrap list-none -mb-1">
      <FileDownloadButton name="Sample Request and Release Letters" file="UVaP_Sample_Perm_Let.doc"/>
                    <FileDownloadButton name="Permissions Log" file="UVAP_Text_Permissions_Log.docx"/>
        
       
      </nav>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font" >
  <div className="container flex flex-wrap px-5 pb-12 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Proofs</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about Proofs.</p>
    
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <nav className="flex flex-wrap list-none -mb-1">
      <FileDownloadButton name="Reviewing the Proof and Creating the Index" file="UVaP_Proof_Index_Gdlns.pdf"/>
                    <FileDownloadButton name="Proofer's Marks" file="proofers1.gif"/>
        
       
      </nav>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font" >
  <div className="container flex flex-wrap px-5 pb-12 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Marketing Your Book</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about Marketing Your Book.</p>
    
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <nav className="flex flex-wrap list-none -mb-1">
      <FileDownloadButton name="Book Abstract Guidelines and Samples" file="UVA-Press_Abstract-Instructions-Samples_0.docx"/>
                    <FileDownloadButton name="Marketing Questionnaire" file="UVA-Press-Marketing-Questionnaire.doc"/>
                    <FileDownloadButton name="Marketing FAQ and Author Tips" file="UVAP_Marketing_FAQ_Tips.docx"/>
   
      </nav>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font" >
  <div className="container flex flex-wrap px-5 pb-12 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-5 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Multi-Author Volumes</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about Multi-Author Volumes.</p>
    
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <nav className="flex flex-wrap list-none -mb-1">
      <FileDownloadButton name="Editor's Guidelines" file="UVaP_Vol_Ed_Gd.doc"/>
   
      </nav>
    </div>
  </div>
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
