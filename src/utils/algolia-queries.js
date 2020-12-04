

const indexName = `Books`

const bookQuery = `{
  books: allBooksJson {
    edges {
      node {
        id
        BookID
        Title
        Subtitle
        Subject
        Series
        MainDescription {
            html
        }
        AuthorCredit
      }
    }
  }
}`

function bookToAlgoliaRecord({ node: { id, BookID, Title, Subtitle, MainDescription, AuthorCredit, Subject, Series } }) {
  return {
    objectID: id,
    BookID,
    Title,
    Subtitle,
    MainDescription,
    AuthorCredit,
    Subject,
    Series
  }
}

const queries = [
  {
    query: bookQuery,
    transformer: ({ data }) => data.books.edges.map(bookToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries