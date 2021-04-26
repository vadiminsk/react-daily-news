import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home';
import MainLayout from './hoc/MainLayout';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
