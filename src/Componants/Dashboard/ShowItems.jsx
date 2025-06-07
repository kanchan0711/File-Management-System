import { useSelector } from "react-redux";
import Items from "./Items";

const ShowItems = () => {
  const { isLoading, userFolders } = useSelector((state) => ({
    isLoading: state.fileFolder.isLoading,
    auth: state.auth,
    userFolders: state.fileFolder.userFolders,
  }));
  const file = ["file1file", "fi22le2"];
  const folder = ["folder1", "folder2"];
  return (
    <>
      {isLoading ? (
        <div className="text-center"> Loading...</div>
      ) : (
        <>
          <Items items={userFolders} type="folder" title="Created Folders"/>
          <Items items={file} type="file" title="Created Files"/>
        </>
      )}
    </>
  );
};

export default ShowItems;
