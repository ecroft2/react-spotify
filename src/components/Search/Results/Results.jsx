import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { useQuery } from "@tanstack/react-query";

import { fetchSearch } from "../../../api/fetchSearch";

import { Tracks } from "./Tracks";
import { Artists } from "./Artists";
import { Albums } from "./Albums";
import { Playlists } from "./Playlists";
import { Audiobooks } from "./Audiobooks";

export const Results = (props) => {
    const [filterType, setFilterType] = useState("all");

    const { isSuccess, data } = useQuery(
        [
            "music",
            {
                filterType,
                query: props.query,
                limit: props.limit,
            },
        ],
        fetchSearch,
    );

    if (isSuccess) {
        return (
            <Fragment>
                <Tracks tracks={data.tracks} />

                <Artists artists={data.artists} />

                <Albums albums={data.albums} />

                <Playlists playlists={data.playlists} />

                <Audiobooks audiobooks={data.audiobooks} />
            </Fragment>
        );
    } else {
        return null;
    }
};

Results.propTypes = {
    query: PropTypes.string.isRequired,
    limit: PropTypes.number,
};
