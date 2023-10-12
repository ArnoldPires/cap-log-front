import axios from 'axios';

// Assuming your backend server is running on localhost:3001
const baseURL = 'http://localhost:3001/logs';

export const getLogs = async () => {
  try {
    const response = await axios.get(baseURL);
    return response;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const createLog = async (logData) => {
  try {
    const response = await axios.post(baseURL, logData);
    return response;
  } catch (error) {
    console.error("Error creating log: ", error);
    throw error;
  }
};

export const updateLog = async (id, updatedData) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, updatedData);
    return response;
  } catch (error) {
    console.error("Error updating log: ", error);
    throw error;
  }
};

export const deleteLog = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting log: ", error);
    throw error;
  }
};