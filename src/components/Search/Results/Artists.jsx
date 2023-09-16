import PropTypes from "prop-types";
import { Fragment } from "react";

export const Artists = (props) => {
    if (props.artists.items.length !== 0) {
        return (
            <Fragment>
                <h2>Artists</h2>

                <ul>
                    {props.artists.items.map((artist) => (
                        <li key={artist.id}>
                            <img
                                src={
                                    artist.images[1]
                                        ? artist.images[1].url
                                        : "/img/artist.svg"
                                }
                                alt={artist.name}
                            />

                            <p>{artist.name}</p>

                            <p>Artist</p>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    } else {
        return null;
    }
};

Artists.propTypes = {
    artists: PropTypes.object.isRequired,
};
