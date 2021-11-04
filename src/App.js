import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home/Home'
import Article from './components/Article/Article'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
