exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/product/)) {
    page.matchPath = "/product/*"
    createPage(page)
  }
}
var path = require('path')

exports.createPages = async function ({ actions, graphql }) {

  const { createPage } = actions

  const result = await graphql(
    `query MyQuery {
      allContentfulElectronics {
        nodes {
          title
      price
      desciption {      
        json
      }
        }
      }
    }`
  )

  console.log(JSON.stringify(result))
  result.data.allContentfulElectronics.nodes.forEach((obj) => {
    //  console.log("yahoooooooo")
    createPage({
      path: `/product/${obj.title}`,
      component: path.resolve('./src/template/product.tsx'),
      context: {
        itemDetails: obj
      }
    })
  })

}
