import { createContext } from "react";

const MushroomContext = createContext({
    mushrooms: [],
    getMushrooms: () => {}
});

export default MushroomContext;