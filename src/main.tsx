import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components";
import "./index.scss";
import { Home } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
