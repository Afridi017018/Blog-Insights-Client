import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddBlog from "./pages/AddBlog/AddBlog";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Featured from "./pages/Featured/Featured";
import Home from "./pages/Home/Home";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
import WishList from "./pages/WishList/WishList";

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
            {
                path: "/blog-details",
                element: <BlogDetails />,
            },
            {
                path: "/wishlist",
                element: <WishList />,
            },
            {
                path: "/featured",
                element: <Featured />,
            },
            {
                path: "/add-blog",
                element: <AddBlog />,
            },
            {
                path: "/update-blog",
                element: <UpdateBlog />,
            },

        ],
    },
]);