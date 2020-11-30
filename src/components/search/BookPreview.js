import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
const BookPreview = ({ hit }) => {

  return (
    <article className="mt-0 pb-1 flex flex-col border-b-1 ">
      <h3>
        <Link to={hit.path}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      </h3>
     
    </article>
  );
}

export default BookPreview;