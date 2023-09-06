export const Artists = (props) => {
    console.log(props.artists.items);

    return (
        <ul>
            {props.artists.items.map((artist) => (
                <li key={artist.id}>
                    <img
                        src={
                            artist.images[1]
                                ? artist.images[1].url
                                : "/img/artist.svg"
                        }
                        alt={artist.name}
                    />
                    <p>{artist.name}</p>
                    <p>Artist</p>
                </li>
            ))}
        </ul>
    );
};
