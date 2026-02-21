import { useState, useRef } from 'react';
import { Heart, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import { fotos } from '../data';

const Proposal: React.FC = () => {
  const [acepto, setAcepto] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);
  const [noPos, setNoPos] = useState<{ top: number; left: number }>({
    top: 50,
    left: 50,
  });
  const [phrase, setPhrase] = useState<string>('Aún lo pienso...');
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

 const phrases = [
  'Por favor, dime que sí 🥺',
  'Sabes que solo quiero estar contigo',
  'Es que en serio me importas mucho',
  'No quiero perderte nunca',
  'Mi corazón ya te eligió 💖',
  'Prometo cuidarte siempre',
  'Contigo todo se siente mejor',
  'No me dejes con la duda 😣',
  'Desde que llegaste, todo cambió',
  'No puedo imaginarme sin ti',
  'Mi lugar favorito es a tu lado',
  'Te pienso más de lo que imaginas',
  'Quiero ser tu apoyo siempre',
  'No juegues con mi corazoncito 💔',
  'Dime que sí y te abrazo mucho',
  'Quiero intentarlo contigo',
  'Eres mi persona favorita',
  'Contigo quiero todo',
  'Mi amor por ti es real 💕',
  'No es broma, me gustas mucho',
  'Te quiero en mi vida',
  'Confié en ti con mi corazón',
  'Dime que sí, por favor ❤️',
];

  const handleYes = (): void => {
    setAcepto(true);

    const duration: number = 3 * 1000;
    const animationEnd: number = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number): number => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };
  const alertNo = (): void => {
    alert('¡No puedes decir que no! Por favor, elige "Sí, acepto".');
  }
  const handleNo = (): void => {
    // on first hover we capture initial position and mark started
    if (!started) {
      if (buttonRef.current && containerRef.current) {
        const btnRect = buttonRef.current.getBoundingClientRect();
        const contRect = containerRef.current.getBoundingClientRect();
        const topPct = ((btnRect.top - contRect.top) / contRect.height) * 100;
        const leftPct = ((btnRect.left - contRect.left) / contRect.width) * 100;
        setNoPos({ top: topPct, left: leftPct });
      }
      setStarted(true);
    }
    if (buttonRef.current) {
      buttonRef.current.style.position = 'absolute'; // make sure button is absolute for movement
    }
    
    const delta = 100;
    
    let newTop = noPos.top;
    let newLeft = noPos.left;
    
    if (noPos.left > 85) {
      newLeft = noPos.left - (Math.random() * delta + 40); // force leftward
    } else if (noPos.left < 15) {
      newLeft = noPos.left + (Math.random() * delta + 40); // force rightward
    } else {
      newLeft = noPos.left + (Math.random() * 2 - 1) * delta;
    }
    
    if (noPos.top > 85) {
      newTop = noPos.top - (Math.random() * delta + 40); // force upward
    } else if (noPos.top < 15) {
      newTop = noPos.top + (Math.random() * delta + 40); // force downward
    } else {
      newTop = noPos.top + (Math.random() * 2 - 1) * delta;
    }
    
    newTop = Math.max(0, Math.min(90, newTop));
    newLeft = Math.max(0, Math.min(90, newLeft));
    setNoPos({ top: newTop, left: newLeft });

    let next = phrase;
    while (next === phrase) {
      next = phrases[Math.floor(Math.random() * phrases.length)];
    }
    setPhrase(next);
  };

  return (
    <div className="content-card">
      {!acepto ? (
        <div
          className="question-section"
          ref={containerRef}
          style={{ minWidth: '500px',padding: '40px', minHeight: '200px' }}
        >
          <div style={{ minWidth: '100px',display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h2 className="question-text">¿Quieres ser mi novia?</h2>
            </div>
            
            {fotos[2] && (
              <div className="gallery-hero" style={{ minWidth: '10px',maxWidth: '150px', height: '150px', margin: 0 }}>
                <img src={fotos[2]} loading="eager" decoding="async"  />
              </div>
            )}
          </div>
          <div className="buttons">
            <button className="btn btn-yes" onClick={handleYes}>
              Sí, acepto
              <Heart size={20} fill="currentColor" />
            </button>
            <button
              ref={buttonRef}
              className="btn btn-no"
              onMouseEnter={handleNo} onClick={alertNo}
              style={
                started
                  ? {
                      top: `${noPos.top}%`,
                      left: `${noPos.left}%`,
                      transition: 'none',
                      zIndex: 1000,
                    }
                  : undefined
              }
            >
              {phrase}
            </button>
          </div>
          
        </div>
      ) : (
        <div className="success-message">
          <h2>¡Sabía que dirías que sí!</h2>
          <p>Ahora eres mi novia. Te amo mucho.</p>
          <button className="btn btn-yes" onClick={() => window.location.href = '/'}>
            <Home size={20} />
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default Proposal;
