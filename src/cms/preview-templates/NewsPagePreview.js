
import React from 'react'
import NewsPageTemplate from "../../components/NewsPageTemplate"

const NewsPagePreview = ({ entry, widgetFor, getAsset }) => {
    
  //  const books = entry.getIn(['data', 'related_book', 'Files'])
   // const rbooks = books && books.toJS() 

    return (
 <NewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    pic={getAsset(entry.getIn(['data', 'image']))}
    //related_list={rbooks}
  />
)
}
export default NewsPagePreview
