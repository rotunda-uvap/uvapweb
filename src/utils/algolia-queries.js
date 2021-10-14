

const indexName = `Books`

const bookQuery = `{
  books: allBooksJson {
    edges {
      node {
        id
        BookID
        Title
        Subtitle
        Series {
          name
        }
        Subject{
          name
        }
        List
        PublicationDate
        DaysSincePublication
        MainDescription {
            html
        }
        AuthorCredit
      }
    }
  }
}`

function bookToAlgoliaRecord({ node: { id, BookID, Title, Subtitle, MainDescription, AuthorCredit, Subject, Series, List, DaysSincePublication, PublicationDate} }) {
  return {
    objectID: id,
    BookID,
    Title,
    Subtitle,
    MainDescription,
    AuthorCredit,
    Subject,
    Series,
    List,
    DaysSincePublication,
    PublicationDate
  }
}

const queries = [
  {
    query: bookQuery,
    transformer: ({ data }) => data.books.edges.map(bookToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`MainDescription:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit'], attributesForFaceting: ['Series.name', 'Subject.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries