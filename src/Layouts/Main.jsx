import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Container } from "postcss";

 
const Main = () => {
    return (
        <div>
              <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer> 
        </div>
    );
};

export default Main;