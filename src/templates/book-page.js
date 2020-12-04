import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"





export default ({ data }) => {
    const book = data.booksJson
    const ImgSrc = "../../covers/" + data.booksJson.CoverImageFull
    
 return (
   
   <Layout>
    

    <section className="grid md:grid-cols-3 py-3">
      
      <div className="col-span-1">
      <img src={ImgSrc} className="max-w-xs" alt="book cover"/>

      </div>
      <div className="md:col-span-2">   
          <div>
        <h2 className="py5 text-4xl font-black mt-5 mb-2">{book.Title}</h2> 
        {book.InternalSeriesVolume && <h3 className="py5 text-1xl mt-2 mb-2">{book.InternalSeriesVolume}</h3> }

        {book.Subtitle && <h3 className="py5 text-2xl italic mt-2 mb-2">{book.Subtitle}</h3>}

        <h3 className="mb-4">by {book.AuthorCredit}</h3>
          </div>

          <div>
        {book.Bindings.map(binding => (
         <>
          <div className="bg-white rounded  w-full leading-normal">
                <a href={binding.buylink} className="block group hover:bg-green-400 p-2 border-b">
                  <div className="font-bold text-normal group-hover:text-white uppercase">{binding.type} <span className="pl-2 font-normal">${binding.price}</span> </div>
                  <div className="font-thin group-hover:text-white">{binding.date} {- binding.pages} pages - ISBN: {binding.ISBN}</div>
                  
                  </a>
                 
             </div>  
         
        
        </>
         ))} 
        </div>
        <div>
        {book.Series && <div><h3>Series</h3> <button className="text-white text-sm bg-green-400 rounded-md p-2"><Link to={`../../series/${ book.Series }`}>{ book.Series }</Link></button></div>}

      {book.Subject && <div><h3 className="mt-3">Subject</h3> <button className="text-white text-sm rounded-md bg-green-600 p-2"><Link to={`../../subject/${ book.Subject }`}>{ book.Subject }</Link></button></div>}
    </div>

    </div>
    </section>

    <section>

      <div class="wrapper">
        <input class="radio" id="one" name="group" type="radio" checked/>
        <input class="radio" id="two" name="group" type="radio"/>
        <input class="radio" id="three" name="group" type="radio"/>
          <div class="tabs">
            <label class="tab" id="one-tab" htmlFor="one">Summary</label>
            <label class="tab" id="two-tab" htmlFor="two">Reviews</label>
            <label class="tab" id="three-tab" htmlFor="three">About the Author(s)</label>
          </div>
        <div class="panels">
            <div class="panel" id="one-panel">
              <div dangerouslySetInnerHTML={{ __html: book.MainDescription.html }}/>
            </div>
            <div class="panel" id="two-panel">
            {book.Reviews.review ? 
    <div className="py-2">
      {book.Reviews.map(review => (
            <>
            <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <blockquote dangerouslySetInnerHTML={{ __html: review.html }}/>
            <h6 className="pl-8 italic text-gray-500">-{review.attribution}</h6>
            </div>
            
            </>
        ))}
    </div> : 
    <div className="py-2"><p>No review available</p></div>
    }
        </div>
            <div class="panel" id="three-panel">
            {book.BioNote.html !== "EMPTY: BioNote" ? 
          <div>
            <p dangerouslySetInnerHTML={{ __html: book.BioNote.html }}/>
            </div> 
          :
              <div><p>No biographical information available</p></div>}
            </div>
        </div>
      </div>

    </section>


   

   

  


   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
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
    
  }
`
