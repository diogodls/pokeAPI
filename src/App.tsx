import Navbar from "./components/layout/Navbar/Navbar.tsx";
import {Outlet} from "react-router";
import Footer from "./components/layout/Footer/Footer.tsx";

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;