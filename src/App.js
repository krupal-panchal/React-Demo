import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter as Router,Switch,Link } from 'react-router-dom';
import Nav from './Nav';
import MovieSearch from './MovieSearch';
import Counter from './Counter';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/">
            <MovieSearch />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
