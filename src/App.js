import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDwaP0jctDtilYAyfHDiccf--dzTxfhnPA",
      authDomain: "manager-d43a1.firebaseapp.com",
      databaseURL: "https://manager-d43a1.firebaseio.com",
      projectId: "manager-d43a1",
      storageBucket: "manager-d43a1.appspot.com",
      messagingSenderId: "1023606467081"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
