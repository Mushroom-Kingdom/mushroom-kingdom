import { createContext } from "react";

const mushroomcontext = createContext({
    mushrooms: [],
    getMushrooms: () => {}
});

export default mushroomcontext;