import PropTypes from "prop-types";

export const Filters = (props) => {
    const filterTypes = {
        all: "All",
        album: "Albums",
        artist: "Artists",
        playlist: "Playlists",
        track: "Tracks",
        audiobook: "Audiobooks",
    };

    return (
        <ul>
            {Object.keys(filterTypes).map((filter) => {
                return (
                    <li
                        key={filter}
                        onClick={() => {
                            props.onFilterSelect(filter);
                        }}
                        className={
                            props.currentFilter === filter ? "underline" : null
                        }
                    >
                        {filterTypes[filter]}
                    </li>
                );
            })}
        </ul>
    );
};

Filters.propTypes = {
    currentFilter: PropTypes.string.isRequired,
    onFilterSelect: PropTypes.func.isRequired,
};
