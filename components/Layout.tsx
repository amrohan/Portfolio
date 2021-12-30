import React from "react";
import NavBar from "./NavBar";

// Using Layout so we can wrap things into _app.js so component can be mounted on every page
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
