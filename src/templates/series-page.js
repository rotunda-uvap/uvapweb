import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookCard from "../components/BookCard"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import sanitizeHtml from 'sanitize-html'



const SeriesTemplate = ({ data }) => {
    const books = data.allBooksJson
    const seriesinfo = data.markdownRemark
    const related_staff = data.markdownRemark.frontmatter.related_staff
  
    return (
    <div>

        <Layout>
            <SeO title={seriesinfo.frontmatter.title}/>
            <PageHeader text={seriesinfo.frontmatter.title}/>
            <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d=" M11 19l-7-7 7-7m8 14l-7-7 7-7" clipRule="evenodd" />
    </svg>
            <a
              href={`../../books#series`}
              className="block p-2  text-xs font-thin tracking-wide uppercase "
            >All Series</a>
    </div>
            <section className="py-4 border-b-2 border-gray-100">
            <div className="ml-4 text-center uppercase text-ceci-gray-mid tracking-wider font-thin"><Link to={'/series'}>{seriesinfo.frontmatter.status} series</Link></div>
            {seriesinfo.html ? <div className="pt-5 cms dropCap text-lg text-ceci-gray-dark leading-relaxed" dangerouslySetInnerHTML={{ __html: sanitizeHtml(seriesinfo.html)}}/> :<div/> }
            {seriesinfo.frontmatter.editors ? <div className="text-ceci-gray-mid leading-relaxed font-serif ml-4 cms" dangerouslySetInnerHTML={{ __html: sanitizeHtml(seriesinfo.frontmatter.editors) }}/> : <div/> }
            {seriesinfo.frontmatter.moreEditors ? <div className="text-ceci-gray-mid leading-relaxed font-serif pt-2 ml-4 cms" dangerouslySetInnerHTML={{ __html: sanitizeHtml(seriesinfo.frontmatter.moreEditors )}}/> : <div/> }






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
<SectionHeader text={'Books in this Series'}/> 
   <div className="flex flex-wrap gap-2 py-5">
                        {books.edges.map((edge, index) => (
                  
                  <BookCard fields={edge.node} key={`ser${index}`} />
                    
                    ))}
                        </div> 
                       
                </section>
               
             
               
            
        </Layout>
  </div>
    )
    
    ;
};

export default SeriesTemplate; 

export const query = graphql`
    query($id: String!){
        allBooksJson(filter: {Series: {seriesID: { eq: $id }}}, sort: {fields: DaysSincePublication}) {
            edges {
                node {
                  ...BookQFragment
                  Series {
                    name
                    seriesID
                  }
                  DaysSincePublication
                  
                }
            }
        }  
        markdownRemark(frontmatter: {seriesID: {eq: $id}, templateKey: {eq: "series"}}) {
          
                frontmatter {
                  status
                  type
                  templateKey
                  title
                  editors
                  moreEditors
                  seriestype
                  seriesID
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