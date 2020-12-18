import React from "react"
import RelatedBook from "./RelatedBook"

const FeatPromo = ({title, link, relbooks, body}) => {
    const related_books = relbooks.split(',')

    return (
        
        <div className="container mx-auto px-6 py-10">
         
            <div className="flex flex-col mx-auto place-content-center">
    <h2 className="text-5xl font-bold my-5">{title} </h2>
    <p className="pt-2" dangerouslySetInnerHTML={{ __html: body }}></p>
            </div>
            <div className="grid md:grid-cols-5 md:gap-2">
            {related_books && related_books.map(book => (
            <> 
            <RelatedBook id={book}/>
            </>
        ))}
        </div>
       
        </div>
    
        
      )
  }
  
  export default FeatPromo