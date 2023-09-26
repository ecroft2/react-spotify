export const fetchSearch = async ({ queryKey, pageParam = queryKey[1] }) => {
    const apiResponse = await fetch(pageParam, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_REACT_SPOTIFY_API_TOKEN}`
        }
    });

    if (!apiResponse.ok) {
        throw new Error(`Error fetching music from URL ${pageParam}`);
    }

    return apiResponse.json();
};
