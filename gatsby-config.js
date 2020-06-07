module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "content/assets/avatar.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117987159-3",
        head: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
  ],
  siteMetadata: {
    title: "Quarentenando",
  },
};
