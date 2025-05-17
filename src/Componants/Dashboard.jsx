import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import ShowItems from "./Dashboard/ShowItems";

const Dashboard =() => {
    const isAuthenticated = useSelector((store) => store.auth.isAuthenticated)
    const navigate = useNavigate()

    // useEffect(() => {
    //     if(!isAuthenticated){
    //         navigate("/")
    //     }
    // },[])

    return(
        <>
        <DashboardNavbar/>
        <ShowItems/>
        </>
    )
}

export default Dashboard;