import React from "react"
import { Helmet } from "react-helmet"

const GoogleBooks = ({ISBNS}) => {
  const GBArray = ISBNS.map(ISBN => 'ISBN:'+ ISBN);
    return (
        <>
        <h6>Google Books</h6>
      <Helmet>
        <script type="text/javascript" src="//books.google.com/books/previewlib.js"></script>
        <script type="text/javascript">
          {`GBS_insertPreviewButtonLink(${GBArray});` }
        </script>
      </Helmet>
        </>
      )
  }
  
  export default GoogleBooks