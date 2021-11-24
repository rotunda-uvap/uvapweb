// import React, { useRef, useEffect } from "react"
import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import MiniBio from "../components/MiniBio"
import FEList from "../components/FoundingEra"
import ACRList from "../components/ACR"
import ACList from "../components/AMC"
import LACList from "../components/LAC"
import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"
/* import { Timeline } from "@knight-lab/timelinejs"
import events from "../../static/timeline-data.json" */
// import "../components/updateTicker.css" 



export default function RotundaHome({ data }) {
  /* const timelineEl = useRef(null)
  const options = {initial_zoom:5}

    useEffect(() => {
      if (timelineEl.current) {
        const timeline = new Timeline(timelineEl.current, events, options)
      }
    }) */
    const RotundaLogo = getImage(data.rotLogo)
    const staff = data.staffs
 return (
   <Layout>
     <SeO title="ROTUNDA: Digital Imprint of the University of Virginia Press"
     description="Since 2004, Rotunda has published innovative peer-reviewed digital projects, both born-digital and from authoritative letterpress editions."/>
     <div>
     
         <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-7 items-center justify-center flex-col">
  <GatsbyImage image={RotundaLogo} alt="Rotunda logo" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
    <div className="text-center lg:w-2/3 w-full">
      <p className="leading-relaxed">Since 2004, our Rotunda imprint has published innovative peer-reviewed digital projects, both born-digital and from authoritative letterpress editions. Our core offering is the American History Collection of documentary editions spanning three centuries, from the work of young Ben Franklin through the presidential correspondence of Woodrow Wilson: more than 20 publications with content from over 550 letterpress and born-digital volumes, for a total of nearly 500,000 documents, diary entries, and editorial essays, all cross-searchable.

 </p>

<p className="leading-relaxed">Our major stand-alone publications are the Presidential Recordings Digital Edition, with transcripts and audio of nearly 4000 conversations from White House recordings; People of the Founding Era, a biographical reference to over 75,000 individuals; the open-access SAH Archipedia, an authoritative encyclopedia of the American built environment, with over 25,000 entries and 5000 editorial essays. Finally, our Literature and Culture Collection features seven editions of literary work and correspondence from nineteenth-century America and Britain.</p>
    
    </div>
 
  </div>
</section>

         <section className="text-gray-600 body-font">
  <div className="container px-5 py-7 mx-auto">
  <div className="text-center mb-20">
    <SectionHeader text="Accessing Rotunda Publications"/>
      {/* <h1 className="sm:text-3xl text-2xl font-thin title-font tracking-wider text-ceci-gray-dark mb-4">Accessing Rotunda Publications</h1> */}
      <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">If you are connecting via a campus Internet connection, you can expect to gain access to any Rotunda publication purchased by your institution. If your institution has not purchased a particular Rotunda publication, contact your institution’s library about ordering. You may also sign up for an individual free trial to evaluate Rotunda before making a purchase decision.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-dark text-white flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                
              </svg>
              
            </div>
            <h2 className="text-ceci-gray-dark text-lg title-font font-thin">Collection Entrance</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Access the Rotunda titles provided by your institution (must be on campus network or VPN), or log in with individual account.</p>
            <a href="https://rotunda.upress.virginia.edu/entrance.xqy" className="mt-3 text-ceci-gray-dark inline-flex items-center">Visit Collections
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-dark text-white flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-ceci-gray-dark text-lg title-font font-thin">MARC Records and Access Statistics</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Customer information and statistics for librarians or purchasers of Rotunda Publications.</p>
            <Link to={'/rotunda-customer-list'} className="mt-3 text-ceci-gray-dark inline-flex items-center">See Records
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
             
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-dark text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              
              </svg>
             
            </div>
            <h2 className="text-ceci-gray-dark text-lg title-font font-thin ">Purchase</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Information about institutional or individual purchase of Rotunda publications.</p>
            <Link to={'../rotunda-purchase'} className="mt-3 text-ceci-gray-dark inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 20 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="flex rounded-lg h-full greige p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-ceci-gray-dark text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              
            </div>
            <h2 className="text-ceci-gray-dark text-lg title-font font-thin ">Free Trial</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Register for a free trial.</p>
            <a className="mt-3 text-ceci-gray-dark inline-flex items-center font-thin" href="https://rotunda.upress.virginia.edu/register/default.xqy">Register
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="text-center mb-10">
      <SectionHeader text="Rotunda Collections"/>
      {/* <h1 className="sm:text-3xl text-2xl font-thin title-font tracking-wider text-ceci-gray-dark mb-4">Rotunda Collections</h1> */}
      <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">Rotunda publications are available to both libraries and independent scholars as single titles or as collections. The American History Collection includes the sub-collections American Founding Era; Antebellum, Civil War, and Reconstruction; and the American Century.</p>
{/*       <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s">Rotunda publications are produced by staff members of UVA Press. We have in-house expertise in Web development; MarkLogic Server programming and administration; development using XQuery, XSLT, JavaScript, JQuery and related tools; and markup or conversion of documents to XML using the TEI Guidelines.</p>
 */}    
 {/* <a className="mt-3 text-ceci-gray-dark inline-flex tracking-wider items-center font-thin" href="#timeline">Timeline of Rotunda Publications
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
    </div>
    <div className="flex flex-col md:flex-row items-center">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full greige text-ceci-gray-dark mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
          </svg>
         
        </div>
        <div className="flex flex-row">
        <Link to={'#fe'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium mb-3">American History</h2></Link>
       
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full greige text-ceci-gray-dark mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
           
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        
        </div>
        <div className="flex-grow">
        <Link to={'#lit'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium mb-3">Literature and Culture</h2></Link>
       
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full greige text-ceci-gray-dark mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            
          </svg>
         
        </div>
        <div className="flex-grow">
        <Link to={'#arch'}><h2 className="text-ceci-gray-dark text-lg title-font font-medium mb-3">Architecture</h2></Link>
          {/* <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p> */}
         
        </div>
      </div>
    </div>
  </div>
</section>
  

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto greige">
    <div className="text-center mb-20">
<SectionHeader text="Rotunda Contacts"/>  
    {/* <h1 className="sm:text-3xl text-2xl font-thin title-font tracking-wider text-ceci-gray-dark mb-4">Rotunda Contacts</h1> */}
   
    </div>

       <div className="flex flex-wrap -m-4 text-center">
    {staff.edges.map(edge => (
                    <>
                  <MiniBio frontmatter={edge.node.frontmatter} /> 
                     </>
                    ))}
     
     
    </div>
    <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500 py-5 font-display text-center">If you are the author or editor of a digital project that you think might be a suitable candidate for publication within Rotunda, please send an inquiry to UVa Press editor in chief <a href="mailto:eab7fb@virginia.edu">Eric Brandt</a>.</p>

  </div>
</section>

{/* <section className="md:block">
<div className="container px-5 py-7 mx-auto text-center">
<h1 className="sm:text-3xl text-2xl font-thin title-font tracking-wider text-ceci-gray-dark mb-4">Rotunda News and Updates</h1>
<div className="md:vwrap text-gray-500 tracking-wide text-sm  font-thin leading-normal md:text-lg"><div className="md:vmove">
  <div className="md:vitem">Aug 2021: 277 new building images for SAH Archipedia</div>
  <div className="md:vitem">Aug 2021: Added George Washington Revolutionary War Volume 27</div>
  <div className="md:vitem">Jul 2021: 136 new building images for SAH Archipedia</div>
  <div className="md:vitem">Jul 2021: Launch of the Papers of Booker T. Washington</div>

</div></div>

</div>
</section> */}

    <section className="text-gray-600 body-font" id="fe">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
          <SectionHeader text="Founding Era Collection"/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-ceci-gray-dark mb-4">Founding Era Collection</h1> */}
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <FEList/>
        </div>
       {/* <button className="flex mx-auto mt-16 text-white bg-ceci-gray-dark border-0 py-2 px-8 focus:outline-none hover:text-ceci-gray-dark hover:greige rounded text-lg">See All in the Founding Era Collection</button> */}
      </div>
    </section>

    <section className="text-gray-600 body-font" id="acwr">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
        <SectionHeader text="Antebellum, Civil War and Reconstruction"/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-ceci-gray-dark mb-4"></h1> */}
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <ACRList/>
        </div>
       {/* <button className="flex mx-auto mt-16 text-white bg-ceci-gray-dark border-0 py-2 px-8 focus:outline-none hover:text-ceci-gray-dark hover:greige rounded text-lg">See All in the Antebellum, Civil War and Reconstruction Collection</button> */}
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10">
        <SectionHeader text="American Century Collection"/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-ceci-gray-dark mb-4">American Century Collection</h1> */}
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <ACList/>
        </div>
       {/* <button className="flex mx-auto mt-16 text-white bg-ceci-gray-dark border-0 py-2 px-8 focus:outline-none hover:text-ceci-gray-dark hover:greige rounded text-lg">See All in the American Century Collection</button> */}
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10" id="lit">
        <SectionHeader text="Literature and Culture Collection"/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-ceci-gray-dark mb-4">Literature and Culture Collection</h1> */}
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <LACList/>
        </div>
       {/* <button className="flex mx-auto mt-16 text-white bg-ceci-gray-dark border-0 py-2 px-8 focus:outline-none hover:text-ceci-gray-dark hover:greige rounded text-lg">See All in the Literature and Culture Collection</button> */}
      </div>
    </section>
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-10" id="arch">
        <SectionHeader text="Architecture"/>
      {/* <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-ceci-gray-dark mb-4">Architecture</h1> */}
{/*       <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
 */}        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/2 w-full"> 
        <div className="greige rounded flex p-4 h-full items-center">
        <img className="flex-shrink-0 mr-4" src={"https://ik.imagekit.io/uvapress/rotunda/arch_sm.png"} width="50px" alt="archipedia"/>
             <Link to={`../../title/ARCHI`}><span className="title-font font-medium">SAH Archipedia</span></Link>
        </div></div>
        </div>
      </div>
    </section>
   
 {/*    <section id="timeline"
    className="hidden md:block">
    <SectionHeader text="Timeline of Rotunda Publications"/>
      <h1 className="sm:text-3xl text-2xl font-thin title-font tracking-wider text-ceci-gray-dark mb-4 text-center">Timeline of Rotunda Documentary Collections</h1>
      <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-500s py-5 text-center font-display">Note: The year ranges represent the earliest and latest documents in each publication</p>
      <div ref={timelineEl} /></section> */}
    </div>
   </Layout>
    
 )
}

export const query = graphql`
  query {
    rotLogo: file(relativePath: {eq: "rotunda_logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout:FIXED, placeholder: TRACED_SVG)
        }
      }
      staffs: allMarkdownRemark(filter: {frontmatter: {department: {in: "ROT"}}},sort: {fields: frontmatter___title}) {
        edges {
          node {
            ...MiniBioFragment
          }
        }
      }
      
  }
`