
function PauseButton({ fillColor, setIsPlaying }) {
    return (
        <button onClick={() => setIsPlaying(false)}>
            <svg className="w-20" fill={fillColor} width="100px" height="100px" viewBox="-2.88 -2.88 53.76 53.76" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <title>pause-circle-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"/> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM21,31a2,2,0,0,1-4,0V17a2,2,0,0,1,2-2,2.1,2.1,0,0,1,2,2Zm10,0a2,2,0,0,1-4,0V17a2,2,0,0,1,2-2,2.1,2.1,0,0,1,2,2Z"/> </g> </g> </g>
            </svg>
        </button>
    )
}

PauseButton.defaultProps = {
    fillColor: "black"
}

export default PauseButton;