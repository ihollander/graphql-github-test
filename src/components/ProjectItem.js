import React from 'react'
import "github-markdown-css"
const ReactMarkdown = require('react-markdown')

export default ({ repo }) => (
  <li>
    <div>{repo.name}</div>
    <div className="markdown-body">
      {repo.object && <ReactMarkdown source={repo.object.text} />}
    </div>
  </li>
)