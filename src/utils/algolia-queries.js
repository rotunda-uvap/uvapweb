

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

/* const RotundaQuery = `{
  rotundas: AllRotundaJson {
    edges {
      node {
        id
        RotID
        Title
        Subtitle
        MainDescription {
          html
        }
        EditorCredit
      }
        
    }
  }
}` */

/* const PageQuery = `{
  pages: AllMarkdownRemark {
    edges {
      node {
        html
        fields {
          slug
        }
      }  
    }
  }
}` */

/* function RotundaToAlgoliaRecord({ node: { id, RotID, Title, Subtitle, MainDescription, MainCollection, SubCollection, EditorCredit } }) {
  return {
    objectID: id,
    RotID,
    Title,
    Subtitle,
    MainDescription,
    AuthorCredit: EditorCredit,
    Subject: MainCollection,
    Series: SubCollection
  }
}

function PageToAlgoliaRecord({ node: { id, html, fields } }) {
  return {
    objectID: id,
    html,
    fields
  }
} */
function bookToAlgoliaRecord({ node: { id, BookID, Title, Subtitle, MainDescription, AuthorCredit, Subject, Series, List, DaysSincePublication, PublicationDate, ISBNs} }) {
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
    settings: { attributesToSnippet: [`MainDescription:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit', 'ISBNs'], attributesForFaceting: ['Series.name', 'Subject.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  }/* ,
  {
    query: RotundaQuery,
    transformer: ({ data }) => data.rotundas.edges.map(RotundaToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`MainDescription.html:20`], searchableAttributes: ['Title', 'Subtitle', 'MainDescription', 'AuthorCredit'], attributesForFaceting: ['MainCollection', 'SubCollection'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
  {
    query: PageQuery,
    transformer: ({ data }) => data.pages.edges.map(PageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`html:20`], searchableAttributes: ['Title', 'html'], attributesForFaceting: ['Series.name', 'Subject.name', 'List'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  }, */
]

module.exports = queries