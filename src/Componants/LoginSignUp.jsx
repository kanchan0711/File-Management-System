import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../utils/authSlice";
import { useNavigate } from "react-router";

const LoginSignUP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerLogin = () => {
    if (isRegister) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      dispatch(
        registerUser({ name:formData.name, email: formData.email, password: formData.password })
      );
    } else {
      dispatch(
        loginUser({ email: formData.email, password: formData.password })
      );
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg  text-center">
        <h1 className="font-semibold text-3xl mb-6">
          {isRegister ? "Register" : "Login"}
        </h1>
        <div className="flex flex-col gap-4">
          {isRegister && (
            <input
              className="input input-bordered w-full"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          )}
          <input
            className="input input-bordered w-full"
            type="email"
            name="email"
            placeholder="Enter Email Id"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            className="input input-bordered w-full"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {isRegister && (
            <input
              className="input input-bordered w-full"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          )}
<button className="btn btn-active btn-primary"
onClick={registerLogin}>
            {isRegister ? "Register" : "Login"}
          </button>
          <p
            className="text-blue-600 text-sm cursor-pointer"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Already a User? Login" : "New User? Register"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUP;
