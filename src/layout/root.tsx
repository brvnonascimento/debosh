import { GatsbyBrowser } from 'gatsby';
import { PreviewStoreProvider } from 'gatsby-source-prismic';

const root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <PreviewStoreProvider>{element}</PreviewStoreProvider>;
};

export default root;
