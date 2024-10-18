import { createBrowserRouter } from "react-router-dom";
import Details from "../pages/details/Details";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import WishList from "../pages/wishlist/WishList";
import Root from "../root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        // loader: ({ params }) =>
        //   fetch(`https://gutendex.com/books/?ids=${params.id}`),
      },

      {
        path: "/wishList",
        element: <WishList />,
      },
    ],
  },
]);
