

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
        internal {
          contentDigest
        }
        List
        PublicationDate
        DaysSincePublication
        CoverImageMain
        MainDescription {
            html
        }
        AuthorCredit
      }
    }
  }
}`

function bookToAlgoliaRecord({ node: { id, BookID, Title, Subtitle, MainDescription, internal, AuthorCredit, Subjects, Series, List, DaysSincePublication, PublicationDate, ISBNs, CoverImageMain} }) {
  return {
    objectID: id,
    BookID,
    Title,
    Subtitle,
    MainDescription,
    AuthorCredit,
    Subjects,
    internal,
    Series,
    List,
    ISBNs,
    DaysSincePublication,
    PublicationDate,
    CoverImageMain
  }
}

const queries = [
  {
    query: bookQuery,
    transformer: ({ data }) => data.books.edges.map(bookToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`MainDescription:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit', 'ISBNs', 'internal.contentDigest'], attributesForFaceting: ['Series.name', 'Subjects.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries