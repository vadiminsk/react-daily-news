import axios from 'axios';
const URL_SERVER = 'http://localhost:3004';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${URL_SERVER}/posts`);

    return {
      posts: response.data,
    };
  } catch (error) {
    throw error;
  }
};
