import React from 'react';
import NewsPageTemplate from '../../components/NewsPageTemplate';

const NewsPagePreview = ({ entry, widgetFor, getAsset }) => {
  const title = entry?.getIn(['data', 'title']) || 'Preview Title';
  const body = widgetFor ? widgetFor('body') : 'Preview content loading...';
  const imagePath = entry?.getIn(['data', 'image']);
  const pic = imagePath ? getAsset(imagePath) : null;

  return (
    <div>
      <NewsPageTemplate
        title={title}
        content={body}
        pic={pic}
      />
    </div>
  );
};

export default NewsPagePreview;