
function SongInfo({ songTitle, songArtist }) {
    return (
        <div className="song-info">
            <h2 className="text-xl  font-semibold tracking-wide">{ songTitle }</h2>
            <p className="font-light">{ songArtist }</p>
        </div>
    );
}

SongInfo.defaultProps = {
    songTitle: "No Track Found"
}

export default SongInfo;