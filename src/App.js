import React, { StrictMode, useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import WrappedComponent from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <StrictMode>
        <BrowserRouter>
          <header>
            <Link to={"/"}>Adopt me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<WrappedComponent />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
