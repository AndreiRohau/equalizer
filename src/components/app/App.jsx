import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, WithId, Topics } from '../../pages';
import Price from '../../pages/Price'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={MainPage} />
      <Route exact={true} path="/content/topics" component={Topics} />
      <Route exact={true} path="/content/price" component={Price} />
      <Route patch="/:id" component={WithId} />
    </Switch>
  );
}

export default App;
