import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions';

const HomePosts = () => {
  const homeposts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <div>Homeposts</div>;
};

export default HomePosts;
