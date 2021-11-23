
import React from 'react'
import NewsPageTemplate from "../../components/NewsPageTemplate"

const NewsPagePreview = ({ entry, widgetFor }) => (
  <NewsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)



export default NewsPagePreview
