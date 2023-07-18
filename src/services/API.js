import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36502958-cdaae05ea9a7c2e9488e66ded';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const params = {
    key: KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: pageSize,
  };

  return axios({ params }).then(response => response.data);
};
export default fetchImages;
