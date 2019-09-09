import React from 'react';
import Header from './components/header/header' ;
import './app.scss';
import Car from "../app/components/car";

const user = {
  id: 3,
  name: 'Tom'
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1 className="mb-5" id={user.id} >Hello!!! {user.name}</h1>
        <Car/>
      </header>
    </div>
  );
}

export default App;