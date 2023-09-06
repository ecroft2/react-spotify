export const Search = (props) => {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.setSearchURL(event.target.search.value);
            }}
        >
            <input
                type="text"
                name="search"
                placeholder="What do you want to listen to?"
            />
        </form>
    );
};
