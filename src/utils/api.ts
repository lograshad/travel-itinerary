import axios from 'axios';

// todo: put base url and api key in env, well shouldn't matter since this is a public api

const api = axios.create({
  baseURL: 'https://booking-com15.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Key': '85d8f6762dmshe27a1db3a9a4bfdp12ecf5jsncf7acbce2f5f',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
});

export const searchFlights = async (params: any) => {
  const response = await api.get('/flights/searchDestination', { params });
  return response.data;
};

export const searchHotels = async (params: any) => {
  const response = await api.get('/hotels/searchDestination', { params });
  return response.data;
};

export const searchActivities = async (params: any) => {
  const response = await api.get('/attraction/searchLocation', { params });
  return response.data;
};

export default api;

