import React from 'react';
import Route from './routes/routes'
import './App.css'
import {Provider} from "react-redux";
import store from "./store";




function App() {
  return (
      <div>
          <Provider store={store}>
              <Route/>
          </Provider>
      </div>


  );
}

export default App;

