import './style.css';

import gitHub from "../../img/icons/gitHub.svg"
import vk from "../../img/icons/vk.svg"
import instagram from "../../img/icons/instagram.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">

          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/beeek18"><img src={gitHub} alt="GitHub" /></a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/beeek1805/"><img src={instagram} alt="Instagram" /></a>
            </li>
            <li className="social__item">
              <a href="https://vk.com/beeek18"><img src={vk} alt="VK" /></a>
            </li>
          </ul>

          <div className="copyright">
            <p>@beeek18</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
