import { fotos } from '../data';

const Gallery: React.FC = () => (
  <div className="gallery">
    {fotos.map((url, index) => (
      <div key={index} className="img-wrapper">
        <img src={url} alt={`Recuerdo ${index + 1}`} />
      </div>
    ))}
  </div>
);

export default Gallery;
