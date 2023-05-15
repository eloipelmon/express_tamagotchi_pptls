import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';
library.add(fas, far);

function Home() {
  return (
    <header className="home-header">
      <div className="home-container">
        <h2>Eloi Pellin, 2DAW</h2>
        <h1 className="home-title">¿A qué quieres jugar?</h1>
        <section className="home-buttons">
          <Link to="/Tamagotchi" className="home-button">
            <FontAwesomeIcon icon={['fas', 'paw']} />   Tamagotchi
          </Link>
          <Link to="/Pptls" className="home-button">
            <FontAwesomeIcon icon={['fas', 'hand-rock']} />   PPTLS
          </Link>
          <Link to="/Resultados" className="home-button">
            <FontAwesomeIcon icon={['fas', 'gamepad']} />   Resultados
          </Link>
        </section>
      </div>
    </header>
  );
}

export default Home;
