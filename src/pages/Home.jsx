import { Header } from "../components/Header"

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h1 className="title-3">Frontend</h1>
              <p>JS, TS, React, Redux, HTML, CSS, SCSS</p>
            </li>
            <li className="content-list__item">
              <h1 className="title-3">Backend</h1>
              <p>Axios, Node.js, Git</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home