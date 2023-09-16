import PropTypes from "prop-types";
import { Fragment } from "react";

export const Audiobooks = (props) => {
    if (props.audiobooks.items.length !== 0) {
        return (
            <Fragment>
                <h2>Audiobooks</h2>

                <ul>
                    {props.audiobooks.items.map((audiobook) => (
                        <li key={audiobook.id}>
                            <img
                                src={audiobook.images[1].url}
                                alt={`Cover art for audiobook: ${audiobook.name}`}
                            />

                            <p>{audiobook.name}</p>

                            {audiobook.authors.map(
                                (author, index) =>
                                    `${author.name}${
                                        index < audiobook.authors.length - 1
                                            ? ", "
                                            : ""
                                    }`,
                            )}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    } else {
        return null;
    }
};

Audiobooks.propTypes = {
    audiobooks: PropTypes.object.isRequired,
};
