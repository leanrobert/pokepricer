import axios from 'axios';

const BASE_URL = 'https://api.pokemontcg.io/v2';

export const fetchSets = async () => {
  const response = await axios.get(`${BASE_URL}/sets?orderBy=-releaseDate`);
  return response.data.data;
};

export const fetchCardsForSet = async (setId) => {
  const response = await axios.get(`${BASE_URL}/cards?q=set.id:${setId}`);
  return response.data.data;
};

export const fecthCardsForSetPage2 = async (setId) => {
  const response = await axios.get(`${BASE_URL}/cards?q=set.id:${setId}&page=2`);
  return response.data.data;
}