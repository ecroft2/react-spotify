import PropTypes from "prop-types";

export const Filters = (props) => {
    const filterTypes = {
        all: "All",
        albums: "Albums",
        artists: "Artists",
        playlists: "Playlists",
        tracks: "Tracks",
        audiobooks: "Audiobooks",
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
