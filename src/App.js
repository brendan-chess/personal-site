import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'

import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'

const App = () => {
  return (
    <Router>
      <div className='App-container'>
        <Navigation />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
