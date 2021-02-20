import { createContext } from "react";

const mushroomContext = createContext({
    mushrooms: [],
    getMushrooms: () => {}
});

export default mushroomContext;