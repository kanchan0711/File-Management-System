import { Link } from "react-router"

const Navbar = () =>{
    return(
        <div className="bg-black py-3">
            <div className="flex justify-between items-center mx-10">
                <h1 className="text-white">File Management Sytem</h1>
                <div className="flex gap-3">
                    <Link to={"/loginSignup"}>
                    <button className="px-5 py-1.5 bg-blue-700 text-white rounded-sm text-sm ">Login</button>
                    </Link>
                    <button className="px-5 py-1.5 bg-green-700 text-white rounded-sm text-sm ">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar