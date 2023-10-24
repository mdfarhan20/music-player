
function SongImage({ songImage }) {
    return (
        <img
            src={ songImage } 
            alt="song-image"
            className="border-2 border-white rounded-lg w-full"
        />
    );
}

export default SongImage;
