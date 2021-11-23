import React from "react"
import RelatedBook from "../components/RelatedBook"
import { GatsbyImage } from "gatsby-plugin-image"
import PageHeader from "../components/PageHeader"
import BackArrow from "../components/BackArrow"

 const NewsPageTemplate = ({title, content, related_list, pic, contentComponent }) => {

    return (
      <section className="text-gray-600">
      <div className="container px-5 py-12 mx-auto"> 
        <div className="flex flex-row px-5 inline-flex items-center w-full leading-normal">
         <BackArrow/>
                <a
                  href={`../../publicity`}
                  className="block p-2  text-xs font-thin uppercase "
                >All News</a>
        </div>
     <PageHeader text={title}/>
    
    
      <div className="flex flex-col md:flex-row leading-relaxed font-serif ">
      {related_list && 
                <>
                 <div className="order-last px-5 pb-7 flex md:flex-col flex-row items-center ">
                <h6 className="hidden md:block uppercase py-2 font-thin tracking-widest font-sans">Related</h6>
                {related_list.map(book => (
                <RelatedBook id={book.id} title={book.Title}/>
               
    
            ))}</div></>
            }
        <div className="md:w-4/5">
          {pic && <div className="float-left px-10 pb-5"><GatsbyImage image={pic} alt="related image"/></div> }
         <div className="cms" dangerouslySetInnerHTML={{ __html: content }} />    
               
      </div>
      
      </div>
       
      </div>
      </section>
  
    );
  }

export default NewsPageTemplate