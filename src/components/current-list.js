import React from "react"
import { StaticQuery, graphql} from "gatsby"
import BookCard from "./BookCard"



export default function CurrentList() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {List: {eq: "Spring 2022"}}) {
          edges {
            node {
              ...BookQFragment
              PublicationDate
              
            }
          }
        }
      }
      
      `} 
      render={data => (
        <section>
       

      <div className="flex flex-wrap ">
          {data.allBooksJson.edges.map((edge, index) => (
          
                <BookCard fields={edge.node} key={index}/>
           
        ))}
      </div>
      </section>
      )}
    />
  )
}