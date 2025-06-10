import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setCurrentFolder } from '../../utils/fileFolderSlice';

const Folder = () => {
  const { folderId } = useParams();
  const dispatch = useDispatch();

  // Dispatch only when folderId changes
  useEffect(() => {
    dispatch(setCurrentFolder(folderId));
  }, [dispatch, folderId]);

  // Get folder data from Redux state
  const currentFolderData = useSelector((store) =>
    store.fileFolder.userFolders.find((folder) => folder.id === folderId)
  );

  const childFolder = useSelector((store) =>
  store.fileFolder.userFolders.find((folder) => folder.parent === folderId)
  );

  console.log(currentFolderData, childFolder)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Folder Details</h2>
      {currentFolderData ? (
        <>
        <pre className=" p-2 mt-2 rounded text-sm">
          {JSON.stringify(currentFolderData, null, 2)}
        </pre>
        <pre className=" p-2 mt-2 rounded text-sm">
          {JSON.stringify(childFolder)}
        </pre>
        </>
      ) : (
        <p className="text-red-600 mt-2">Folder not found</p>
      )}
    </div>
  );
};

export default Folder;
