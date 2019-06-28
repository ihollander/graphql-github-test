import React from "react"
import { graphql } from "gatsby"

import Portfolio from '../components/Portfolio'

const Index = ({ data }) => {
  return (
    <Portfolio user={data.github.user} />
  )
}

export default Index

export const query = graphql`
  query($github: String!) {
    github {
      user(login: $github) {
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
