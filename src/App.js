import React from "react";
//import logo from './logo.svg';
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/main";
import store from "./store";
import "./App.css";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
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
