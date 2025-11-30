import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import UpperHeader from "./component/UpperHeader/UpperHeader";
import Contact from "./Pages/Contact/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <UpperHeader />
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" autoClose={5000}/>
    </>
  );
}

export default App;
