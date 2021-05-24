import { GatsbyBrowser, graphql, Link, StaticQuery } from 'gatsby';
import { SiteSettingsQuery } from '../../graphql-types';

import '../styles/globals.scss';

const Page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <StaticQuery<SiteSettingsQuery>
      query={graphql`
        query SiteSettings {
          prismicSettingsVersion {
            data {
              site_title
              logo {
                alt
                fixed(width: 200, height: 100) {
                  srcSet
                  src
                }
              }
            }
          }
        }
      `}
    >
      {({ prismicSettingsVersion }) => {
        const logo = prismicSettingsVersion?.data?.logo;

        return (
          <>
            <header>
              <Link to={'/'} title={'Ir para página inicial'}>
                <img
                  src={logo?.fixed?.src}
                  srcSet={logo?.fixed?.srcSet}
                  alt={logo?.alt ?? 'Debosh logo'}
                />
              </Link>

              <nav>
                <ul>
                  <li></li>
                </ul>
              </nav>
            </header>

            {element}
          </>
        );
      }}
    </StaticQuery>
  );
};

export default Page;
