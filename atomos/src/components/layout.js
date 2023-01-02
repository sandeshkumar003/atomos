import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavigationBar";
const Layout = () => {
  return (
    <>
    <NavbarComponent/>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;