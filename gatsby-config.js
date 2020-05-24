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
  ],
  siteMetadata: {
    title: "Quarentenando",
  },
};
