import React from 'react';
import { Project } from '../components/Project';
import { SkeletonProjects } from '../components/Skeletons/SkeletonProjects';




const Projects = () => {
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

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {isLoading ? <SkeletonProjects /> :
            projects.map((item, i) => (<Project index={i + 1} key={item.id} {...item} />))}

        </ul>
      </div>
    </main>
  )
}

export default Projects