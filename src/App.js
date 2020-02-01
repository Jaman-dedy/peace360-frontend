import React from 'react';
import { Provider } from 'react-redux';
import Router from './routes/route';
import './App.scss';
import Store from './store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
