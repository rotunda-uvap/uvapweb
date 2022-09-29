import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import BookCard from "./BookCard"
import SectionHeader from "./SectionHeader"

const AwardWinners = () => {
  const data = useStaticQuery(graphql`
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
  
  `);
  return  <section>
  <SectionHeader text={'Award Winners'}/>
          <div className=" mx-auto py-5 flex flex-wrap">
            {data.allBooksJson.edges.map((edge, index) => (
           
            <BookCard fields={edge.node} key={`aw${index}`} />
        
        ))}
        </div>
        </section>;
}

export default AwardWinners

