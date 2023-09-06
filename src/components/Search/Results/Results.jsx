import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { useQuery } from "@tanstack/react-query";

import { fetchSearch } from "../../../api/fetchSearch";

import { Tracks } from "./Tracks";
import { Artists } from "./Artists";
import { Albums } from "./Albums";

export const Results = (props) => {
    const [filterType, setFilterType] = useState("all");

    const { isSuccess, data } = useQuery(
        [
            "music",
            {
                filterType,
                query: props.query,
            },
        ],
        fetchSearch,
    );

    if (isSuccess) {
        return (
            <Fragment>
                <div>
                    <h2>Songs</h2>

                    {<Tracks tracks={data.tracks} />}
                </div>

                <div>
                    <h2>Artists</h2>

                    {<Artists artists={data.artists} />}
                </div>

                <div>
                    <h2>Albums</h2>

                    {<Albums albums={data.albums} />}
                </div>
            </Fragment>
        );
    } else {
        return null;
    }
};

Results.propTypes = {
    query: PropTypes.string.isRequired,
};
