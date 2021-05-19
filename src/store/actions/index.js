import * as api from '../../api';

import { GET_POSTS } from '../types';

export const getPosts = (homePost, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(homePost, page, order, limit),
});
