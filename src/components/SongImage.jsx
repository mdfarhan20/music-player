
function SongImage({ songImage }) {
    return (
        <img
            src={ songImage } 
            alt="song-image"
            className="w-80 rounded-lg"
        />
    );
}

export default SongImage;
