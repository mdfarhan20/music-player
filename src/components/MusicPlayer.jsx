import { useState, useContext } from "react";
import SongImage from "components/SongImage";
import SongInfo from "components/SongInfo";
import PlayerControls from "components/PlayerControls";
import MusicContext from "MusicContext";

function MusicPlayer() {
    const { currentTrack } = useContext(MusicContext);

    return (
        <div className="bg-surface grid gap-y-4 p-6 text-white shadow-sm shadow-primary rounded-xl
        ">
            <SongImage songImage={currentTrack.image} />
            <SongInfo songTitle={currentTrack.title} songArtist={currentTrack.artist} />
            <PlayerControls audioTrack={currentTrack.audio}/>
        </div>
    )
}

export default MusicPlayer;