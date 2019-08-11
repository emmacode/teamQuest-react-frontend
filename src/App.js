import React from "react";
import { Provider } from "react-redux";

import Footer from "./components/Footer";
import Main from "./Routes.js";
import store from "./store";
import "./App.css";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <div>
            {" "}
            <Main />
          </div>
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
