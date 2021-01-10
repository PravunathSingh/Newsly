import React, { Component } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import News from './components/news/News'
import USNews from './components/news/USNews/USNews'
import InNews from './components/news/InNews/InNews'
import BBCNews from './components/news/BBCNews/BBCNews'
import SearchResult from './components/news/Search/SearchResult'
import Categories from './components/news/Categories/Categories'
import Business from './components/news/Categories/Business/Business'
import Science from './components/news/Categories/Science/Science'
import Technology from './components/news/Categories/Technology/Technology'
import Health from './components/news/Categories/Health/Health'
import General from './components/news/Categories/General/General'
import Sports from './components/news/Categories/Sports/Sports'
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
              <Route exact path="/Categories/Science" component={Science} />
              <Route exact path="/Categories/Technology" component={Technology} />
              <Route exact path="/Categories/Health" component={Health} />
              <Route exact path="/Categories/General" component={General} />
              <Route exact path="/Categories/Sports" component={Sports} />
              <Route exact path="/Search" component={SearchResult} />
            </div>
          </Switch>
          <Footer />
        </Router>
      </Provider>
      
      
    )
  }
}

export default App;