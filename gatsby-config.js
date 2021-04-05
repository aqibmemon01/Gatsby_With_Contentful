
const dotenv = require('dotenv')

dotenv.config()


module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}

// module.exports = {
//   // siteMetadata: { ... },
//   plugins: [
//     ...
//     `gatsby-transformer-remark`,
//     {
//       resolve: `gatsby-source-contentful`,
//       options: {
//         spaceId: "11rg69co1ak8",
//         accessToken: "tpBbtgVTTdXkxuCfG9L2lvgo4o_7-e6uzat1Rhxe188",
//       },
//     },
    
//   ]
// }
