import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function SupportPage({ data }) {
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
          
          
              <div className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
             <h1 className="font-display font-medium text-3xl text-gray-900 uppercase">Support UVa Press</h1>
             <div className="dropCap">
             <p className="font-serif mt-4">Founded in 1963, UVA Press has published almost 2,000 books in history, the humanities, architecture and design, culture, and on ideas and places important to Virginians. Our ground-breaking digital imprint, Rotunda, extends the reach of scholarship across the world through primary sources available to students, faculty, and scholars. UVA Press seeks new voices, illuminates new perspectives, and fuels aspirations for our shared world. Through our mission as a scholarly press, we strive to provoke new and inclusive thinking that improves the human condition.</p>
         </div> <p className="leading-relaxed">The University of Virginia Press appreciates the support of individuals, organizations, and foundations. Please join us in this important work.

<p className="mt-4"><span className="font-medium">Martin Society—</span>Gifts of $10,000 and above advance ideas through print and digital content that “ring the bell” on the systemic issues that tear at our shared humanity.
</p>
<p>
<span className="font-medium">Bemiss Society—</span>Gifts of $5,000 to $9,999 fund new scholarship from scholars and writers whose voices have not historically been heard or valued.
</p>
<p>
<span className="font-medium">Cowan Society—</span>Gifts of $2,500-$4,999 fund scholarship from international scholars and writers from the Caribbean, Africa, and the Global South
</p><p>
<span className="font-medium">Kaserlian Society—</span>Gifts of $1,000-$2,499 fund new venues and opportunities for interdisciplinary scholarly dialogue and symposia that address global challenges
</p>
<p>
<span className="font-medium">Saunders Society—</span>Gifts of any amount support access to scholarship for students, faculty, scholars, and community members through open-access books, the digital imprint, and book series that advance new approaches to fields of study.</p>
   </p>         </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Make a Gift</h2>
          <p>Gifts can be made online through the UVA Giving at the button below or by mail:</p>

<ul className="ml-4"><li>University of Virginia Press Unrestricted Gift Fund</li>
<li>Attention: Samantha Anderson-Jackson</li>
<li>Bemiss House</li>
<li>210 Sprigg Lane</li>
<li>Charlottesville, VA 22903</li></ul>

<p className="mt-4">Please direct questions to Suzanne Morse Moomaw, Director of the University of Virginia Press, swm2x@virginia.edu or 434-924-6064.</p>
      
         <a href="https://securelb.imodules.com/s/1535/16-uva/giving.aspx?sid=1535&gid=16&pgid=684&cid=1509&appealcode=21UVAQ14WG&bledit=1&dids=4515&sort=1"><button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make a Gift Online</button></a>
    </div>
  </div>
</div>
        </Layout>

 )
}



export const query = graphql`
  query {
   
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Support UVa Press"}}) {
        html
      }
  }
`
