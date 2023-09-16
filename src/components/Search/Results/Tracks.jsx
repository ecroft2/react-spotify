import PropTypes from "prop-types";
import { Fragment } from "react";

export const Tracks = (props) => {
    if (props.tracks.items.length !== 0) {
        return (
            <Fragment>
                <h2>Tracks</h2>

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
            </Fragment>
        );
    } else {
        return null;
    }
};

Tracks.propTypes = {
    tracks: PropTypes.object.isRequired,
};
