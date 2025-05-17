import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginUser,  registerUser } from "../utils/authSlice";
import { useNavigate } from "react-router";

const LoginSignUP = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isRegister, setIsRegister] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const registerLogin = () => {
        if (isRegister) {
          if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
          }
          dispatch(registerUser({ email: formData.email, password: formData.password }));
        } else {
          dispatch(loginUser({ email: formData.email, password: formData.password }));
        }
      
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

        navigate("/dashboard")
      };
      

    return (
        <div className="w-full">
            <div className="size-full text-center font-semibold text-4xl mt-32 mb-3">
                <h1>{isRegister ? "Register" : "Login"}</h1>
            </div>
            <div>
                <div className="w-1/3 m-auto flex flex-col gap-3">
                    {isRegister && (
                        <input
                            className="border border-gray-300 rounded-sm px-2 py-1 w-full"
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
                        className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                        type="email"
                        name="email"
                        placeholder="Enter Email Id"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    <input
                        className="border border-gray-300 rounded-sm px-2 py-1 w-full"
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
                            className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                setFormData({ ...formData, confirmPassword: e.target.value })
                            }
                        />
                    )}
                    <button
                        className="w-full bg-blue-600 py-1 text-white rounded-sm"
                        onClick={registerLogin}
                    >
                        {isRegister ? "Register" : "Login"}
                    </button>
                    <p
                        className="text-blue-600 text-center cursor-pointer"
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
