import { createContext, useState } from "react";
const BackgroundContext = createContext();
function ContextProvider({ children }) {
  const [color, setColor] = useState("bg-gradient");
  return (
    <BackgroundContext.Provider value={{ color, setColor }}>
      {children}
    </BackgroundContext.Provider>
  );
}
export { BackgroundContext, ContextProvider };
