import './style.css';

import gitHubRepo from './gitHub-black.svg'

export const BtnGitHub = ({ link }) => {
  return (
    <a href={link} className="btn-outline">
      <img src={gitHubRepo} alt="GitHub Repo" />
      GitHub Repo
    </a>
  )
}
