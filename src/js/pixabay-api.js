import axios from 'axios';

// getting API
const PIXABAY_KEY = '39464040-a0396810fa15fd91e6ab78f4e';
const URL = 'https://pixabay.com/api/';

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.PICS_ON_PAGE = 40;
  }
  async fetchGallery() {
    const axiosOptions = {
      method: 'get',
      url: `${URL}`,
      params: {
        key: `${PIXABAY_KEY}`,
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: `${this.PICS_ON_PAGE}`,
      },
    };
    try {
      const getData = await axios(axiosOptions);
      const data = getData.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
