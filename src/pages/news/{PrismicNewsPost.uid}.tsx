import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { withPreview } from 'gatsby-source-prismic';
import { PrismicNewsPostQuery } from '../../../graphql-types';
import { linkResolver } from '../../utils/linkResolver';

export const query = graphql`
  query PrismicNewsPost($uid: String) {
    prismicNewsPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          raw
        }
        subtitle {
          raw
        }
        cover {
          url
          alt
        }
        body {
          raw
        }
      }
    }
  }
`;

const Post = ({ data }: { data: PrismicNewsPostQuery }) => {
  const newsPost = data?.prismicNewsPost?.data;

  if (!newsPost) {
    return <>Post não encontrado</>;
  }

  return (
    <main>
      <h1>{RichText.asText(newsPost?.title?.raw)}</h1>

      <article style={{ maxWidth: '70em' }}>
        <img
          src={newsPost?.cover?.url ?? undefined}
          alt={newsPost?.cover?.alt ?? undefined}
          width={500}
        />

        <RichText render={newsPost?.body?.raw} linkResolver={linkResolver} />
      </article>
    </main>
  );
};

export default withPreview(Post);
