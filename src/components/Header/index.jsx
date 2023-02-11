import './style.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong> Hi, my name is <em>Bek</em> </strong><br />
          a fullstack developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/beeek18" className="btn">See my GitHub</a>
      </div>
    </header>
  )
}