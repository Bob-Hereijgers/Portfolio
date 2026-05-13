import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Base Components/Root/Root";
import HomePage from "./components/Home/Homepage/Homepage";
import ExperiencePage from "./components/ExperiencePage/ExperiencePage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ContactPage from "./components/Contact Page/ContactPage";
import HobbiesPage from "./components/HobbiesPage/HobbiesPage";

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
          path: "experience",
          element: <ExperiencePage />,
        },
        {
          path: "skills",
          element: <SkillsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "hobbies",
          element: <HobbiesPage />,
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
