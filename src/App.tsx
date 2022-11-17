import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "redux/store";

import { ChakraProvider } from "@chakra-ui/react";

import Main from "layout/main";
import HomePages from "pages/HomePages";
import ListMoviePages from "pages/ListMoviePages";
import SearchResultPages from "pages/SearchResultPages";
import MovieDetailPages from "pages/MovieDetailPages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      // errorElement: <ErrorBoundary404 />,
      children: [
        {
          path: "/",
          element: <HomePages />,
        },
        {
          path: "/list/:type",
          element: <ListMoviePages />,
        },
        {
          path: "/search/:keyword",
          element: <SearchResultPages />,
        },
        {
          path: "/detail/:movie_id",
          element: <MovieDetailPages />,
        },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
