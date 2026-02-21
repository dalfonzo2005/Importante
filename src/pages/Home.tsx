import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fotos } from '../data';

const Home: React.FC = () => {
  return (
    <div className="content-card">
      <h1 className="title">Para ti</h1>
      
      {fotos[0] && (
        <div className="gallery-hero">
          <img src={fotos[0]} alt="Nosotros" />
        </div>
      )}

      <div className="text-content">
        <p>
          Holaa &lt;3. Sabes que no soy de muchas palabras, pero aun así quise armar este lindo detalle para ti. Ojalá te guste.
          <br />
          <br />
          Al principio, cuando empezamos a vernos, quise convencerme de que no quería nada más. Incluso sabiendo cómo te sentías, lo dejaba pasar. Pero poco a poco, me di cuenta de que quería acercarme más y más a ti. No lo estaba notando en ese momento, pero ¿quién no se enamoraría de tu lindo trato, de tu sonrisa, de tus hermosos ojos, de todo de ti?
          <br />
          <br />
          Ahora que lo pienso, todo esto es tu culpa ahora no podré dejar de pensar en ti. Me fuiste gustando con cada conversación que teníamos, y realmente creo que caí. Siento que me gustas mucho, y ahora te extraño. Siento que estoy sobreviviendo por estar lejos de ti. Extraño tus besos, tus abrazos, tus lindas palabras y, simplemente, todo de ti.
        </p>
      </div>

      <div className="buttons">
        <Link to="/story" className="btn btn-yes">
          Seguir leyendo
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
