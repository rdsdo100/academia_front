import React from 'react';
import Route from './routes/routes'
import {Provider} from "react-redux";
import store from "./store";
import GlobalStyles from './styles/GlobalStyles';




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

