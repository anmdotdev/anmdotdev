import { useEffect, useState } from 'react'
import IconGithub from './Icons/IconGithub'
import Link from './Link'

const githubUrl = 'https://github.com'
const githubApi = 'https://api.github.com/repos'

const GithubStarCount = ({ orgName, repoName }) => {
  const [stars, setStars] = useState()

  useEffect(() => {
    fetch(`${githubApi}/${orgName}/${repoName}`)
      .then((response) => response.json())
      .then((data) => {
        setStars(data.stargazers_count)
      })
  }, [orgName, repoName])

  return (
    <Link
      href={`${githubUrl}/${orgName}/${repoName}`}
      external
      className="border border-gray-lighter text-sm rounded-sm bg-white"
      showIcon="never"
    >
      <span className="flex items-center p-1 px-2 space-x-2 bg-gray-lightest group-hover:bg-white">
        <IconGithub width={18} />
        <span>Star on Github</span>
      </span>
      {stars && (
        <span className="border-l border-gray-lighter bg-white p-1 px-2 flex items-center">
          {stars}
        </span>
      )}
    </Link>
  )
}

export default GithubStarCount
