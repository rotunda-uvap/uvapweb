

const indexName = `Books_new`

const bookQuery = `{
  books: allBooksJson {
    edges {
      node {
        id
        BookID
        Title
        ISBNs
        Subtitle
        CoverImageMain
        Series {
          name
        }
        Subjects {
          name
        }
        TableOfContents {
          html
        }
        internal {
          contentDigest
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

function bookToAlgoliaRecord({ node: { id, BookID, Title, Subtitle, MainDescription, internal, AuthorCredit, Subjects, TableOfContents, Series, List, DaysSincePublication, PublicationDate, ISBNs, CoverImageMain, keywords} }) {
  return {
    objectID: id,
    BookID,
    Title,
    Subtitle,
    MainDescription,
    AuthorCredit,
    Subjects,
    TableOfContents,
    internal,
    Series,
    List,
    ISBNs,
    DaysSincePublication,
    PublicationDate,
    CoverImageMain,
    keywords
  }
}

const queries = [
  {
    query: bookQuery,
    transformer: ({ data }) => data.books.edges.map(bookToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`MainDescription:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit', 'ISBNs', 'TableOfContents', 'internal.contentDigest', 'CoverImageMain', 'keywords'], attributesForFaceting: ['Series.name', 'Subjects.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries