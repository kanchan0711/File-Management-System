import { useState } from "react"

const LoginSignUP = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conformPassword , setConformPassword] = useState();
    const [isRegister, setIsRegister] = useState(false)

    return (
        <div className="w-full">
            <div className="size-full text-center font-semibold text-4xl mt-32 mb-3" >
                <h1> {isRegister? "Register" : "Login"}</h1>
            </div>
            <div>
                <div className=" w-1/3 m-auto flex flex-col gap-3 ">
                    {isRegister && <input
                    className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange = {(e) => (setName(e.target.value))}
                    />}
                    <input
                    className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                    type="email"
                    name="email"
                    placeholder="Enter Email Id"
                    value={email}
                    onChange = {(e) => (setEmail(e.target.value))}
                    />
                       <input
                    className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                    type="password"
                    name="email"
                    placeholder="Enter Password"
                    value={password}
                    onChange = {(e) => (setPassword(e.target.value))}
                    /> 
                   {isRegister && <input
                    className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                    type="password"
                    name="email"
                    placeholder="Conform Password"
                    value={conformPassword}
                    onChange = {(e) => (setConformPassword(e.target.value))}
                    />}

                    <button className="w-full bg-blue-600 py-1  text-white rounded-sm">{isRegister? "Register": "Login"}</button>

                    <p className="text-blue-600 text-center cursor-pointer"
                    onClick={() => setIsRegister(!isRegister)}> {isRegister? "Already a User? Login ": "New User? Register" }</p>
                </div>
            </div>
        </div>
        
    )
}

export default LoginSignUP;