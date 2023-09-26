import { useState, Fragment } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
    const [searchQuery, setSearchQuery] = useState();

    return (
        <QueryClientProvider client={queryClient}>
            <Fragment>
                <Search setSearchQuery={setSearchQuery} />

                {searchQuery && <Results searchQuery={searchQuery} />}
            </Fragment>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    );
};

export default App;
