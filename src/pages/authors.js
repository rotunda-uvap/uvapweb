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

<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
  <span className="font-medium title-font mb-4 text-indigo-500"><Link to={'/prospective'}>
            Prospective Authors <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span>
              </Link></span>
  <div className="flex flex-col text-center w-full">
     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">For Current Authors</h1>
     
      <p className="lg:w-3/3 mx-auto leading-relaxed text-base">
         <div dangerouslySetInnerHTML={{__html: pagedata.html}}/></p>
    </div>
   
    </div>
    </section>

          {/*   <h2 className="py-10 px-3 font-light">For Authors</h2>

        <section className="py-5 px-5 grid grid-cols-2 mx-auto">
            <div className="py-3 md:pl-20 uppercase md:border-r md:border-b-0 border-b border-gray-300 mt-4"> 
            Current Authors</div>
            <button className="p-3 uppercase  md:border-b-0 border-b border-gray-300"><Link to={'/prospective'}>
            
      Prospective Authors <span className="inline-flex items-center mt-4">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg></span></Link></button>

        </section>
            <section>
            <div dangerouslySetInnerHTML={{__html: pagedata.html}}/>

            </section> */}
 
        
 <section className="text-gray-600 body-font">
      <div className="container px-5 pb-12 mx-auto">
        <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Illustrations Guidelines</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
        <FileDownloadButton name="Art Guidelines" file="UVAP_Art_Guidelines.pdf"/>        
          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
          <FileDownloadButton name="Art Log" file="UVAP_Art_Log.docx"/>
          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg><FileDownloadButton name="Cover Design Questionnaire" file="UVAP_Author-Cover-Q_0.docx"/></div>
</div>

        </div>
      </div>
    </section>
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Manuscript Guidelines</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Guide to Manuscript Prepration" file="UVaP_MS_Prep_Guide.doc"/>    
          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Final Manuscript Basics" file="UVaP_Final_MS_Basics.docx"/>
          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Order of MS Elements" file="UVaP_Order_MS_Elements.doc"/>
             </div>
</div>

        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Permissions</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Sample Request and Release Letters" file="UVaP_Sample_Perm_Let.doc"/>
          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Permissions Log" file="UVAP_Text_Permissions_Log.docx"/>
             </div>
</div>

        </div>
      </div>
    </section>
          
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Proofs</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Reviewing the Proof and Creating the Index" file="UVaP_Proof_Index_Gdlns.pdf"/>
          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Proofer's Marks" file="proofers1.gif"/>
             </div>
</div>

        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Marketing Your Book</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
        
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Book Abstract Guidelines and Samples" file="UVA-Press_Abstract-Instructions-Samples_0.docx"/>

          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Marketing Questionnaire" file="UVA-Press-Marketing-Questionnaire.doc"/>

          </div></div>
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Marketing FAQ and Author Tips" file="UVAP_Marketing_FAQ_Tips.docx"/>
             </div>
</div>

        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Multi-Author Volumes</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
       
          
          <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1" className="text-gray-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
               
               <path xmlns="http://www.w3.org/2000/svg" d="M9 5l7 7-7 7"/>
             </svg>
             <FileDownloadButton name="Editor's Guidelines" file="UVaP_Vol_Ed_Gd.doc"/>
             </div>
</div>

        </div>
      </div>
    </section>


<section className="py-2 greige">
            <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">UVaP Editors</h1>
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
