import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar'
import News from './components/news/News'
import USNews from './components/news/USNews/USNews'
import InNews from './components/news/InNews/InNews'
import BBCNews from './components/news/BBCNews/BBCNews'
import Categories from './components/news/Categories/Categories'
import Business from './components/news/Categories/Business/Business'
import {Provider} from './context'
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Navbar />
          <Switch>
            <div className="container">
              <Route exact path="/" component={News} />
              <Route exact path="/USNews" component={USNews} />
              <Route exact path="/InNews" component={InNews} />
              <Route exact path="/BBCNews" component={BBCNews} />
              <Route exact path="/Categories" component={Categories} />
              <Route exact path="/Categories/Business" component={Business} />
            </div>
          </Switch>
        </Router>
      </Provider>
      
      
    )
  }
}

export default App;