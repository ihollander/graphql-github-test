import React from "react"

import Portfolio from '../components/Portfolio'

export default ({ pageContext: { user } }) => {
  console.log(user)
  return (
    <Portfolio user={user} />
  )
}