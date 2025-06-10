import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import ShowItems from "./Dashboard/ShowItems";
import { getFolders } from "../utils/fileFolderSlice"; // Adjust import path
import  Folders  from "./Dashboard/Folders";

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
const user = useSelector((state) => state.auth.user);
const isLoading = useSelector((state) => state.fileFolder.isLoading);
const userFolders = useSelector((state) => state.fileFolder.userFolders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/");
      } else if (user?.uid) {
        dispatch(getFolders(user.uid));
      }
    }, [isAuthenticated, user?.uid]);
    

  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path ="" element={<ShowItems/>}/>
        <Route path = "/folder/:folderId" element = {<Folders/>}/>
      </Routes>
    </>
  );
};

export default Dashboard;
