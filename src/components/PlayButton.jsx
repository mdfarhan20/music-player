import MusicContext from "MusicContext";
import { useContext } from "react";

function PlayButton() {
    const { setIsPlaying } = useContext(MusicContext);

    return (
        <button onClick={() => setIsPlaying(true)} className="w-20">
            <svg className="fill-white hover:fill-primary transition-all duration-100 w-full h-full" viewBox="0 0 256.00 256.00" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00256">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36.4375,110.65625-48,32A7.99612,7.99612,0,0,1,104,160V96a7.99612,7.99612,0,0,1,12.4375-6.65625l48,32a7.99959,7.99959,0,0,1,0,13.3125Z"/> </g>
            </svg>
        </button>
    )
}

export default PlayButton;