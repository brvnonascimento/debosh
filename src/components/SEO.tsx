import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta;
  title: string;
}

export const SEO = ({
  title,
  description = '',
  lang = 'en',
  meta = []
}: SEOProps) => {
  const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.author || ''
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>;

interface PropertyMetaObj {
  property: string;
  content: string;
}

interface NameMetaObj {
  name: string;
  content: string;
}

interface QueryTypes {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

// Queries
const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
