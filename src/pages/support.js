import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"

export default function SupportPage({ data }) {
 return (
    
        <Layout>
          <SeO title="Support UVA Press"/>
          
              <div className="mx-auto text-gray-600">
              <PageHeader text={'Support UVa Press'}/>
            <div className="flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
             <div className="dropCap">
             <p className="font-serif mt-4">Founded in 1963, UVA Press has published almost 2,000 books in history, the humanities, architecture and design, culture, and on ideas and places important to Virginians. Our ground-breaking digital imprint, Rotunda, extends the reach of scholarship across the world through primary sources available to students, faculty, and scholars. UVA Press seeks new voices, illuminates new perspectives, and fuels aspirations for our shared world. Through our mission as a scholarly press, we strive to provoke new and inclusive thinking that improves the human condition.</p>
         
         <p className="leading-relaxed">The University of Virginia Press appreciates the support of individuals, organizations, and foundations. Please join us in this important work with a tax-deductible gift of any amount.</p>
</div> 
<p className="mt-4"><span className="font-medium">Martin Society—</span>Gifts of $10,000 and above. Beloved by generations of students, faculty, and alumni, Henry Martin worked at the University of Virginia from 1847 to 1910, most famously in the Rotunda as head bell ringer, marking the class periods and the beginning and ending of each day. 
</p>
<p>
<span className="font-medium">Bemiss Society—</span>Gifts of $5,000 to $9,999. Samuel M. Bemiss was the founder of the University of Virginia Press in 1963 and for whom the Press office building is named.
</p>
<p>
<span className="font-medium">Cowan Society—</span>Gifts of $2,500-$4,999 From 1969-1987, Walker Cowen served as the longest running director of UVA Press and for whom is named the Press’s prize in 18th Century Studies.
</p><p>
<span className="font-medium">Kaiserlian Society—</span>Gifts of $1,000-$2,499 Penny Kaiserlian served as the Press Director for 11 years, overseeing the launching of its cutting-edge Rotunda Digital platform and its open access Founders Online.
</p>
<p>
<span className="font-medium">Saunders Society—</span> Gifts of any amount support access to scholarship for students, faculty, scholars, and community members. A published novelist, Mark Saunders was the Press’s 5th director and played a central in putting the Press at the forefront of innovation in digital scholarship. </p> 
 </div>
          <div className="lg:w-2/6 md:w-1/2 greige rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Make a Gift</h2>
          <p>Gifts can be made online through the UVA Giving at the button below or by mail:</p>

<ul className="ml-4 font-bold font-serif"><li>University of Virginia Press Unrestricted Gift Fund</li>
<li>Attention: Jeff Shifflett</li>
<li>Bemiss House</li>
<li>210 Sprigg Lane</li>
<li>Charlottesville, VA 22903</li></ul>

<p className="pt-2">Please direct questions to <a href="mailto:eab7fb@virginia.edu">Eric Brandt</a>, Director of the University of Virginia Press, or 434-982-3033.</p>
      
         <a href="https://www.givecampus.com/xypyf3" className="inline-block w-full text-center text-white bg-ceci-gray-dark border-0 py-2 px-8 hover:bg-ceci-gray-mid rounded text-lg">Make a Gift Online</a>
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
