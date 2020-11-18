import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
    const book = data.booksJson
 return (
    <div>
        <h1>{book.Title}</h1>
 <h3>{book.Subject}</h3>
    </div>
 )
}



export const query = graphql`
  query($id: String!) {
    booksJson(id: { eq: $id }) {
        id
        Title
        BookID
        Subject
    }
  }
`
