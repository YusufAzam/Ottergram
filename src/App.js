import './App.css';

import {Robin, Maurice, Lesley, Barbara, Barry} from './otters/index.js';
import Header from './components/Header';
import React, { useState } from 'react';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';

const ottersArray = [
  { image: Barry, name: 'Barry', id:1 },
  { image: Robin, name: 'Robin', id:2 },
  { image: Maurice, name: 'Maurice', id:3 },
  { image: Lesley, name: 'Lesley', id:4 },
  { image: Barbara, name: 'Barbara', id:5 },
];

function App() {
  const [selectedPostName, setSelectedPostName] = useState('Barry');
  const selectedPost = ottersArray.find((otter)=> otter.name === selectedPostName)

  return (
    <div>
      <Header/>
      <div className='app-content'>
      <ul className='post-list'>
        {ottersArray.map((otter)=> (
          <Post key={otter.id} image={otter.image} name={otter.name} setSelectedPostName={setSelectedPostName}/>
        ))}
      </ul>
      <SelectedItem
          image={selectedPost.image}
          name={selectedPost.name}
        />
      </div>
    </div>
  );
}

export default App;
