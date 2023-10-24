import Navbar from 'components/Navbar';
import MusicPlayer from 'components/MusicPlayer';
import Playlist from 'components/Playlist';
import { MusicProvider } from "MusicContext";

function App() {
  return (
    <>
      <MusicProvider>
        <Navbar />
        <main
          className="bg-background grid gap-8 align-items-center px-4 py-8 grow
            md:overflow-hidden md:grid-rows-1 md:grid-cols-split
          "
        >
          <MusicPlayer />
          <Playlist />
        </main>
      </MusicProvider>
    </>
  )
}

export default App
