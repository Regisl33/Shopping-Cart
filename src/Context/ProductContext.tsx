import { createContext, useState } from "react";

const [isCartDisplay, setIsCartDisplay] = useState(false);

export const displayContext = createContext(isCartDisplay);
export const setDisplayContext = createContext(setIsCartDisplay);
