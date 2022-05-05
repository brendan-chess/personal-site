import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import './style.css'

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import ArticleRoutes from './ArticleRoutes'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className='App-container'>
        <Navigation />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <ArticleRoutes />

        </Switch>

        
      </div>
      <Footer />
    </Router>
  )
}

export default App;
