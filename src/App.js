import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import './style.css'

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Articles from './components/Articles/Articles'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <Router>
      <div className='App-container'>
        <Navigation />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/articles'>
            <Articles />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
