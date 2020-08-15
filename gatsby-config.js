module.exports = {
  siteMetadata: {
    title: `Our Enterprise`,
    description: `Our Enterprise is a service provider such as Digital Printing, Digital Imaging, Graphic Design, 2D & 3D Architecture, Publishing and Development Apps & Website`,
    author: `Moh Ravi Dwi Putra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F8F8F8`,
        theme_color: `#F8F8F8`,
        display: `minimal-ui`,
        icon: `src/images/ourenterprise.jpg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
