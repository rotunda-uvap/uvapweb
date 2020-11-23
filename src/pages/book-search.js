import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import Layout from "../components/layout"
import { Formik, Form, Field } from 'formik'


const SearchPage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchBooks {
        index
        store
      }
    }
  `)
  const index = queryData.localSearchBooks.index
  const store = queryData.localSearchBooks.store

  const [query, setQuery] = useState('')
  const results = useFlexSearch(query, index, store)


  return (
    <Layout>
      <Formik 
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form className="shadow m-2 w-40">
          <Field name="query" />
        </Form>
      </Formik>
      <h1 className="pb-2">Results</h1>
      <ul className="p-2">
        {results.map(result => (
          <li key={result.id}><Link to={`../title/${ result.bookid }`}>{result.title}</Link> by <span className="text-sm">{result.author}</span></li>
        ))}
      </ul>
    </Layout>
  )
}

export default SearchPage