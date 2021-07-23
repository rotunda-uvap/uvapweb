import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BookHorizontalTabs from "../components/BookHorizontalTabs"
import SEO from "../components/SEO"
import ShareButtons from "../components/ShareButtons"


const bookPage = ({ data }) => {
    const book = data.booksJson
    // const imageData = getImage(data.file)
    const isbn = book.Bindings[0].ISBN
    const GoogleB = 'https://books.google.com/books?vid=' + isbn
    const resources = data.markdownRemark
    const title = book.Title
    const url = 'https://www.upress.virginia.edu/title/' + book.BookID
    const news = data.newsMD
    const imglink = 'https://www.upress.virginia.edu/sites/default/files/covers/' + book.BookID + '.jpg'
    const imglink_sm = 'https://www.upress.virginia.edu/sites/default/files/covers/' + book.BookID + '_M.jpg'
    const defaultImage = "/static/uvap_sm.png"
 return (
   
   <Layout>
<SEO
  title={book.Title}
  description={book.MainDescription.html.substring(0, 150)}
  pathname={url}
  author={book.AuthorCredit}
  isbn={isbn}
  cover={"https://www.upress.virginia.edu/sites/default/files/covers/" + book.CoverImageFull || defaultImage}
  article={false}
  book={true}
/>
    <section className="grid md:grid-cols-3 md:gap-10 py-3 ml-6 " >
      
      <div className="col-span-1">
      {/* <GatsbyImage image={imageData} alt="book cover" /> */}
      <img className="hidden md:block" src={imglink} alt="cover"/>
      <img className="md:hidden mx-auto" src={imglink_sm} alt="mobile cover"/>
      </div>
      <div className="md:col-span-2 pr-5 md:px-10">   
          <div>
        <h2 className="pb-3 font-light font-sans">{book.Title}</h2> 
        {book.InternalSeriesVolume && <h6 className="py-3">{book.InternalSeriesVolume}</h6> }

        {book.Subtitle && <h6 className="italic font-light text-gray-600">{book.Subtitle}</h6>}

        <h6 className="py-2 font-light font-display">by {book.AuthorCredit}</h6>
          </div>

          <div>
        {book.Bindings.map(binding => (
         <>
          <div className="bg-white rounded  flex flex-row inline-flex items-center w-full leading-normal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
      <a href={binding.buylink} className="block group hover:bg-gray-100 p-2 ml-4 border-b"> 
      <div className="font-bold text-normal  uppercase">{binding.type} <span className="pl-2 font-normal">${binding.price}</span> </div>
     <div className="font-thin font-display ">{binding.date} {- binding.pages} pages - ISBN: {binding.ISBN}</div>
                  </a>
                 
             </div>  
         
        
        </>
         ))} 
         <div className="bg-white rounded  flex flex-row inline-flex items-center w-full leading-normal">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
      <a href={`../../examination_Copy_Form_2021.pdf`} className="block group hover:bg-gray-100 p-2 ml-4 border-b"> 
      <div className="font-bold text-normal  uppercase">Exam Copy  </div>
     <div className="font-thin font-display ">For Instructors or Reviewers</div>
                  </a>
                  
             </div>  
        </div>
        <div>
        <div className="bg-white rounded  flex flex-row inline-flex items-center w-full leading-normal">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
      <a href="https://forms.gle/H8J1NbtN4BBZZwgy7" className="block group hover:bg-gray-100 p-2 ml-4 border-b"> 
      <div className="font-bold text-normal  uppercase">Desk Copy  </div>
     <div className="font-thin font-display ">For Instructors</div>
                  </a>
                  
             </div>  
        </div>
        <div>
       
       <section>
         <div className="py-3">{book.Series && <div><span className="text-xs uppercase pr-5 tracking-wider">Series:</span>
          <button className="text-gray-700 text-sm greige rounded-md p-2 tracking-wider">
            <Link to={`../../series/${ book.Series.seriesID }`}>{ book.Series.name }</Link>
            </button></div>}
            </div>
          <div className="py-1">
            {book.Subject && <div><span className="text-xs uppercase pr-5 tracking-wider">subject:</span>
       <button className="greige text-sm rounded-md text-gray-700 p-2 tracking-wider">
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

    <section>
    <ShareButtons title={title} url={url}/>
    </section>

    {news && 
    <section className="py-3">
    <p className="font-bold text-sm uppercase text-gray-600">Related News:</p>


      
            <article className="flex flex-wrap items-center p-5  ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>
           
                <div className="w-4/5 ml-5"><h3 className="text-xl font-light tracking-wide text-left" key={news.frontmatter.title}><Link to={`../../${news.frontmatter.type}${news.fields.slug}`}>{ news.frontmatter.title }</Link></h3>
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
