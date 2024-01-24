import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "", role: "" };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logOutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="header">
      <Link to="/" onClick={() => setIsOpen((prev) => !prev)}>
        HOME
      </Link>
      <Link to="/search" onClick={() => setIsOpen((prev) => !prev)}>
        <FaSearch />
      </Link>
      <Link to="/cart" onClick={() => setIsOpen((prev) => !prev)}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Admin
                </Link>
              )}
              <Link to={"/orders"} onClick={() => setIsOpen((prev) => !prev)}>
                Orders
              </Link>
              <button onClick={logOutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
