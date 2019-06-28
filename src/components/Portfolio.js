import React from 'react'
import ProjectList from './ProjectList'

export default ({ user }) => (
  <>
    <h1>{user.name}</h1>
    <ProjectList repos={user.pinnedItems.nodes} />
  </>
)