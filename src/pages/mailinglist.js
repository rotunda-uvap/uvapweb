import React from "react"
import NewsletterMain from "../components/NewsletterMain"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
export default function MailingListPage() {
   
 return (
   
        <Layout> 
          <SeO title="Sign up for Updates"/>
           <div className="container px-5 py-12 mx-auto">
           <PageHeader text={'Keep in Touch'}/>

           <div className="py-4 greige">
        <div className="container mx-auto px-6">
       
       <div>
       <NewsletterMain/>

        </div>  

    </div>
      </div>
         
           </div>
        </Layout>

 )
}


