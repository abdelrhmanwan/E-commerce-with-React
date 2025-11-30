import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Routes from "./routes/Routes.jsx";
import { AuthProvider } from "./Pages/contexts/AuthContext";
createRoot(document.getElementById("root")).render(
 

<StrictMode>
  <AuthProvider>
    <RouterProvider router={Routes} />
  </AuthProvider>
</StrictMode>

);
