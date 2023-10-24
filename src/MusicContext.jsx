import { useState, createContext } from "react";
import {soundtracks} from "soundtracks";

const MusicContext = createContext();

export function MusicProvider({ children }) {
    const [currentTrack, setCurrentTrack] = useState(soundtracks[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <MusicContext.Provider value={{
            currentTrack, setCurrentTrack,
            isPlaying, setIsPlaying,
            soundtracks
        }}>
            { children }
        </MusicContext.Provider>
    )
}

export default MusicContext;