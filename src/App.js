import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//* Pages
import Home from './pages/Home';
import Header from './components/Header';
import Model from './pages/Model';

function App() {

  const imageDetails = {
    width: 524,
    height: 650
  }

  return (
    <Router>
      <Header />
      <Route 
        render={({location}) => (
          <Switch location={location} key={location.pathname}>
            <Route 
              exact
              path="/"
              render={() => <Home imageDetails={imageDetails}/>}
            />
            <Route 
              exact
              path="/model/:id"
              render={() => <Model />}
            />
          </Switch>
        )}
      />
    </Router>
  );
}

export default App;
