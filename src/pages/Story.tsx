import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fotos } from '../data';

const Story: React.FC = () => {
  return (
    <div className="content-card">
      <div className="text-content">
        <p>
          Me tomé mi tiempo para pensar y confirmar que esto era real. Por eso, dije que te estabas acercando mucho, tal vez era por la confusión que sentía. Pero después de todo, lo confirmé. Cuando salimos al cine, después de todos esos pensamientos, verte feliz me hizo feliz. Me di cuenta de que quería toda tu atención, que todos mis sentimientos simplemente salieron. Y cuando te volví a ver, ya no podía dejar de sentirlo.
          <br />
          <br />
          Por eso, te confesé mis sentimientos, y esos días que pasé contigo me hicieron muy feliz. Con esto, aún más, refuerzo la idea de que me gustas, que quiero estar contigo, que quiero que seas mi novia. Hay muchas cosas que tengo acumuladas para decirte, cosas que son difíciles de expresar solo con palabras.
          <br />
          <br />
          Por esto te pregunto y estoy seguro...
        </p>
      </div>

      {fotos[1] && (
        <div className="gallery-hero">
          <img
            src={fotos[1]}
            alt="Momento especial"
            style={{ objectPosition: 'top' }}
            width={500}
            height={350}
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      <div className="buttons">
        <Link to="/proposal" className="btn btn-yes">
          Seguir leyendo
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Story;
