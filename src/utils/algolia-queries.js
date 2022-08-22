

const indexName = `Books`

const bookQuery = `{
  books: allBooksJson {
    edges {
      node {
        id
        BookID
        Title
        ISBNs
        Subtitle
        Series {
          name
        }
        Subjects {
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

function bookToAlgoliaRecord({ node: { id, BookID, Title, Subtitle, MainDescription, AuthorCredit, Subjects, Series, List, DaysSincePublication, PublicationDate, ISBNs} }) {
  return {
    objectID: id,
    BookID,
    Title,
    Subtitle,
    MainDescription,
    AuthorCredit,
    Subjects,
    Series,
    List,
    ISBNs,
    DaysSincePublication,
    PublicationDate
  }
}

const queries = [
  {
    query: bookQuery,
    transformer: ({ data }) => data.books.edges.map(bookToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`MainDescription:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit', 'ISBNs'], attributesForFaceting: ['Series.name', 'Subjects.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries