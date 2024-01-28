import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //getting store from the /src/store/index.js this the store created using redux where we are passing the reducer.
    // as we have taken the store in the provider, now all the application and the component in the application can have the access of the store and its data 
    <Provider store={store}>
        <App />
    </Provider>
);
