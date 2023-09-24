export const fetchSearch = async ({ queryKey }) => {
    const base = "https://api.spotify.com/v1/search";

    const queryString = `?q=${queryKey[1].searchQuery}&type=${queryKey[1].filter === "all" ? "album,artist,playlist,track,show,episode,audiobook" : queryKey[1].filter}${queryKey[1].limit ? `&limit=${queryKey[1].limit}` : ""}`;

    const apiResponse = await fetch(base + queryString, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_REACT_SPOTIFY_API_TOKEN}`
        }
    });

    if (!apiResponse.ok) {
        throw new Error(`Error fetching music from URL ${base + queryString}`);
    }

    return apiResponse.json();
};
