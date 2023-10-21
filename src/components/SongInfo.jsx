
function SongInfo({ songTitle, songArtist }) {
    return (
        <div className="song-info">
            <h2 className="font-medium">{ songTitle }</h2>
            <p className="font-light text-sm">{ songArtist }</p>
        </div>
    );
}

SongInfo.defaultProps = {
    songTitle: "No Track Found"
}

export default SongInfo;