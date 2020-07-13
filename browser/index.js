import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import store from './store';

import { Provider } from 'react-redux';
// provides your main component access to the entire store;
// ultimately giving access to all components


ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, // first arg is component, second arg is the DOM element where it goes
    document.getElementById('app')
    // replace that element with the Main component
    // default is index.html, since we haven't specified the name of document.  How would you specify the name of the specific document?
);

// we're not exporting anything
