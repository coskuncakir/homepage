module.exports = {
  siteMetadata: {
    title: "Grycode",
    titleTemplate: "%s",
    description:
      "Tell us about your project, get a quick estimate and a plan for making it live.",
    url: "https://grycode.co.uk",
    image: "/assets/images/website_setup.png",
    twitterUsername: "@grycode",
    siteUrl: `https://grycode.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grycode`,
        short_name: `Grycode`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#7433ff`,
        display: `standalone`,
        icon: `${__dirname}/static/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
}
