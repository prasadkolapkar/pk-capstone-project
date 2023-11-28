import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import CrownLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <img src={CrownLogo} alt="Crown Logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            SHOP
          </Link>
          {/* <Link className="nav-link" to="/shop">
            CONTACT
          </Link>*/}
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
