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
        keywords
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

function bookToAlgoliaRecord({ node }) {
  return {
    objectID: node.id,
    BookID: node.BookID,
    Title: node.Title,
    Subtitle: node.Subtitle,
    MainDescription: node.MainDescription,
    AuthorCredit: node.AuthorCredit,
    Subjects: node.Subjects,
    TableOfContents: node.TableOfContents,
    internal: node.internal,
    Series: node.Series,
    List: node.List,
    ISBNs: node.ISBNs,
    DaysSincePublication: node.DaysSincePublication,
    PublicationDate: node.PublicationDate,
    CoverImageMain: node.CoverImageMain,
    keywords: Array.isArray(node.keywords)
      ? node.keywords
      : node.keywords
        ? [String(node.keywords)]
        : []
  };
}

const queries = [
  {
    query: bookQuery,
    transformer: ({ data }) => data.books.edges.map(bookToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`MainDescription:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit', 'ISBNs', 'keywords', 'TableOfContents', 'internal.contentDigest', 'CoverImageMain'], attributesForFaceting: ['Series.name', 'Subjects.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries