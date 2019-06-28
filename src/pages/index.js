import React from "react"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>{data.github.user.name}</h1>
      <div>
        {data.github.user.pinnedItems.nodes.map((repository, i) => (
          <div key={i}>
            <h2>{repository.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index

export const query = graphql`
  query RepositoriesQuery {
    github {
      user(login: "ihollander") {
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
`
