import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Base Components/Root/Root";
//Base
import HomePage from "./components/Home/Homepage/Homepage";
import CardPage from "./components/ExercisePage/CardPage/CardPage";
import ContactPage from "./components/Contact Page/ContactPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
//Pages
import Lists from "./components/ExercisePage/Excercises/Labo 1/Lists/Lists";
import SlotMachine from "./components/ExercisePage/Excercises/Labo 1/SlotMachine/SlotMachine";
import Expressions from "./components/ExercisePage/Excercises/Labo 1/Expressions/Expressions";
//Labo 1
import Facebook from "./components/ExercisePage/Excercises/Facebook/Facebook";
//Labo 2
import InputFields from "./components/ExercisePage/Excercises/Labo 3/InputFields/InputFields";
import CheckBox from "./components/ExercisePage/Excercises/Labo 3/CheckBox/CheckBox";
import UpDown from "./components/ExercisePage/Excercises/Labo 3/UpDown/UpDown";
import Loading from "./components/ExercisePage/Excercises/Labo 3/Loading/Loading";
import ColorPicker from "./components/ExercisePage/Excercises/Labo 3/ColorPicker/ColorPicker";
import Contact from "./components/ExercisePage/Excercises/Labo 3/Contact/Contact";
//Labo 3
import Colors from "./components/ExercisePage/Excercises/Labo 4/Colors/Colors";
import CounterList from "./components/ExercisePage/Excercises/Labo 4/CounterList/CounterList";
import Filtering from "./components/ExercisePage/Excercises/Labo 4/Filtering/Filtering";
import ShoppingList from "./components/ExercisePage/Excercises/Labo 4/ShoppingList/ShoppingList";
import StatefulSlotmachine from "./components/ExercisePage/Excercises/Labo 4/StatefulSlotMachine/StatefulSlotmachine";
//Labo 4
import Interval from "./components/ExercisePage/Excercises/Labo 5/Interval/Interval";
import Pokemon from "./components/ExercisePage/Excercises/Labo 5/Pokemon/Pokemon";
//Labo 5
import Todo from "./components/ExercisePage/Excercises/Labo 6/Todo/Todo";
//Labo 6



//Exercises

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
          path: "Exercise/Filtering",
          element: <Filtering />,
        },
        {
          path: "Exercise/Pokemon",
          element: <Pokemon />,
        },
        {
          path: "Exercise/Todo",
          element: <Todo />,
        },
        {
          path: "Exercise/CounterList",
          element: <CounterList />,
        },
        {
          path: "Exercise/Expressions",
          element: <Expressions />,
        },
        {
          path: "Exercise/SlotMachine",
          element: <SlotMachine />,
        },
        {
          path: "Exercise/Lists",
          element: <Lists />,
        },
        {
          path: "Exercise/Facebook",
          element: <Facebook />,
        },
        {
          path: "Exercise/InputFields",
          element: <InputFields />,
        },
        {
          path: "Exercise/CheckBox",
          element: <CheckBox />,
        },
        {
          path: "Exercise/UpDown",
          element: <UpDown />,
        },
        {
          path: "Exercise/Loading",
          element: <Loading />,
        },
        {
          path: "Exercise/ColorPicker",
          element: <ColorPicker />,
        },
        {
          path: "Exercise/Contact",
          element: <Contact />,
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
