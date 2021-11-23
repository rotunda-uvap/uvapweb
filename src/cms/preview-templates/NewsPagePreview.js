
import React from 'react'
import {NewsPageTemplate} from "../../templates/news-page"

const NewsPagePreview = ({ entry, widgetFor, getAsset }) => {
    
    const books = entry.getIn(['data', 'related_book'])
    
    return (
 <NewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    pic={getAsset(entry.getIn(['data', 'image']))}
    related_list={books && books.toJS()}
  />
)
}
export default NewsPagePreview
