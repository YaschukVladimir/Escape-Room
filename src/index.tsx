import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './components/main-app/main-app';
import { Provider } from 'react-redux';
import { checkAuthAction, fetchQuestsAction } from './store/api-actions';
import { store } from './store';

store.dispatch(fetchQuestsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>
);
