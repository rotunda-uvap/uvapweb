import React from "react"
import { RelatedProducts } from '@algolia/recommend-react';
import algoliarecommend from '@algolia/recommend';
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react';
import BookCard from "../BookCard";

import '@algolia/ui-components-horizontal-slider-theme';


const recommendClient = algoliarecommend(
  'H62E0I37SN',
  'e434857be3fe7ac2d365652ce719762e'
);

function RelatedItem({ item }) {
    return (
        <>
      <BookCard fields={item} /> 
        </>
      /* <pre>
        <code>{JSON.stringify(item)}</code>
      </pre> */
    );
  }

  
const Related = ({ productObjectID }) => {
    return (
      <RelatedProducts
        recommendClient={recommendClient}
        indexName="Books"
        objectIDs={[productObjectID]}
        itemComponent={RelatedItem}
        maxRecommendations={5}
        view={HorizontalSlider}
      />
    );
  }

export default Related