import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { useQuery } from "@tanstack/react-query";

import { fetchSearch } from "../../../api/fetchSearch";

import { Tracks } from "./Tracks";
import { Artists } from "./Artists";
import { Albums } from "./Albums";
import { Playlists } from "./Playlists";
import { Audiobooks } from "./Audiobooks";

import { Filters } from "../Filters";

export const Results = (props) => {
    const [filter, setFilter] = useState("all");

    const { isSuccess, data } = useQuery(
        [
            "music",
            {
                filter,
                query: props.query,
                limit: props.limit,
            },
        ],
        fetchSearch,
    );

    const [availableFilters, setAvailableFilters] = useState();

    useState(() => {
        if (isSuccess) {
            let availableFilters;

            Object.keys(data).map((filter) => {
                console.log(filter);
                if (data[filter].items.length > 0) {
                    filter.push(availableFilters);
                }
            });

            console.log(availableFilters);

            setAvailableFilters(availableFilters);
        }
    }, [isSuccess]);

    if (isSuccess) {
        return (
            <Fragment>
                <Filters
                    availableFilters={availableFilters}
                    currentFilter={filter}
                    onFilterSelect={(filter) => setFilter(filter)}
                />

                {(filter === "all" || filter === "track") && (
                    <Tracks tracks={data.tracks} />
                )}

                {(filter === "all" || filter === "artist") && (
                    <Artists artists={data.artists} />
                )}

                {(filter === "all" || filter === "album") && (
                    <Albums albums={data.albums} />
                )}

                {(filter === "all" || filter === "playlist") && (
                    <Playlists playlists={data.playlists} />
                )}

                {(filter === "all" || filter === "audiobook") && (
                    <Audiobooks audiobooks={data.audiobooks} />
                )}
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
