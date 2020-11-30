import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import "./search.css"
import React from 'react'
import { Link } from "gatsby"

const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);
const Hit = ( {hit}) => <span><Link to={`../title/${ hit.BookID }`}><h6 className="font-black">{ hit.Title }</h6></Link>

<p dangerouslySetInnerHTML={{ __html: hit.MainDescription.html.split(' ').splice(0, 30).join(' ') + '...' }}/></span>
const Search = () => (
    <InstantSearch searchClient={searchClient} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}>
      <SearchBox className="p-2 m-1" />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
export default Search;
