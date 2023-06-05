import { useState } from 'react';

import searchImages from './api';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = (term) => {
    const response = searchImages(term);
    if (response) {
      setImages(response);
    }
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
      />
      {images &&
        images.map((image) => <ImageList key={image.id} image={image} />)}
    </div>
  );
};

export default App;
