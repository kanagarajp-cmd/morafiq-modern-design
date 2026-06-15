import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/landing";
import { MobileHome } from "./pages/mobile-home";

export const router = createBrowserRouter([
  { path: "/", Component: Landing },
  { path: "/app", Component: MobileHome },
  { path: "*", Component: Landing },
]);
