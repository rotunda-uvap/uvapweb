import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats, RefinementList, Pagination} from "react-instantsearch-dom"
import "./search.css"
import React from 'react'
import { Link } from "gatsby"

const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);
const Hit = ( {hit}) => <span><Link to={`../title/${ hit.BookID }`}><h6 className="font-black uppercase">{hit.Title}</h6></Link><h6 className="text-sm uppercase">{hit.Subtitle}</h6><h6 className="text-xs uppercase">{hit.AuthorCredit}</h6>

<p dangerouslySetInnerHTML={{ __html: hit.MainDescription.html.split(' ').splice(0, 30).join(' ') + '...' }}/></span>
const Search = () => (
    <InstantSearch searchClient={searchClient} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}>
      <SearchBox className="p-2 m-1" translations={{ placeholder:'Search for a book'}} />
      <div className="grid md:grid-cols-3">
      <section className="py-5">
        <div><h3 className="text-lg uppercase">Filter by Subject</h3>
      
      <RefinementList attribute="Subject"/></div>
      <div className="py-5"><h3 className="text-lg uppercase">Filter by Series</h3>
      <RefinementList attribute="Series"/></div></section>
      <section className="col-span-2">
        <h3 className="text-lg uppercase pt-5">Results</h3>
      <Stats/>
      <Hits hitComponent={Hit} />
      </section>
      </div>
      
      <Pagination/>
    </InstantSearch>
  );
export default Search;
