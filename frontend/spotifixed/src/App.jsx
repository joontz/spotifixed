import { useState, useEffect } from 'react';
import BackGround from './components/BackGround'
import TextBox from './components/TextBox';
import LandingHero from './components/Hero';

const App = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const artworks = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg'
  ];

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BackGround artworks={artworks}>
       <LandingHero />
       <TextBox />
    </BackGround>
  );
};

export default App;