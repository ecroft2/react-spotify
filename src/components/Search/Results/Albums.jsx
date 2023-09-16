import PropTypes from "prop-types";
import { Fragment } from "react";

export const Albums = (props) => {
    if (props.albums.items.length !== 0) {
        return (
            <Fragment>
                <h2>Albums</h2>

                <ul>
                    {props.albums.items.map((album) => {
                        return (
                            <li key={album.id}>
                                <img
                                    src={album.images[1].url}
                                    alt={`Cover art for album: ${album.name}`}
                                />

                                <p>{album.name}</p>

                                <p>
                                    {new Date(album.release_date).getFullYear()}{" "}
                                    &bull;{" "}
                                    {album.artists.map(
                                        (artist, index) =>
                                            `${artist.name}${
                                                index < album.artists.length - 1
                                                    ? ", "
                                                    : ""
                                            }`,
                                    )}
                                </p>
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

Albums.propTypes = {
    albums: PropTypes.object.isRequired,
};
