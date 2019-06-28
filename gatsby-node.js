exports.createPages = async function ({ actions: { createPage }, graphql }) {
  const users = require("./data/users.json")
  users.forEach(user => {
    createPage({
      path: `/${user.github}`,
      component: require.resolve(`./src/templates/portfolio.js`),
      context: { github: user.github },
    })
  })
}