import {
  withPreviewResolver,
  WithPreviewResolverProps
} from 'gatsby-source-prismic';

import { linkResolver } from '../utils/linkResolver';

const PreviewPage = ({ isPreview }: WithPreviewResolverProps) => {
  if (isPreview === false) {
    return 'Not a preview!';
  }

  return <p>Loading</p>;
};

// @ts-expect-error
export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
  linkResolver: () => linkResolver
});
