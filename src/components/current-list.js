import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import "./BookCard.css"


const BookCardWrapper = styled.div`
`

const Subtitle = styled.div`
  
`
const Title = styled.h2`

`
const Author = styled.p`
  margin: 0;

`
const BookImg = styled.p`
  display:none;

`
const BookNo = styled.p`
  display:none;

`
const BookCard = props => (
  <BookCardWrapper className="flex flex-col border-1  shadow-md"
  style={{backgroundImage: "url(" + "'../" + props.bookimg + "'" + ")", 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
 ><div className="bookCard py-7 px-5 text-opacity-0 hover:text-white">
      <BookNo>{props.bookno}</BookNo>
<BookImg>{props.bookimg}</BookImg>
      <Link to={`../title/${ props.bookno }`}><Title className="text-lg">{props.title}</Title></Link>
      <Subtitle className="text-xs">{props.subtitle}</Subtitle>
      <Author className="text-xs">{props.author}</Author></div>
     
  </BookCardWrapper>
)

export default function CurrentList() {
  return (
    <StaticQuery
      query={graphql`
      query  {
        allBooksJson(filter: {List: {eq: "Fall 2020"}}) {
          edges {
            node {
              Title
              Subtitle
              BookID
              AuthorCredit
              CoverImageMain
            }
          }
        }
      }
      
      `}
      render={data => (
        <section>
        <h2>Books in Current Catalog</h2>
        <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
          {data.allBooksJson.edges.map(edge => (
          <>
          <BookCard  bookno={edge.node.BookID} bookimg={edge.node.CoverImageMain} title={edge.node.Title} subtitle={edge.node.Subtitle} author={edge.node.AuthorCredit}/>
                
          
          </>
      ))}
      </div>
      </section>
      )}
    />
  )
}