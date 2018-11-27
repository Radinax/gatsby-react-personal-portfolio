module.exports = {
  siteMetadata: {
    title: "Adrian Beria Portfolio",
    author: "Adrian Beria",
    description: "This a portfolio of projects of the Engineer Adrian Beria, who's a full stack web developer"
  },
  pathPrefix: "/gatsby-react-personal-portfolio",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Adrian Beria Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }
  ],
}
