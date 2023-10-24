import MusicContext from "MusicContext";
import PlaylistTrack from "components/PlaylistTrack";
import { useContext } from "react";

function Playlist() {
    const { setCurrentTrack, setIsPlaying, soundtracks } = useContext(MusicContext); 

    const handleTrackChange = (id) => {
        setCurrentTrack(soundtracks[id]);
        setIsPlaying(false);
    }

    return (
        <section className="border-1 border-primary md:max-h-full md:overflow-hidden">
            <h2 
                className="w-full text-center text-2xl text-white font-semibold bg-primary py-4"
            >Soundtracks</h2>

            <div className="grid gap-4 p-4 md:pb-16 lg:pb-20 md:max-h-full lg:grid-cols-2 md:overflow-y-scroll">
                { soundtracks.map(track => (
                    <PlaylistTrack
                        key={track.id}
                        trackId={track.id}
                        trackTitle={track.title}
                        trackImage={track.image}
                        trackArtist={track.artist}
                        handleTrackChange={handleTrackChange}
                    />
                )) }
            </div>
        </section>
    )
}

export default Playlist;