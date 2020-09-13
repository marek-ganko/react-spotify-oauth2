import React from 'react';
import './App.css';
import { Authorization } from './features/authorization/Authorization';
import {SpotifyExample} from "./features/spotifyExample/SpotifyExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authorization />
        <SpotifyExample />
      </header>
    </div>
  );
}

export default App;
