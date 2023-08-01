import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AddSong from "./pages/AddSong";
import HeartPage from "./pages/HeartPage";
import Songs from "./pages/Songs";
import ErrorPage from "./pages/ErrorPage";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/songs", element: <Songs /> },
      { path: "/login", element: <Login /> },
      { path: "/songs/add", element: <AddSong /> },
      { path: "/songs/heart", element: <HeartPage /> },
    ],
  },
]);

export default router;
