import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BookHorizontalTabs from "../components/BookHorizontalTabs"


const bookPage = ({ data }) => {
    const book = data.booksJson
    // const imageData = getImage(data.file)
    const isbn = book.Bindings[0].ISBN
    const GoogleB = 'https://books.google.com/books?vid=' + isbn
    const resources = data.markdownRemark
    const news = data.newsMD
    const imglink = 'https://www.upress.virginia.edu/sites/default/files/covers/' + book.BookID + '.jpg'
    const imglink_sm = 'https://www.upress.virginia.edu/sites/default/files/covers/' + book.BookID + '_M.jpg'
 return (
   
   <Layout>

    <section className="grid md:grid-cols-3 md:gap-10 py-3 ml-6 " >
      
      <div className="col-span-1">
      {/* <GatsbyImage image={imageData} alt="book cover" /> */}
      <img className="hidden md:block" src={imglink} alt="cover"/>
      <img className="md:hidden mx-auto" src={imglink_sm} alt="mobile cover"/>
      </div>
      <div className="md:col-span-2 pr-5 md:px-10">   
          <div>
        <h2 className="py-5 leading-snug font-light">{book.Title}</h2> 
        {book.InternalSeriesVolume && <h6 className="py-3">{book.InternalSeriesVolume}</h6> }

        {book.Subtitle && <h5 className="italic py-3 font-light">{book.Subtitle}</h5>}

        <h6 className="py-3 font-light">by {book.AuthorCredit}</h6>
          </div>

          <div>
        {book.Bindings.map(binding => (
         <>
          <div className="bg-white rounded  w-full leading-normal">
                <a href={binding.buylink} className="block group hover:bg-gray-100 p-2 border-b">
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
          <button className="text-gray-700 text-sm greige rounded-md p-2">
            <Link to={`../../series/${ book.Series.seriesID }`}>{ book.Series.name }</Link>
            </button></div>}
            </div>
          <div className="py-3">
            {book.Subject && <div><span className="text-xs uppercase pr-5">subject:</span>
       <button className="greige text-sm rounded-md text-gray-700 p-2">
         <Link to={`../../subject/${ book.Subject.subjectID }`}>{ book.Subject.name }</Link></button></div>}
          </div>
      
         </section> 
         <section>
    <a href={GoogleB}><img src="/gbs_preview_sticker1.png" alt="view on google books" /></a>
    </section>
    </div>
    <section id="lg_horiz_tabs" className="py-10 hidden md:block">
        <BookHorizontalTabs summary={book.MainDescription.html} reviews={book.Reviews} bio={book.BioNote.html}/>
    </section>

    
    </div>
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
    <p className="font-bold text-sm uppercase text-gray-600">Related News:</p>


      
            <article className="flex flex-wrap place-content-center p-5  ">
            <Link to={`../../${news.frontmatter.type}${news.fields.slug}`}>
                  <button className="rounded greige text-gray-700  p-5 text-center uppercase">article</button></Link>
                <div className="mx-auto w-4/5"><h3 className="text-xl uppercase py-5 font-light text-left" key={news.frontmatter.title}><Link to={`../../${news.frontmatter.type}${news.fields.slug}`}>{ news.frontmatter.title }</Link></h3>
                </div>
                
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
