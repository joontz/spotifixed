import { useState, useEffect } from 'react';

const BackGround = ({ artworks, children }) => {
  const [background, setBackground] = useState({
    image: '',
    position: { x: 50, y: 50 }
  });

  const calculateRandomPosition = () => {
    return {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    };
  };

  useEffect(() => {
    const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
    const img = new Image();
    img.src = randomArtwork;
    
    img.onload = () => {
      setBackground({
        image: randomArtwork,
        position: calculateRandomPosition()
      });
    };
  }, [artworks]);

  return (
    <div style={{ 
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {background.image ? (
        <>
          <img
            src={background.image}
            alt="Artistic Background"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: `${background.position.x}% ${background.position.y}%`,
              margin: 0,
              padding: 0,
              zIndex: 0
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1
          }} />
          <div style={{
            position: 'relative',
            zIndex: 2
          }}>
            {children}
          </div>
        </>
      ) : (
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black'
        }} />
      )}
    </div>
  );
};

export default BackGround;