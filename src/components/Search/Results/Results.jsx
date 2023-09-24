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
    const [availableFilters, setAvailableFilters] = useState();

    const { isSuccess: searchSuccess, data } = useQuery(
        [
            "music",
            {
                filter,
                searchQuery: props.searchQuery,
                limit: props.limit,
            },
        ],
        fetchSearch,
    );

    useState(() => {
        if (searchSuccess) {
            let availableFilters;

            Object.keys(data).map((filter) => {
                if (data[filter].items.length > 0) {
                    filter.push(availableFilters);
                }
            });

            setAvailableFilters(availableFilters);
        }
    }, [searchSuccess]);

    return (
        <Fragment>
            <Filters
                availableFilters={availableFilters}
                currentFilter={filter}
                onFilterSelect={(filter) => setFilter(filter)}
            />

            {searchSuccess ? (
                <Fragment>
                    {(filter === "all" || filter === "track") && (
                        <Fragment>
                            <Tracks
                                filterIsSelected={filter === "track"}
                                tracks={data.tracks}
                            />
                        </Fragment>
                    )}

                    {(filter === "all" || filter === "artist") && (
                        <Fragment>
                            <Artists
                                filterIsSelected={filter === "artist"}
                                artists={data.artists}
                            />
                        </Fragment>
                    )}

                    {(filter === "all" || filter === "album") && (
                        <Fragment>
                            <Albums
                                filterIsSelected={filter === "album"}
                                albums={data.albums}
                            />
                        </Fragment>
                    )}

                    {(filter === "all" || filter === "playlist") && (
                        <Fragment>
                            <Playlists
                                filterIsSelected={filter === "playlist"}
                                playlists={data.playlists}
                            />
                        </Fragment>
                    )}

                    {(filter === "all" || filter === "audiobook") && (
                        <Fragment>
                            <Audiobooks
                                filterIsSelected={filter === "audiobook"}
                                audiobooks={data.audiobooks}
                            />
                        </Fragment>
                    )}
                </Fragment>
            ) : null}
        </Fragment>
    );
};

Results.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    limit: PropTypes.number,
};
