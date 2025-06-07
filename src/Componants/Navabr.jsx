import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <div className=" ">
    <div className="navbar bg-transparent ">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <h1 className=" text-2xl  font-bold bg-gradient-to-r font-bold from-[#d744eb] to-[#0128A0] bg-clip-text text-transparent">File-Managemen-System</h1>
      </div>

      <div className="navbar-end">
        {isAuthenticated ? (
          <>
            <Link to={"/dashboard"}>
              <button className="btn">Dashboard</button>
            </Link>
            <Link to={"/loginSignup"}>
              <button className="btn ml-2">Logout</button>
            </Link>
          </>
        ) : (
          <Link to={"/loginSignup"}>
<button className="btn btn-dash btn-primary">
Login</button>
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
