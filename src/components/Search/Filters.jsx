export const Filters = (props) => {
    const itemsToMap = {
        all: "all",
        album: "Album",
        artist: "Artist",
        playlist: "Playlist",
        track: "Track",
        show: "Show",
        episode: "Episode",
        audiobook: "Audiobook",
    };

    return (
        <ul
            onClick={(event) => {
                console.log(event);
            }}
        >
            <li key="album">album</li>
            <li key="artist">artist</li>
            <li key="playlist">playlist</li>
            <li key="track">track</li>
            <li key="show">show</li>
            <li key="episode">episode</li>
            <li key="audiobook">audiobook</li>
        </ul>
    );
};
