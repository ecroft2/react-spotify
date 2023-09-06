export const Tracks = (props) => {
    return (
        <ul>
            {props.tracks.items.map((track) => {
                const duration = new Date(track.duration_ms)
                    .toISOString()
                    .slice(11, 19);

                return (
                    <li key={track.id}>
                        <div>
                            {
                                <img
                                    src={track.album.images[2].url}
                                    alt={`Cover art for album: ${track.album.name}`}
                                />
                            }
                            {track.name}
                            {track.explicit ? <span>E</span> : ""}
                            {track.artists.map(
                                (artist, index) =>
                                    `${artist.name}${
                                        index < track.artists.length - 1
                                            ? ", "
                                            : ""
                                    }`,
                            )}
                            {duration.startsWith("00:")
                                ? duration.slice(3)
                                : duration}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
