import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BookHorizontalTabs from "../components/BookHorizontalTabs"


const bookPage = ({ data }) => {
    const book = data.booksJson
    const imageData = getImage(data.file)
    const isbn = book.Bindings[0].ISBN
    const GoogleB = 'https://books.google.com/books?vid=' + isbn
    const resources = data.markdownRemark
    const news = data.newsMD
 return (
   
   <Layout>

    <section className="grid md:grid-cols-3 md:gap-10 py-3" >
      
      <div className="col-span-1">
      <GatsbyImage image={imageData} alt="book cover" />


      </div>
      <div className="md:col-span-2">   
          <div>
        <h2 className="py-5 font-black leading-snug">{book.Title}</h2> 
        {book.InternalSeriesVolume && <h6 className="py-3">{book.InternalSeriesVolume}</h6> }

        {book.Subtitle && <h5 className="italic py-3">{book.Subtitle}</h5>}

        <h6 className="py-3">by {book.AuthorCredit}</h6>
          </div>

          <div>
        {book.Bindings.map(binding => (
         <>
          <div className="bg-white rounded  w-full leading-normal">
                <a href={binding.buylink} className="block group hover:bg-blue-200 p-2 border-b">
                  <div className="font-bold text-normal  uppercase">{binding.type} <span className="pl-2 font-normal">${binding.price}</span> </div>
                  <div className="font-thin ">{binding.date} {- binding.pages} pages - ISBN: {binding.ISBN}</div>
                  
                  </a>
                 
             </div>  
         
        
        </>
         ))} 
        </div>
        <div>
       
       <section>
         <div className="py-3">{book.Series && <div><span className="text-xs uppercase pr-5">Series:</span>
          <button className="text-white text-sm bg-blue-400 rounded-md p-2">
            <Link to={`../../series/${ book.Series.seriesID }`}>{ book.Series.name }</Link>
            </button></div>}
            </div>
          <div className="py-3">
            {book.Subject && <div><span className="text-xs uppercase pr-5">subject:</span>
       <button className="text-white text-sm rounded-md bg-blue-500 p-2">
         <Link to={`../../subject/${ book.Subject.subjectID }`}>{ book.Subject.name }</Link></button></div>}
          </div>
      
         </section> 
         <section>
    <a href={GoogleB}><img src="/gbs_preview_sticker1.png" alt="view on google books" /></a>
    </section>
    </div>

    </div>
    </section>
        
 <div>
 </div>
   <section id="lg_horiz_tabs" className="py-10 hidden md:block">
        <BookHorizontalTabs summary={book.MainDescription.html} reviews={book.Reviews} bio={book.BioNote.html}/>
    </section>

    <section id="sm_horiz_tabs" className="py-10 md:hidden">
        <BookHorizontalTabs summary={book.MainDescription.html} reviews={book.Reviews} bio={book.BioNote.html}/>
    </section>
    
    {resources && 
    <section className="py-3">
      <p className="font-black uppercase py-3 px-5 border-b-4 border-white hover:border-black">Additional Resources</p>
      {resources.frontmatter.attached_links && <ul> {resources.frontmatter.attached_links.map(edge => (
        
        <li className="p-2">
        <a href={edge.link} target="_blank" rel="noreferrer">{edge.name}</a>
        </li>
        
      ))}
      </ul>
      }
      
    </section>}

    {news && 
    <section className="py-3">
    <p className="font-black uppercase py-3 px-5 border-b-4 border-white hover:border-black">Related News</p>

      
            <article className="flex flex-wrap place-content-center p-5 shadow-md hover:bg-black hover:text-white">
                <div className="mx-auto w-4/5"><h3 className="text-xl font-black uppercase py-5 text-center" key={news.frontmatter.title}><Link to={news.frontmatter.type}>{ news.frontmatter.title }</Link></h3>
                </div>
                <Link to={`../../${news.frontmatter.type}${news.fields.slug}`}>
                  <button className="rounded bg-gray-400 text-white font-black p-5 text-center uppercase">go to article</button></Link>
                </article>
            
    </section>}


   

  


   </Layout>
    
 )
}

export default bookPage

export const query = graphql`
  query($id: String!, $imageid: String, $bid: String) {
    booksJson(id: { eq: $id }) {
      id
      BookID
      Title
      Subtitle
      CoverImageFull
      Bindings {
        type
        ISBN
        price
        pages
        date
        buylink
      }
      AuthorCredit
      Reviews {
        attribution
        html
      }
      ISBNs
      MainDescription {
        html
      }
      BioNote {
        html
      }
      Series {
        seriesID
        name
      }
      Subject{
        subjectID
        name
      }
      InternalSeriesVolume
    }
    file(relativePath: {eq: $imageid}) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "resource"}, attached_book: {eq: $bid}}) {
      id
      frontmatter {
        attached_links {
          link
          name
        }
        attached_book
      }
    }
    newsMD: markdownRemark(frontmatter: {templateKey: {eq: "news"}, related_book: {elemMatch: {id: {eq: $bid}}}}) {
      id
      frontmatter {
        title
        related_book {
          id
        }
        type
      }
      fields {
        slug
      }
    }
  }
`
