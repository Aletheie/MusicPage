import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AddSong from "./pages/AddSong";
import Example from "./pages/Example";
import Songs from "./pages/Songs";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/songs", element: <Songs /> },
      { path: "/login", element: <Login /> },
      { path: "/songs/add", element: <AddSong /> },
      { path: "/albums/lana-del-rey", element: <Example /> },
    ],
  },
]);

export default router;
