import React from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import { BtnGitHub } from '../components/BtnGitHub'
import { SkeletonFullProject } from '../components/Skeletons/SkeletonFullProject'


const FullProject = () => {
  const { id } = useParams()

  const [projects, setProjects] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(true)
    axios.get("https://63d0153a10982404378ccc77.mockapi.io/portfolio")
      .then(({ data }) => {
        setProjects(data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error getting users");
      })
      .finally(() => setIsLoading(false))

  }, []);

  const project = projects[id - 1];

  return (
    <main className="section" >
      <div className="container">
        {isLoading ? <SkeletonFullProject className="container" /> : <div className="project-details">
          <h1 className="title-1">{project?.title}</h1>
          <img src={project?.imgBig} alt="React Sneakers V2" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{project?.skills}</p>
          </div>
          <BtnGitHub link={project?.link} />
        </div>}
      </div>
    </main >
  )
}

export default FullProject