import React, { createContext, useState } from "react";

export const userContext = createContext();
const HandleUserContext = ({ children }) => {
  const [user, setUser] = useState({
    name: "Muhammad Kashif",
  });
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default HandleUserContext;
