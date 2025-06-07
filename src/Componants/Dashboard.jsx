import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import ShowItems from "./Dashboard/ShowItems";
import { getFolders } from "../utils/fileFolderSlice"; // Adjust import path

const Dashboard = () => {
  const { isLoading, auth, userFolders } = useSelector((state) => ({
    isLoading: state.fileFolder.isLoading,
    auth: state.auth,
    userFolders: state.fileFolder.userFolders,
  }));
  const isAuthenticated = auth.isAuthenticated;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      dispatch(getFolders(auth.user.uid));
    }
  }, [isAuthenticated]);

  return (
    <>
      <DashboardNavbar />
      <ShowItems  />
    </>
  );
};

export default Dashboard;
