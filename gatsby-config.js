require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const devPlugins =
  process.env.NODE_ENV === 'development'
    ? [
        'gatsby-plugin-dts-css-modules',
        'gatsby-plugin-graphql-codegen',
        'gatsby-plugin-extract-schema'
      ]
    : [];

const prodPlugins =
  process.env.NODE_ENV !== 'development'
    ? [
        // 'gatsby-plugin-preact'
        // {
        //   resolve: 'gatsby-plugin-google-analytics',
        //   options: {
        //     trackingId: process.env.GA_TRACKING_ID
        //   }
        // }
      ]
    : [];

module.exports = {
  siteMetadata: {
    title: 'debosh',
    author: 'brvno',
    siteUrl: process.env.BASE_DOMAIN
  },
  plugins: [
    ...devPlugins,
    ...prodPlugins,
    // TODO: Preact breaks HMR and build.
    // 'gatsby-plugin-preact',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'debosh',
        schemas: {
          settings_version: require('./src/prismic/schemas/settings_version.json'),
          news_post: require('./src/prismic/schemas/news_post.json')
        }
      }
    }
  ]
};
