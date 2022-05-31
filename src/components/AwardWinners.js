import React from "react"
import { StaticQuery, graphql} from "gatsby"
import BookCard from "./BookCard"
import SectionHeader from "./SectionHeader"

export default function AwardWinners() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {Prizes: {regex: "/.[A-Z]/"}}) {
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
<SectionHeader text={'Award Winners'}/>
        <div className="container px-5 py-5 flex flex-wrap">
          {data.allBooksJson.edges.map((edge, index) => (
         
          <BookCard fields={edge.node} key={index} />
      
      ))}
      </div>
      </section>
      )}
    />
  )
}