import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <div className=" ">
    <div className="navbar bg-white border-b-[1px] border-gray-200">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <h1 className=" text-xl text-black">File-Managemen-System</h1>
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
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
