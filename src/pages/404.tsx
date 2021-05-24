import { withUnpublishedPreview } from 'gatsby-source-prismic';

import NewsTemplate from '../pages/news/{PrismicNewsPost.uid}';

const NotFoundPage = () => (
  <main>
    <h1>Page not found!</h1>
  </main>
);

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    news_post: NewsTemplate
  }
});
