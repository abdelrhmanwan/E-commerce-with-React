import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import Test from "../Pages/Test/Test";
import WhishList from "../Pages/WishList/WhishList";
import Homepage from "../Pages/Homepage/Homepage";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "CreateAccount", element: <CreateAccount /> },
      { path: "Login", element: <Login /> },
      { path: "*", element: <Error /> },
      { path: "Whishlist", element: <WhishList /> },
      { path: "TestSpace", element: <Test /> },
    ],
  }, //Outlet Page
]);

export default Routes;
