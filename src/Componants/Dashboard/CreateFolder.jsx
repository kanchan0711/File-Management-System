import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFolder } from "../../utils/fileFolderSlice";

const CreateFolder = ({setIsCreateFolderClose}) => {
    const folderdetails = useSelector((store) => store.fileFolder)
    const user = useSelector((store) => store.auth)
    // console.log(user)
    const[folderName, setFolderName] = useState("")

    const dispatch = useDispatch()
    const checkFolderExist = (name) =>{
        const isFolderExist = folderdetails.userFolders.find((folder) => folder === name)
        if (isFolderExist) return true
        else return false
    }
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const folder = folderName.trim();
        
            if(folder.length > 3){
                if(!checkFolderExist(folder)){
                  const data = {
                    createdAt: new Date().toISOString(),
                    userId: user.user.uid,
                    createdBy: user.user.displayName,
                    name: folder,
                    parent: folderdetails.currentFolder === "root"? []: ["parent folder name"],
                    path: folderdetails.currentFolder,
                    lastAccessed: null,
                    updatedAt: new Date().toISOString()                   
                  }
                  dispatch(createFolder(data))
                  console.log(data)
                  alert("forlder created successfully" , folder)
                }else{
                  console.log("111")
                }
          
          // Optional: reset folderName if needed
          // seetFolderName("");
        }else{
          alert("forlder name sould be more then 3 charector")
        }
      };

  return (
  
    <div className="fixed inset-0 pt-14 bg-black/20 flex justify-center z-50">
      <div className="h-52 w-96 bg-white rounded-lg p-5">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl text-black">Create Folder</h1>
          <div
          onClick={() => setIsCreateFolderClose(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        
        </div>
        <div className="h-[1px] w-full bg-gray-300 my-3"></div>
        <input
          placeholder="Folder Name"
          type="text"
          className="text-gray-700 border border-gray-300 px-3 py-1 my-4 w-full rounded-sm"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />

        <button
          className="w-full text-white bg-blue-500 px-3 py-1 font-semibold rounded-sm"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateFolder;
