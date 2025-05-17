import React, { useState } from "react";
import { useSelector } from "react-redux";

const CreateFolder = ({setIsCreateFolderClose}) => {
    const userFolder = useSelector((store) => store.fileFolder.userFolders)
    console.log(userFolder)
    const[folderName, setFolderName] = useState("")

    const checkFolderExist = (name) =>{
        const isFolderExist = userFolder.find((folder) => folder === name)
        if (isFolderExist) return true
        else return
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const folder = folderName.trim();
        
            if(folder){
                if(isFolderExist){
                    alert(folder, " is already exist")
                }
          alert("Folder is created by the name of " + folder);
          setIsCreateFolderClose(false);
          // Optional: reset folderName if needed
          // setFolderName("");
        }
      };

  return (
    // <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex  justify-center z-50">
    //   <div className="bg-white w- p-6 rounded-2xl shadow-xl w-full max-w-sm">
    //     <h2 className="text-xl font-semibold mb-4">Login</h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         className="w-full px-3 py-2 border rounded"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         className="w-full px-3 py-2 border rounded"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //       <div className="flex justify-between mt-4">
    //         <button
    //           type="button"
    //           onClick={closeModal}
    //           className="px-4 py-2 bg-gray-300 rounded"
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           type="submit"
    //           className="px-4 py-2 bg-blue-600 text-white rounded"
    //         >
    //           Login
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
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
