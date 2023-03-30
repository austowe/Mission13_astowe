import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MovieData from './movies';

class Welcome extends React.Component {
  render() {
    return <h1>Joel Hilton's Film Collection Test 2</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome />
      <MovieData />
    </div>
  );
}

export default App;
