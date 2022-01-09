import React, { useState } from 'react';

import './App.css';
import List from './Components/List';
import AddToList from './Components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Testing",
      age: 35,
     
      note: "React with Typescript",
    },
    {
      name: "Sample",
      age: 42,
      
    }
  ])

  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;