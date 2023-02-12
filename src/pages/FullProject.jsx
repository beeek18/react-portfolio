import React from 'react'
import { useParams } from 'react-router-dom'

import { BtnGitHub } from '../components/BtnGitHub'
import { SkeletonFullProject } from '../components/Skeletons/SkeletonFullProject'


const FullProject = () => {
  const { id } = useParams()

  const [projects, SetProjects] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://63d0153a10982404378ccc77.mockapi.io/portfolio")
      .then((res) => {
        return res.json()
      }).then((data) => {
        SetProjects(data);
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
        {isLoading ? <SkeletonFullProject /> : <div className="project-details">
          <h1 className="title-1">{project?.title}</h1>
          <img src={project?.imgBig} alt="React Sneakers V2" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{project?.skills}</p>
          </div>
          <BtnGitHub link="https://github.com/beeek18/react-sneakers" />
        </div>}
      </div>
    </main >
  )
}

export default FullProject