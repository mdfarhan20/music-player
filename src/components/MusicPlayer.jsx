import { useState } from "react";
import SongImage from "components/SongImage";
import SongInfo from "components/SongInfo";
import PlayerControls from "components/PlayerControls";
import {soundtracks} from "soundtracks";

function MusicPlayer() {
    const [currentTrack, setCurrentTrack] = useState(soundtracks[0]);

    return (
        <div className="text-white grid gap-4 bg-gray-900 p-4 rounded-lg border border-purple-600">
            <SongImage songImage={currentTrack.image} />
            <SongInfo songTitle={currentTrack.title} songArtist={currentTrack.artist} />
            <PlayerControls 
                audioTrack={currentTrack.audio}
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
            />
        </div>
    )
}

export default MusicPlayer;