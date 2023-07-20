import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Albums from "./pages/Albums";
import Login from "./pages/Login";
import AddSong from "./pages/AddSong";
import Example from "./pages/Example";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/albums", element: <Albums /> },
      { path: "/login", element: <Login /> },
      { path: "/songs/add", element: <AddSong /> },
      { path: "/albums/lana-del-rey", element: <Example /> },
    ],
  },
]);

export default router;
