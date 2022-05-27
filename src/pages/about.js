import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import BoardMember from "../components/BoardMember"



export default function AboutPage({ data }) {
    const pagedata = data.ab
    const code = data.cc
    const landuse = data.lu
 return (
    
        <Layout>
          <SeO
          title="About The University of Virginia Press" />
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col  w-full mb-10">
<PageHeader text={'About UVa Press'}/>      <div className="lg:w-3/3 mx-auto leading-relaxed text-base dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/>
    </div>
    <div className="flex flex-col lg:flex-row  -m-4">
      
      <div className="p-4 lg:w-1/4">
        <div className="flex  h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
               
              </svg>
           
            </div>
            <Link to={'/staff-list'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium">Staff Directory</h2></Link>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Find the right person to answer your question.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4">
        <div className="flex h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
           
            </div>
            <Link to={'/career'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium">Career</h2></Link>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Internships and full-time opportunities at the press.</p>
            
          </div>
        </div>
      </div> <div className="p-4 lg:w-1/4">
        <div className="flex  h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
               
                <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
             
            </div>
            <Link to={'/support'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium">Support</h2></Link>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Gifts of any amount support access to scholarship for students, faculty and scholars.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4">
        <div className="flex h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-mid text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
             
                <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
              </svg>
             
            </div>
            <Link to={'/permissions'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium">Rights and Permissions</h2></Link>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Reprints, as well as classroom and academic permissions requests.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
</section>

<section className="text-gray-600 body-font relative" id="Contact">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25142.53534541059!2d-78.51017630392049!3d38.02804744531566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3864fd48486e7%3A0x8fa6c3eae630f15!2sBemiss%20House%20(University%20Press)%2C%20210%20Sprigg%20Ln%2C%20Charlottesville%2C%20VA%2022903!5e0!3m2!1sen!2sus!4v1619475440081!5m2!1sen!2sus;output=embed"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-ceci-gray-dark tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">210 Sprigg Lane, Charlottesville, VA 22903-2417</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-ceci-gray-dark tracking-widest text-xs">EMAIL</h2>
          <a href="mailto:vapress​@​virginia.edu" className="className="text-gray-500 leading-relaxed>vapress​@​virginia.edu</a>
          <h2 className="title-font font-semibold text-ceci-gray-dark tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">434 924-3468</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 font-display">
      <h2 className="text-ceci-gray-dark text-lg mb-1 font-medium title-font">Postal and Shipping Address</h2>
     <div className="leading-relaxed mb-5 text-gray-600 flex flex-col">
             <div>University of Virginia Press</div> 
             <div>P.O. Box 400318</div>
             <div>Charlottesville, VA 22904-4318</div>
       </div>
     <h2 className="text-ceci-gray-dark text-lg mb-1 font-medium title-font">Courier Delivery (FedEx, UPS, etc.)</h2>
         
     <div className="leading-relaxed mb-5 text-gray-600 flex flex-col98">
             <div>University of Virginia Press</div>
             <div>210 Sprigg Lane</div>
             <div>Charlottesville, VA 22903-2417</div>
     </div>
      <p className="text-xs text-gray-500 mt-3">If you are driving, we usually have parking space available in the driveway just past Bemiss House on the left; we do not have visitor permits for the Alumni Hall parking lot.</p>
    </div>
  </div>
</section>

<section>
  <SectionHeader text={"Code of Conduct"}/>
  <div className="lg:w-3/3 mx-auto leading-relaxed text-base dropCap cms" dangerouslySetInnerHTML={{__html: code.html}}/>
</section>
<section>
  <SectionHeader text={"Land-use Acknowledgment"}/>
<div className="lg:w-3/3 mx-auto leading-relaxed text-base dropCap cms" dangerouslySetInnerHTML={{__html: landuse.html}}/>
</section>
            <section className="py-5 text-gray-700 border-b-2 border-gray-100" id="board">
  <SectionHeader text={"Current Board Members"}/>
              <div>
              <BoardMember name={"Matthew Hedstrom, chair"} title={"Associate Professor, Department of Religious Studies, University of Virginia"}/>
              <BoardMember name={"Derrick Aldridge"} title={"Professor and Program Coordinator, Social Foundations of Education, University of Virginia"}/>
              <BoardMember name={"Asher Biemann"} title={"Professor of Religious Studies, University of Virginia"}/>
              <BoardMember name={"Amy Clark"} title={"Professor of English and Chair of Communications Studies, University of Virginia at Wise"}/>
              <BoardMember name={"Felipe Correa"} title={"Vincent + Eleanor Shea Professor and Chair, Department of Architecture, University of Virginia"}/>
                <BoardMember name={"David Getsy"} title={"Eleanor Shea Professor of Art History, Department of Art, University of Virginia"}/>
                <BoardMember name={"Claudrena Harold"} title={"Professor of African American and African Studies and History and Department Chair, Corcoran Department of History, University of Virginia"}/>
                <BoardMember name={"Cassandra Newby-Alexander"} title={"Dean, College of Liberal Studies, Professor of History, and Director, Joseph Jenkins Roberts Center for African Diaspora, Norfolk State University"}/>
                <BoardMember name={"Jenny Roe"} title={"Mary Irene DeShong Professor of Design and Health, Urban + Environmental Planning and Director, Center for Design and Health, School of Architecture, University of Virginia"}/>
                <BoardMember name={"Sandhya Shukla"} title={"Associate Professor of English and American Studies and Director of Graduate Admissions, University of Virginia"}/>
                <p className="py-4 px-5 italic">Ex Officio</p>
                <BoardMember name={"M. Elizabeth Magill"} title={"Executive Vice President and Provost, University of Virginia"}/>
                <BoardMember name={"Jonathan D. Bowen"} title={"Assistant to the President and Writer, University of Virginia"}/>
                <BoardMember name={"Suzanne Morse Moomaw"} title={"Director, University of Virginia Press"}/>

              </div>
            </section>
        

         


          

           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      ab: markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "About"}}) {
        html
        frontmatter{
          title
        }
      }

      cc: markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Code of Conduct"}}) {
        html
        frontmatter{
          title
        }
      }

      lu: markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Land-use acknowledgment"}}) {
        html
        frontmatter{
          title
        }
      }
     
  }
`
