import PropTypes from "prop-types";
import { Fragment } from "react";

export const Playlists = (props) => {
    if (props.playlists.items.length !== 0) {
        return (
            <Fragment>
                <h2>Playlists</h2>

                <ul>
                    {props.playlists.items.map((playlist) => (
                        <li key={playlist.id}>
                            <img
                                src={playlist.images[0].url}
                                alt={`Cover art for playlist: ${playlist.name}`}
                            />

                            <p>{playlist.name}</p>

                            <p>By {playlist.owner.display_name}</p>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    } else {
        return null;
    }
};

Playlists.propTypes = {
    playlists: PropTypes.object.isRequired,
};
