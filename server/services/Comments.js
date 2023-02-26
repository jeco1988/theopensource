import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const getComments = async (postId) => {
  const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
  return response.data;
};

export const createComment = async (postId, commentData) => {
  const response = await axios.post(
    `${API_URL}/posts/${postId}/comments`,
    commentData
  );
  return response.data;
};