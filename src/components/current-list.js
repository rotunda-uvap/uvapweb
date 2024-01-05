import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import BookCard from "./BookCard"


const CurrentList = () => {
  const data = useStaticQuery(graphql`
  query  {
    allBooksJson(filter: {List: {eq: "Spring 2024"}}) {
      edges {
        node {
          ...BookQFragment
          PublicationDate
          
        }
      }
    }
  }
  
  `);
  return  <section>
       

  <div className="flex flex-wrap ">
      {data.allBooksJson.edges.map((edge, index) => (
      
            <BookCard fields={edge.node} key={`cl${index}`}/>
       
    ))}
  </div>
  </section> ;
}

export default CurrentList

