import React from 'react';
import Route from './routes/routes'
import {Provider} from "react-redux";
import store from "./store";
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";




function App() {
  return (
      <div>
          <Provider store={store}>
              <ThemeProvider theme={light}>
              <GlobalStyles />
              <Route/>
              </ThemeProvider>
          </Provider>
      </div>


  );
}

export default App;

