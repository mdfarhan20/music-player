import { useEffect, useContext, useRef, useState } from "react";
import AudioSlider from "components/AudioSlider";
import PlayButton from "components/PlayButton";
import PauseButton from "components/PauseButton";
import NextTrackButton from "components/NextTrackButton";
import PreviousTrackButton from "components/PreviousTrackButton";
import MusicContext from "MusicContext";

function PlayerControls({ audioTrack }) {
    const { 
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        soundtracks 
    } = useContext(MusicContext);
    const [audioDuration, setAudioDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [sliderTime, setSliderTime] = useState(0);
    const [moveInterval, setMoveInterval] = useState(null);
    const audioRef = useRef();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        if (mounted) {
            stopSlider();
            setIsPlaying(true);
            setCurrentTime(0);
            setSliderTime(0);
        } else {
            setMounted(true);
        }
    }, [currentTrack]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            audioRef.current.addEventListener("ended", handleNextTrackChange);
            moveSlider();
        }
        else {
            audioRef.current.pause();
            stopSlider();
        }
    }, [currentTrack, isPlaying]);

    useEffect(() => {
        audioRef.current.currentTime = currentTime;
        setSliderTime(currentTime);
    }, [currentTime]);

    const [isSliding, setIsSliding] = useState(false);

    function moveSlider() {
        if (isSliding) return;

        const move = setInterval(() => {
            setSliderTime(prev => prev + 1);
        }, 1000);
        setMoveInterval(move);
        setIsSliding(true);
    }

    function stopSlider() {
        if (!isSliding) return;

        clearInterval(moveInterval);
        setMoveInterval(null);
        setIsSliding(false);
    }

    function handleNextTrackChange() {
        if (currentTrack.id === soundtracks.length - 1)
            setCurrentTrack(soundtracks[0]);
        else
            setCurrentTrack(soundtracks[currentTrack.id + 1]);
        setIsPlaying(false);
    }

    function handlePreviousTrackChange() {
        if (currentTrack.id === 0)
            setCurrentTrack(soundtracks[soundtracks.length - 1]);
        else
            setCurrentTrack(soundtracks[currentTrack.id - 1]);
        setIsPlaying(false);
    }

    return (
        <div className="grid gap-y-4">
            <audio 
                src={audioTrack} 
                ref={audioRef}
                onCanPlayThrough={(e) => setAudioDuration(e.target.duration)}
            ></audio>

            <AudioSlider 
                audioDuration={audioDuration}
                sliderTime={sliderTime}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
            />

            <div className="flex justify-center items-center gap-x-2">
                <PreviousTrackButton handlePreviousTrackChange={handlePreviousTrackChange} />

                { !isPlaying && <PlayButton /> }
                { isPlaying && <PauseButton /> }

                <NextTrackButton handleNextTrackChange={handleNextTrackChange} />
            </div>
        </div>
        
    )
}

export default PlayerControls;