import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/userInterface";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function Navbar({ user, setUser }: NavbarProps) {
  console.log("user in the navbar: ", user);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    console.log("User logged out");
  }

  return (
    <>
      <header>
        <nav className="navbar-brand is-dark ">
          <div className="container has-text-light">
            <div className="navbar-brand">
              {/* Visitor Home Page */}
              {!user && (
                <Link to="/" className="navbar-item">
                  Home
                </Link>
              )}

              {/* Seller Home Page */}
              {user && (
                <Link to="/sellerhome" className="navbar-item">
                  Home
                </Link>
              )}
              {user && (
                <Link to="/create" className="navbar-item">
                  Create Product
                </Link>
              )}

              <Link to="/products" className="navbar-item">
                Shop All
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* Visitor navbar */}
                {!user && (
                  <Link to="/signup" className="navbar-item has-text-light">
                    Sign up
                  </Link>
                )}
                {!user && (
                  <Link to="/login" className="navbar-item has-text-light">
                    Login
                  </Link>
                )}
                {/* Seller navbar */}
                {user && (
                  <button
                    onClick={logout}
                    className="button navbar-item has-text-light"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
