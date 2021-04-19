import React from 'react';
import { BrowserRouter, Switch, Roure } from 'react-router-dom';
import Home from './components/home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch path='/' component={Home}></Switch>
    </BrowserRouter>
  );
};

export default Routes;
