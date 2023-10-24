import { useRef } from "react";

function AudioSlider({ audioDuration, sliderTime, currentTime, setCurrentTime }) {
    const sliderRef = useRef();

    const formatDuration = (duration) => {
        let minutes = parseInt(duration / 60).toString();
        let seconds = parseInt(duration % 60).toString();

        if (seconds.length === 1)
            seconds = "0" + seconds;
        
        return (`${minutes}:${seconds}`);
    }

    return (
        <div className="flex items-center gap-x-4">
            <p>{ formatDuration(sliderTime) }</p>
            <input 
                type="range"
                name="slider"
                ref={sliderRef}
                min="0"
                max={Math.ceil(audioDuration)}
                value={sliderTime}
                onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                className="grow"
            />
            <p>{ formatDuration(audioDuration) }</p>
        </div>
    )
}

export default AudioSlider;