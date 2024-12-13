import '../styles/hero.css'

const HeroText = () => {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-accent top-accent"></div>
          <h1 className="hero-title">
            You Deserve
            <br />
            <span className="hero-highlight">Better </span>
            <span className="hero-title">Playlists</span>

          </h1>
          <div className="hero-accent bottom-accent"></div>
        </div>
      </div>
    );
  };
  
export default HeroText;
