/**
 * This function will be used to generate links to Prismic documents
 * As the project grows, you should update this function according to your routes
 */

export const linkResolver = (doc: any) => {
  console.log('DOC from Link Resolver', doc);

  if (doc.type === 'news_post') {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `/news/${doc.uid}`;
  }

  return '/';
};
