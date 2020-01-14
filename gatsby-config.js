module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: 'Mark Holland',
    title: `Partiallogic`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Partiallogic`,
        short_name: 'Partiallogic',
        start_url: '/',
        description: 'The blog of the developer, Mark Holland',
        background_color: '#ffffff',
        theme_color: '#2077b2',
        orientation: 'portrait',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
  ],
}
