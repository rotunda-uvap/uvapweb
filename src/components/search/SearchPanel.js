import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats, RefinementList, Pagination, SortBy, PoweredBy} from "react-instantsearch-dom"
import "./search.css"
import React from 'react'
import { Link } from "gatsby"



const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);
const Hit = ( {hit}) => <span><Link to={`../title/${ hit.BookID }`}><h6 className="text-gray-900 uppercase tracking-widest">{hit.Title}</h6></Link>
<h6 className="text-sm italic uppercase text-gray-500 py-2 tracking-widest">{hit.Subtitle}</h6>
<h6 className="text-xs uppercase pt-2 tracking-widest">{hit.AuthorCredit}</h6>

<p className="pt-3" dangerouslySetInnerHTML={{ __html: hit.MainDescription.html.split(' ').splice(0, 15).join(' ') + '...' }}/>
<h6 className="text-xs uppercase pb-5">Published: {hit.PublicationDate}</h6></span>

const SearchPanel = () => (
    <InstantSearch searchClient={searchClient} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME} routing={true}>
      <SearchBox className="p-2 m-1" translations={{ placeholder:'Search for a book'}} />
      <div className="grid md:grid-cols-3">
      <section className="py-5 greige">
      
      <div className="pb-5"><h3 className="text-lg uppercase">Filter by List</h3>
      
      <RefinementList attribute="List"/></div>
        <div><h3 className="text-lg uppercase">Filter by Subject</h3>
      
      <RefinementList attribute="Subject.name"/></div>
      <div className="py-5"><h3 className="text-lg uppercase">Filter by Series</h3>
      <RefinementList attribute="Series.name"/></div></section>
      <section className="col-span-2">
      
        <h3 className="text-lg uppercase pb-5">Results
</h3>

       <div className="border-b border-gray-400 pb-3">
        <SortBy className="text-xs text-gray-600"
          defaultRefinement="Books"
          items={[
            {value: "Books", label:"Most Relevant"},
            {value: "books_date_asc", label:"Most Recent Books First"}
            ]}/>

      <Stats className="text-xs text-gray-600"/>
      </div>
      <Hits className="pt-5" hitComponent={Hit} />
      </section>
      </div>
      
      <Pagination hitsPerPage={10}/>
      <PoweredBy/>
    </InstantSearch>
  );
export default SearchPanel;
