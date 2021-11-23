
import React from 'react'
import NewsPageTemplate from "../../components/NewsPageTemplate"

const NewsPagePreview = ({ entry, widgetFor }) => {
    
    const books = entry.getIn(['data', 'related_book'])
    
    return (
 <NewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    pic={entry.getIn(['data', 'image'])}
    related_list={books && books.toJS()}
  />
)
}
export default NewsPagePreview
