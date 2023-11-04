import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-blogs",
                element: <AllBlogs />,
            },

        ],
    },
]);