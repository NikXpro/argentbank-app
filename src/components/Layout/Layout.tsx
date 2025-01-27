import "@components/Layout/Layout.scss";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Layout() {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
