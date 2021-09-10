import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import MovieSearch from './MovieSearch';
import Counter from './Counter';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MovieSearch/> {/* Movie Search Component */}
      <Counter/>
      <LoginForm/>
    </div>
  );
}

export default App;
