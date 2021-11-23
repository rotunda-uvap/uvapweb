
import React from 'react'
import NewsPageTemplate from "../../components/NewsPageTemplate"

const NewsPagePreview = ({ entry, widgetFor }) => (
  <NewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    related_list={entry.getIn(['data', 'related_books'])}
    pic={entry.getIn(['data', 'news_image'])}
  />
)



export default NewsPagePreview
