import React from 'react';
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import Albums from './component/Albums'
import Photos from './component/Photos'
import Header from './component/Header';

function App() {

  return (
    <Router>
      <Header/>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Albums} />
            <Route exact path="/albums/:albumId" component={Photos} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
