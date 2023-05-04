import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats, RefinementList, Pagination, SortBy, PoweredBy} from "react-instantsearch-dom"
import "./search.css"
import React from 'react'
import { Link } from "gatsby"



const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);

const Hit = ( {hit}) => <div className="py-2 border-b-2 border-gray-300"><a href={`../title/${ hit.BookID }`} target="_blank" className="hover:text-ceci-gray-mid"><h6 className="font-thin text-md py-0 text-ceci-gray-dark tracking-wide uppercase">{hit.Title}</h6>
{hit.Subtitle ? <h6 className="text-sm tracking-wide text-ceci-gray-mid font-thin pb-1 ">{hit.Subtitle}</h6> : ""}
<h6 className="text-xs tracking-widest font-display uppercase">{hit.AuthorCredit}</h6>

<div className="pt-3" dangerouslySetInnerHTML={{ __html: hit.MainDescription.html.split(' ').splice(0, 30).join(' ') + '...' }}/>
<h6 className="text-xs uppercase tracking-wide text-ceci-gray-mid font-thin pb-5">Published: {hit.PublicationDate}</h6></a></div>

const Search = () => (
    <InstantSearch searchClient={searchClient} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME} routing={true}  >
     <label htmlFor="search" className="sr-only">Search</label>
      <SearchBox className="p-2 m-1" translations={{ placeholder:'Search for a book'}} searchAsYouType={false} />
      {/* <SearchBox className="p-2 m-1 w-full" translations={{ placeholder:'Search for a book'}}/> */}

      <div className="flex flex-col md:flex-row gap-8">
     
      <section className="col-span-2" id="results">
      <a href="#filter" className="md:hidden py-6 text-sm tracking-wide font-thin">Filter Results</a>
        <h3 className="text-lg uppercase text-ceci-gray-mid py-2 font-thin tracking-widest">Results
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
      <section className="py-5 md:order-first" id="filter">
      <a href="#results" className="md:hidden py-8 text-sm tracking-wide font-thin">Back to Results</a>

      <div className="pb-5"><h3 className="text-lg border-b border-gray-400 uppercase pb-2 text-ceci-gray-mid font-thin tracking-wider">Filter by List</h3>
      
      <RefinementList attribute="List"/></div>
        <div><h3 className="text-lg uppercase border-b border-gray-400 text-ceci-gray-mid pb-2 font-thin tracking-wider">Filter by Subject</h3>
      
      <RefinementList attribute="Subjects.name"/></div>
      <div className="py-5"><h3 className="text-lg  border-b border-gray-400 uppercase pb-2 text-ceci-gray-mid font-thin tracking-wider">Filter by Series</h3>
      <RefinementList attribute="Series.name"/></div></section>
      </div>
      
      <Pagination/>
      <PoweredBy/>
    </InstantSearch>
  );
export default Search;
