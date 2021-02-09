import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer, { initialState } from './reducer';
//import App from './components/App';
// Se estiver interessado em usar o redux dev tools
//import { composeWithDevTools } from 'redux-devtools-extension';
//const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState);

const ConnectedApp = () => (
    <Provider store={store}>
        {/*<App />*/}
    </Provider>
);
ReactDOM.render(<ConnectedApp />, document.getElementById('root'));



//link importante
// https://rubenmarcus.medium.com/estruturando-sua-aplica%C3%A7%C3%A3o-react-typescript-redux-a3c9bccd45b7
