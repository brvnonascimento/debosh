import { graphql, Link, useStaticQuery } from 'gatsby';
import { NewsPostsQuery } from '../../graphql-types';

const IndexPage = () => {
  const { allPrismicNewsPost } = useStaticQuery<NewsPostsQuery>(graphql`
    query NewsPosts {
      allPrismicNewsPost {
        nodes {
          id
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1>Home Page</h1>

      <ul>
        {allPrismicNewsPost.nodes.map(({ uid, data }) => {
          const title = data?.title;

          return (
            <li>
              <Link to={`/news/${uid}`}>{title?.text}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default IndexPage;
