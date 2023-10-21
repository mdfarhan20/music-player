import { useState } from 'react';
import Navbar from 'components/Navbar';
import MusicPlayer from 'components/MusicPlayer';

function App() {
  return (
    <>
      <Navbar />
      <main className="grid place-content-center bg-gray-800 h-main max-w-95">
        <MusicPlayer />
      </main>
    </>
  )
}

export default App
