import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import sanitizeHtml from 'sanitize-html'



const ImprintTemplate = ({ data }) => {
    const books = data.allBooksJson
    const imprintinfo = data.markdownRemark
    const related_staff = data.markdownRemark.frontmatter.related_staff
  
    return (
    <div>

        <Layout>
            <SeO title={imprintinfo.frontmatter.title}/>
            <PageHeader text={imprintinfo.frontmatter.title}/>
            
            <section className="py-4 border-b-2 border-gray-100">
            {imprintinfo.html ? <div className="pt-5 cms dropCap text-lg text-ceci-gray-dark leading-relaxed" dangerouslySetInnerHTML={{ __html: sanitizeHtml(imprintinfo.html)}}/> :<div/> }
            {imprintinfo.frontmatter.editors ? <div className="text-ceci-gray-mid leading-relaxed font-serif ml-4 cms" dangerouslySetInnerHTML={{ __html: sanitizeHtml(imprintinfo.frontmatter.editors) }}/> : <div/> }
            {imprintinfo.frontmatter.moreEditors ? <div className="text-ceci-gray-mid leading-relaxed font-serif pt-2 ml-4 cms" dangerouslySetInnerHTML={{ __html: sanitizeHtml(imprintinfo.frontmatter.moreEditors )}}/> : <div/> }

  {
    related_staff && <div className="pt-2 text-ceci-gray-mid leading-relaxed font-serif ml-4 cms">UVA Editor(s): 
    
    { related_staff.map((staff, index) => (

    
     <Link to={'../../staff/' + staff.frontmatter.title.replace(" ", "-").toLowerCase()} key={`staff${index}`}> 
      { ' ' + (index ? '& ' : '') + staff.frontmatter.title }
     
     </Link> )) 
   
  }
</div>}
               </section> 
                
                <section className="py-4">
<SectionHeader text={'Books in this Imprint'}/> 
   <div className="flex flex-wrap gap-2 py-5">
                        {books.edges.map((edge, index) => (
                  
                  <BookCard fields={edge.node} key={`imp${index}`} />
                    
                    ))}
                        </div> 
                       
                </section>
               
             
               
            
        </Layout>
  </div>
    )
    
    ;
};

export default ImprintTemplate; 

export const query = graphql`
    query($id: Int){
        allBooksJson(filter: {Imprint: { elemMatch: {imprintID: {eq: $id}}}})
          {
            edges {
                node {
                  ...BookQFragment
                  Imprint {
                    imprintName
                    imprintID
                  }
                  
                }
            }
        }  
        markdownRemark(frontmatter: {imprintID: {eq: $id}, templateKey: {eq: "imprint"}}) {
          
                frontmatter {
                  templateKey
                  title
                  editors
                  moreEditors
                  imprintID
                  related_staff {
                    frontmatter {
                     title
              }
                }
                }
                html
            
            
          } 
    }
`