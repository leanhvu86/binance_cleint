import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppHeader from './common/AppHeader'
import MarketPairs from './marketpairs/Index'
import Trade from './trade/Index'
import ChartComponent from './chart/index';

const App = () => (
  <Router>
    <React.Fragment>
      <AppHeader />
      <main role="main">
        <div className="container-fluid">
              <div className="row">
                  <div className="col-5">
                      <ChartComponent/>
                  </div>
                  <div className="col-7">
                    <Route exact path="/" component={MarketPairs} />
                    <Route path="/trade/:symbol" component={Trade} />
                  </div>
              </div>
          </div>
      </main>
    </React.Fragment>
  </Router>
);

export default App;