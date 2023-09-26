import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchSearch } from "../../../api/fetchSearch";

import { Tracks } from "./Tracks";
import { Artists } from "./Artists";
import { Albums } from "./Albums";
import { Playlists } from "./Playlists";
import { Audiobooks } from "./Audiobooks";

import { Filters } from "../Filters";

export const Results = (props) => {
    const [filter, setFilter] = useState("all");

    const { data, fetchNextPage, status } = useInfiniteQuery(
        [
            "music",
            `https://api.spotify.com/v1/search?q=${props.searchQuery}&type=${
                filter === "all"
                    ? "album,artist,playlist,track,show,episode,audiobook"
                    : `${filter.slice(0, -1)}`
            }&offset=0&limit=10`,
        ],
        fetchSearch,
    );

    return (
        <Fragment>
            <Filters
                currentFilter={filter}
                onFilterSelect={(filter) => setFilter(filter)}
            />

            {status === "success"
                ? data.pages.map((page, index) => (
                      <Fragment key={index}>
                          {(filter === "all" || filter === "tracks") && (
                              <Tracks
                                  filterIsSelected={filter === "tracks"}
                                  tracks={page.tracks}
                                  onLoadMore={(data) => {
                                      fetchNextPage(data);
                                  }}
                              />
                          )}

                          {(filter === "all" || filter === "artists") && (
                              <Artists
                                  filterIsSelected={filter === "artists"}
                                  artists={page.artists}
                                  //   onLoadMore={(data) => console.log(data)}
                              />
                          )}

                          {(filter === "all" || filter === "albums") && (
                              <Albums
                                  filterIsSelected={filter === "albums"}
                                  albums={page.albums}
                                  //   onLoadMore={(data) => console.log(data)}
                              />
                          )}

                          {(filter === "all" || filter === "playlists") && (
                              <Playlists
                                  filterIsSelected={filter === "playlists"}
                                  playlists={page.playlists}
                                  //   onLoadMore={(data) => console.log(data)}
                              />
                          )}

                          {(filter === "all" || filter === "audiobooks") && (
                              <Audiobooks
                                  filterIsSelected={filter === "audiobooks"}
                                  audiobooks={page.audiobooks}
                                  //   onLoadMore={(data) => console.log(data)}
                              />
                          )}
                      </Fragment>
                  ))
                : null}
        </Fragment>
    );
};

Results.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    limit: PropTypes.number,
};
