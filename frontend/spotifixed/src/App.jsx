import { useState, useEffect } from 'react';
import BackGround from './components/BackGround'
import TextBox from './components/TextBox';

const App = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fix image paths by removing '/public/'
  const artworks = [
    '/1824px-1665_Girl_with_a_Pearl_Earring.jpg',
    '/3840px-Nighthawks_by_Edward_Hopper_1942.jpg',
    '/2153px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
    '/Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg'
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
      <TextBox />
    </BackGround>
  );
};

export default App;