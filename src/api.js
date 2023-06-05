import axios from 'axios';

// Obviously, a key shouldn't be hard coded in the app like this. BUT, for the sake of this demo, it's fine.
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID M2dAkc0YchnGYFw1COwupe3JgoeYA0WiNrLGWBOeNAY',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
