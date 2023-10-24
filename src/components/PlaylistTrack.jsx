
function PlaylistTrack({ trackId, trackTitle, trackImage, trackArtist, handleTrackChange }) {
    return (
        <div
            onClick={() => handleTrackChange(trackId)}
            className="p-4 flex items-center gap-x-4 text-white 
            bg-surface rounded-md cursor-pointer hover:brightness-75 lg:h-fit"
        >
            <img className="w-1/6 " src={trackImage} alt="track img" />
            <p className="font-extralight"><span className="font-semibold block">{trackTitle}</span>{trackArtist}</p>
        </div>
    );
}

export default PlaylistTrack;