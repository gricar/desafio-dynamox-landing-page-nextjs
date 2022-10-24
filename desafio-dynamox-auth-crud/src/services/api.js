import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333/' });

export const validateLogin = async ({ email, password }) => {
  try {
    const response = await api.get('/users');
    if (response.status === 200) {
      const userRegistered = response.data.find(
        (user) => user.email === email && user.password === password,
      );
      return userRegistered;
    }
    return response.statusText;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAll = async () => {
  try {
    const response = await api.get('/products');
    if (response.status === 200) {
      return response.data;
    }
    return response.statusText;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createProduct = async (product) => {
  try {
    const newProduct = await api.post('/produtos', product);
    return newProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await api.delete(`/produtos/${itemId}`);
    if (response.status === 200) {
      return response.data;
    }
    return response.statusText;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const editItem = async (itemId, product) => {
  try {
    const response = await api.put(`/produtos/${itemId}`, product);
    if (response.status === 200) {
      return response.data;
    }
    return response.statusText;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default api;
