import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Base Components/Root/Root";

import HomePage from "./components/Home/Homepage/Homepage";
import CardPage from "./components/ExercisePage/CardPage/CardPage";
import ContactPage from "./components/Contact Page/ContactPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";

import Numbers from "./components/ExercisePage/Excercises/Numbers";
import Colors from "./components/ExercisePage/Excercises/Colors";
import Interval from "./components/ExercisePage/Excercises/Interval";
import ShoppingList from "./components/ExercisePage/Excercises/ShoppingList";
import StatefulSlotmachine from "./components/ExercisePage/Excercises/StatefulSlotmachine";

const PageNotFound = () => {
  return <h1>Page Not Found</h1>;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "ExerciseGallery",
          element: <CardPage />,
        },
        {
          path: "Contact",
          element: <ContactPage />,
        },
        {
          path: "Favorites",
          element: <FavoritesPage />,
        },
        {
          path: "Exercise/Numbers",
          element: <Numbers />,
        },
        {
          path: "Exercise/Colors",
          element: <Colors />,
        },
        {
          path: "Exercise/Interval",
          element: <Interval />,
        },
        {
          path: "Exercise/ShoppingList",
          element: <ShoppingList />,
        },
        {
          path: "Exercise/SlotMachine",
          element: <StatefulSlotmachine />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
