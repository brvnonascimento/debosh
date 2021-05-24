require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

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
    ...prodPlugins,
    // TODO: Preact breaks HMR and build.
    // 'gatsby-plugin-preact',
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-dts-css-modules',
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
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        schemas: {
          settings_version: require('./src/prismic/schemas/settings_version.json'),
          news_post: require('./src/prismic/schemas/news_post.json')
        }
      }
    },
    'gatsby-plugin-extract-schema'
  ]
};
