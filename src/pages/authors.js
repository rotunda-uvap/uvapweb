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
            <h2 className="text-5xl py-2">For Authors</h2>

        <section className="py-5 grid grid-cols-2 mx-auto">
            <div className="p-3 uppercase">Current Authors</div>
            <button className="p-3 bg-black hover:bg-blue-200 hover:text-black text-white uppercase"><Link to={'/prospective'}>Prospective Authors</Link></button>

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
            <section className="py-10">
                <h3 className="text-4xl">Files</h3>
            
            <div className="grid md:grid-cols-3 md:gap-5">
                <div className="flex flex-col py-5"><h5 className="uppercase text-lg text-center">Illustrations Guidelines</h5>
                    <FileDownloadButton name="Art Guidelines" file="UVAP_Art_Guidelines.pdf"/>
                    <FileDownloadButton name="Art Log" file="UVAP_Art_Log.docx"/>
                    <FileDownloadButton name="Cover Design Questionnaire" file="UVAP_Author-Cover-Q_0.docx"/>
                </div>
                <div className="flex flex-col py-5"><h5 className="uppercase text-lg text-center">Manuscript Guidelines</h5>
                    <FileDownloadButton name="Guide to Manuscript Prepration" file="UVaP_MS_Prep_Guide.doc"/>
                    <FileDownloadButton name="Final Manuscript Basics" file="UVaP_Final_MS_Basics.docx"/>
                    <FileDownloadButton name="Order of MS Elements" file="UVaP_Order_MS_Elements.doc"/>
                </div>
                <div className="flex flex-col py-5"><h5 className="uppercase text-lg text-center">Permissions</h5>
                    <FileDownloadButton name="Sample Request and Release Letters" file="UVaP_Sample_Perm_Let.doc"/>
                    <FileDownloadButton name="Permissions Log" file="UVAP_Text_Permissions_Log.docx"/>
                </div>
                <div className="flex flex-col py-5"><h5 className="uppercase text-lg text-center">Proofs</h5>
                    <FileDownloadButton name="Reviewing the Proof and Creating the Index" file="UVaP_Proof_Index_Gdlns.pdf"/>
                    <FileDownloadButton name="Proofer's Marks" file="proofers1.gif"/>
                </div>
                <div className="flex flex-col py-5"><h5 className="uppercase text-lg text-center">Marketing Your Book</h5>
                    <FileDownloadButton name="Book Abstract Guidelines and Samples" file="UVA-Press_Abstract-Instructions-Samples_0.docx"/>
                    <FileDownloadButton name="Marketing Questionnaire" file="UVA-Press-Marketing-Questionnaire.doc"/>
                    <FileDownloadButton name="Marketing FAQ and Author Tips" file="UVAP_Marketing_FAQ_Tips.docx"/>
                </div>
                <div className="flex flex-col py-5"><h5 className="uppercase text-lg text-center">Multi-Author Volumes</h5>
                    <FileDownloadButton name="Editor's Guidelines" file="UVaP_Vol_Ed_Gd.doc"/>
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
