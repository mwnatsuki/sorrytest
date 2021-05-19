import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AAA from './AAA'
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/aaa">
          <AAA />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
