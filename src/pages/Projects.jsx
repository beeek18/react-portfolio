import Sneakers from '../img/projects/01.png'
import Pizza from '../img/projects/02.png'
import Serials from '../img/projects/03.png'
import Chess from '../img/projects/04.png'
import Photos from '../img/projects/05.png'
import Users from '../img/projects/06.png'


const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          <li className="project">
            <a href="./project-page-1.html">
              <img src={Sneakers} alt="React Sneakers V2" className="project__img" />
              <h3 className="project__title">React Sneakers V2</h3>
            </a>
          </li>

          <li className="project">
            <a href="./project-page-2.html">
              <img src={Pizza} alt="React Pizza V2" className="project__img" />
              <h3 className="project__title">React Pizza V2</h3>
            </a>
          </li>

          <li className="project">
            <a href="./project-page-3.html">
              <img src={Serials} alt="React Chess" className="project__img" />
              <h3 className="project__title">React Native Serials</h3>
            </a>
          </li>

          <li className="project">
            <a href="./project-page-4.html">
              <img src={Chess} alt="React Native Serials" className="project__img" />
              <h3 className="project__title">React Chess</h3>
            </a>
          </li>

          <li className="project">
            <a href="./project-page-5.html">
              <img src={Photos} alt="Photos" className="project__img" />
              <h3 className="project__title">Photos</h3>
            </a>
          </li>

          <li className="project">
            <a href="./project-page-6.html">
              <img src={Users} alt="Users" className="project__img" />
              <h3 className="project__title">Users</h3>
            </a>
          </li>

        </ul>
      </div>
    </main>
  )
}

export default Projects