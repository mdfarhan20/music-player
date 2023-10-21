
function AudioSlider({ }) {
    return (
        <div className="flex gap-3 w-full">
            <p>0:00</p>
            <input 
                type="range"
                name="slider"
                className="grow"
            />
            <p>4:36</p>
        </div>
    )
}

export default AudioSlider;