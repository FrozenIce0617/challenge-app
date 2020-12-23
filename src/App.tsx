import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import Router from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
