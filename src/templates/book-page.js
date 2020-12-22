import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BookHorizontalTabs from "../components/BookHorizontalTabs"


export default ({ data }) => {
    const book = data.booksJson
    const imageData = getImage(data.file)
    
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
            <Link to={`../../series/${ book.Series }`}>{ book.Series }</Link>
            </button></div>}
            </div>
          <div className="py-3">
            {book.Subject && <div><span className="text-xs uppercase pr-5">subject:</span>
       <button className="text-white text-sm rounded-md bg-blue-500 p-2">
         <Link to={`../../subject/${ book.Subject }`}>{ book.Subject }</Link></button></div>}
          </div>
      
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
    
    <section>
      
    </section>

  


   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!, $imageid: String) {
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
      Series
      Subject
      InternalSeriesVolume
    }
    file(relativePath: {eq: $imageid}) {
      childImageSharp {
        gatsbyImageData(maxWidth: 300, layout: FLUID, placeholder: TRACED_SVG)
      }
    }
    
  }
`
