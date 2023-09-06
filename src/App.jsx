import { useState, Fragment } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Search } from "./components/Search/Search";
import { Results } from "./components/Search/Results/Results";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60, // 60 minutes
            cacheTime: 1000 * 60 * 60, // 60 minutes
        },
    },
});

const App = () => {
    const [query, setSearchURL] = useState();

    return (
        <QueryClientProvider client={queryClient}>
            <Fragment>
                <Search setSearchURL={setSearchURL} />

                {query && <Results query={query} />}
            </Fragment>
        </QueryClientProvider>
    );
};

export default App;
