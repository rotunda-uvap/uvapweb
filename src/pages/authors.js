import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import AcqStaff from "../components/AcqStaff"
import FileDownloadButton from "../components/FileDownloadButton"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"

export default function AuthorsPage({ data }) {
    
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
<SeO title="Information for Current Authors"/>
<section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
  <div className="container px-5 py-12 mx-auto">
  <div className="flex flex-col text-center w-full">
<PageHeader text={"For Current Authors"} />    <span className="font-medium title-font pb-4 text-gray-500"><Link to={'/prospective'}>
            Prospective Authors <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span>
              </Link></span>
      <p className="lg:w-3/3 mx-auto leading-relaxed text-base">
         <div className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></p>
    </div>
   
    </div>
    </section>

       
 
        
 <section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
      <div className="container px-5 pb-12 mx-auto">
        <div className="text-center mb-10">
        <SectionHeader text={'Illustrations Guidelines'}/>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        <div className="p-2 sm:w-1/2 w-full">
       <FileDownloadButton name="Art Guidelines" file="UVAP_Art_Guidelines.pdf"/>  </div>
          <div className="p-2 sm:w-1/2 w-full">
         <FileDownloadButton name="Art Log" file="UVAP_Art_Log.docx"/></div>
          <div className="p-2 sm:w-1/2 w-full">
         <FileDownloadButton name="Cover Design Questionnaire" file="UVAP_Author-Cover-Q_0.docx"/>
</div>

        </div>
      </div>
    </section>
    
    <section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
        <SectionHeader text={'Manuscript Guidelines'}/>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        <div className="p-2 sm:w-1/2 w-full">
        <FileDownloadButton name="Guide to Manuscript Prepration" file="UVaP_MS_Prep_Guide.doc"/></div>
          <div className="p-2 sm:w-1/2 w-full">
         <FileDownloadButton name="Final Manuscript Basics" file="UVaP_Final_MS_Basics.docx"/></div>
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Order of MS Elements" file="UVaP_Order_MS_Elements.doc"/>
</div>

        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
        <SectionHeader text={'Permissions'}/>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Sample Request and Release Letters" file="UVaP_Sample_Perm_Let.doc"/></div>
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Permissions Log" file="UVAP_Text_Permissions_Log.docx"/>
</div>

        </div>
      </div>
    </section>
          
    <section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
        <SectionHeader text={'Proofs'}/>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Reviewing the Proof and Creating the Index" file="UVaP_Proof_Index_Gdlns.pdf"/></div>
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Proofer's Marks" file="proofers1.gif"/>
</div>

        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
          <SectionHeader text={'Marketing Your Book'}/>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Book Abstract Guidelines and Samples" file="UVA-Press_Abstract-Instructions-Samples_0.docx"/></div>
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Marketing Questionnaire" file="UVA-Press-Marketing-Questionnaire.doc"/></div>
          <div className="p-2 sm:w-1/2 w-full">
          <FileDownloadButton name="Marketing FAQ and Author Tips" file="UVAP_Marketing_FAQ_Tips.docx"/>
</div>

        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font py-4 border-b-2 border-gray-100">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
      <SectionHeader text={'Multi-Author Volumes'}/>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
       
          
          <div className="p-2 sm:w-1/2 w-full">
         <FileDownloadButton name="Editor's Guidelines" file="UVaP_Vol_Ed_Gd.doc"/>
</div>

        </div>
      </div>
    </section>


<section className="py-2 greige">
            <div className="flex flex-col text-center w-full">
            <SectionHeader text="UVaP Editors"/>
            </div>
                
               <AcqStaff />
                 
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
