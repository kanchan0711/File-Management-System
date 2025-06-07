import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import ShowItems from "./Dashboard/ShowItems";
import { getFolders } from "../utils/fileFolderSlice"; // Adjust import path

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
      <ShowItems  />
    </>
  );
};

export default Dashboard;
