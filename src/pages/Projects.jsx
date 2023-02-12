import React from 'react';
import axios from 'axios';

import { Project } from '../components/Project';
import { SkeletonProjects } from '../components/Skeletons/SkeletonProjects';


const Projects = () => {
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

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {isLoading ? <SkeletonProjects /> :
            projects.map((item) => (<Project key={item.id} {...item} />))}
        </ul>
      </div>
    </main>
  )
}

export default Projects