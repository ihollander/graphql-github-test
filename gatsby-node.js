exports.createPages = async function ({ actions: { createPage }, graphql }) {
  // mock fetch to our future CMS backend
  const users = require("./data/users.json")

  // i think it expects all pages to be created before completing this function
  // something to do with createPages lifecycle
  // so Promise.all is necessary for creating all pages
  await Promise.all(
    users.map(async user => {
      /* TODO:
        - add PORTFOLIO.md file to projects that should be included
        - filter for only projects that have a PORTFOLIO.md file
        - get content from PORTFOLIO.md?
      */
      const { data } = await graphql(`
          query($login: String!) {
            github {
              user(login: $login) {
                name
                bio
                company
                email
                url
                status {
                  message
                }
                isHireable
                pinnedItems(first: 6) {
                  nodes {
                    ... on GitHub_Repository {
                      name
                      homepageUrl
                      primaryLanguage {
                        name
                      }
                      shortDescriptionHTML
                      url
                      object(expression: "master:README.md") {
                        ... on GitHub_Blob {
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `, { "login": user.github })

      return await createPage({
        path: `/${user.github}`,
        component: require.resolve(`./src/templates/portfolio.js`),
        context: { user: data.github.user },
      })
    })
  )
}