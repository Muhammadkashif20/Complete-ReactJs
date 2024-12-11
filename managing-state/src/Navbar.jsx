import React, { useContext } from "react";
import { themeContext } from "./context/themeContext";
import Button from "./Components/Button";
const Navbar = () => {
  const { themeColor, setThemeColor } = useContext(themeContext);
  return (
    <div
      className={`w-full p-4  ${
        themeColor == "light"
          ? "bg-white text-gray-600"
          : " bg-deepPurple text-white"
      }`}
    >
      <h1
        className={`${
          themeColor == "light" ? "text-gray-600" : "text-white"
        } font-bold text-2xl`}
      >
        Kashif Store
      </h1>
      <Button
      
        onPress={() => {
          if (themeColor === "light") {
            setThemeColor("dark");
          } else {
            setThemeColor("light");
          }
        }}
        btnText={themeColor === "light" ? "Change To Dark" : "Change To Light"}
      />
    </div>
  );
};

export default Navbar;
