import React from 'react';
import Route from './routes/routes'
import GlobalStyles from './styles/GlobalStyles';
import {Provider} from "react-redux";
import {store} from "./store/store";


//const store = createStore(reducer, initialState);

function App() {
  return (
      <div>
          <Provider store={store}>
              <GlobalStyles />
              <Route/>
          </Provider>
      </div>


  );
}

export default App;

