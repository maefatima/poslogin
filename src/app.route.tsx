import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./pages/login-pages/LoginForm";
import TransactionScreen from "./pages/transaction/TransactionScreen";
// import AboutPage from "./about-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    children: [
      {
        path: "",
        element: <TransactionScreen />,
      },
      {
        // path: ":filmId",
        // element: <AboutPage />,
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}
