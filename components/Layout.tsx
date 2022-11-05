import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <main className="h-full w-full">
      <div className="max-w-5xl mx-auto pb-5">
        <NavBar />
      </div>
      {children}
    </main>
  );
}
