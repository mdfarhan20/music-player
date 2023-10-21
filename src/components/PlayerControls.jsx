import { useEffect, useRef, useState } from "react";
import AudioSlider from "components/AudioSlider";
import PlayButton from "components/PlayButton";
import PauseButton from "components/PauseButton";
import NextTrackButton from "components/NextTrackButton";
import PreviousTrackButton from "components/PreviousTrackButton";
import { soundtracks } from "soundtracks";


function PlayerControls({ 
    audioTrack, currentTrack, setCurrentTrack
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const [mounted, setMounted] = useState(false);
    useEffect(() => (mounted ? setIsPlaying(true) : setMounted(true)), [currentTrack]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            audioRef.current.addEventListener("ended", handleNextTrackChange);
        }
        else {
           audioRef.current.pause();
           audioRef.current.removeEventListener("ended", handleNextTrackChange);    
        }
    }, [currentTrack, isPlaying]);


    function handleNextTrackChange() {
        if (currentTrack.id === soundtracks.length - 1)
            setCurrentTrack(soundtracks[0]);
        else
            setCurrentTrack(soundtracks[currentTrack.id + 1]);
    }

    function handlePreviousTrackChange() {
        if (currentTrack.id === 0)
            setCurrentTrack(soundtracks[soundtracks.length - 1]);
        else
            setCurrentTrack(soundtracks[currentTrack.id - 1]);
    }

    return (
        <div className="grid place-items-center">
            <audio src={audioTrack} ref={audioRef}></audio>
            <AudioSlider />
            <div className="flex items-center gap-3 ">
                <PreviousTrackButton handlePreviousTrackChange={handlePreviousTrackChange} />

                { !isPlaying && <PlayButton setIsPlaying={setIsPlaying} /> }
                { isPlaying && <PauseButton setIsPlaying={setIsPlaying} /> }

                <NextTrackButton handleNextTrackChange={handleNextTrackChange} />
            </div>
        </div>
        
    )
}

export default PlayerControls;