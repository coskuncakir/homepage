module.exports = {
  siteMetadata: {
    title: "Coskun Cakir - Front-End Developer",
    titleTemplate: "%s",
    description:
      "I develop web applications with the latest and innovative technologies to make people’s life simple.",
    image: "/assets/images/avatar.jpg",
    twitterUsername: "@coscakir",
    siteUrl: `https://coskuncakir.com`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coskun Cakir`,
        short_name: `Coskun Cakir`,
        start_url: `/`,
        background_color: `#110719`,
        theme_color: `#da3654`,
        display: `standalone`,
        icon: `${__dirname}/static/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              tracedSVG: true,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-NR9KJEK14Q",
        head: true,
      },
    },
  ],
}
