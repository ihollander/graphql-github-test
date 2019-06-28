import React from 'react'
import ProjectItem from './ProjectItem'

export default ({ repos }) => (
  <ul>
    {repos.map(repo => <ProjectItem key={repo.name} repo={repo} />)}
  </ul>
)