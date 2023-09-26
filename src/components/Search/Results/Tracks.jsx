import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import { useInView } from "react-intersection-observer";

export const Tracks = (props) => {
    const { inView: trackInView, ref } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (props.filterIsSelected) {
            console.log(trackInView);
        }
    }, [trackInView, props.filterIsSelected]);

    if (props.tracks.items.length !== 0) {
        return (
            <Fragment>
                {props.filterIsSelected === false && <h2>Tracks</h2>}

                {
                    trackInView && props.filterIsSelected
                    // && props.onLoadMore({
                    //     pageParam: props.tracks.next,
                    // })
                }
                <ul ref={ref}>
                    {props.tracks.items.map((track) => {
                        const duration = new Date(track.duration_ms)
                            .toISOString()
                            .slice(11, 19);

                        return (
                            <Fragment key={track.id}>
                                <li>
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
                                                    index <
                                                    track.artists.length - 1
                                                        ? ", "
                                                        : ""
                                                }`,
                                        )}
                                        {props.filterIsSelected &&
                                            track.album.name}
                                        {duration.startsWith("00:")
                                            ? duration.slice(3)
                                            : duration}
                                    </div>
                                </li>
                            </Fragment>
                        );
                    })}
                </ul>
                {props.filterIsSelected && (
                    <button onClick={props.onLoadMore(props.tracks.next)}>
                        More
                    </button>
                )}
            </Fragment>
        );
    } else {
        return null;
    }
};

Tracks.propTypes = {
    tracks: PropTypes.object.isRequired,
    filterIsSelected: PropTypes.bool.isRequired,
    onLoadMore: PropTypes.func.isRequired,
};
