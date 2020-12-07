module.exports = {
  siteMetadata: {
    title: "Coskun Cakir - Front-End Engineer",
    titleTemplate: "%s",
    description:
      "I develop web applications with the latest and innovative technologies to make people’s life simple.",
    image: "/assets/images/website_setup.png",
    twitterUsername: "@coscakir",
    siteUrl: `https://coskuncakir.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coskun Cakir`,
        short_name: `Coskun Cakir`,
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
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
        key: "45vD5s0OBPw0OMXApqtZw",
        id: "61767082-coskun-cakir",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
}
