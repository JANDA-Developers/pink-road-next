import { InMemoryCache } from "@apollo/client";

const merge = (existing = [], incoming) => {
    console.log("mememememememggegegege");
    return [...existing, ...incoming];
};

export const cache = new InMemoryCache({
    addTypename: true,
});

export default cache;
