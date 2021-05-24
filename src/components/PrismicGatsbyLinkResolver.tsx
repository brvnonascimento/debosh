import { Link } from 'gatsby';
// import { Link as PrismicLink } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver';

// @ts-expect-error
const PrismicGatsbyLinkResolver = (_, element, content) => {
  if (element.data.link_type === 'Document') {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    );
  }
  return null;
};

export default PrismicGatsbyLinkResolver;
