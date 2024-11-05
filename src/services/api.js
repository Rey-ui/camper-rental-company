import axios from "axios";

const API_URL = "https://6611836595fdb62f24ed52bf.mockapi.io/campers";

export const fetchAdverts = async (page = 1) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=4`);
  return {
    campers: response.data,
    hasMore: response.data.length === 4,
  };
};

export const fetchAdvertDetails = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// export const addToFavorites = async (advertId) => {
//   const response = await axios.post(`${API_URL}/favorites/${advertId}`);
//   return response.data;
// };

// export const removeFromFavorites = async (advertId) => {
//   const response = await axios.delete(`${API_URL}/favorites/${advertId}`);
//   return response.data;
// };
