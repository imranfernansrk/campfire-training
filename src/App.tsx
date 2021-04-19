import React from 'react'
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Posts } from './components/Posts';
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/posts" component={Posts} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </Provider>
    </div>
  )
}

export default App;
