import { useState } from "react"
import { Link } from "react-router"
import CreateFolder from "./CreateFolder"

const DashboardNavbar = () => {
  const [isCreteFolderOpen, setIsCreateFolderClose] = useState(false)
    return (
        <div className="h-20 mb-5 w-full px-20  flex justify-between items-center">
          
                <div className="text-black font-semibold">
                    <h1>Root</h1>
                </div>
                <div className="flex gap-2">
                <Link to={"/dashboard"}>
                
              <button className="btn bg-white text-black h-8 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31L216 408z"/></svg>
                Upload File </button>
            </Link>
            <Link to={"/dashboard"}>
              <button className="btn bg-white text-black h-8 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/></svg>
                Create File</button>
            </Link>
            <Link to={"/dashboard"}>
              <button className="btn bg-white text-black h-8 px-2"
              onClick={() => setIsCreateFolderClose(true)}>
               <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l128 0c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8l160 0c35.3 0 64 28.7 64 64l0 256zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/></svg>
                Create Folder</button>
            </Link>
                </div>
                {isCreteFolderOpen &&
                <CreateFolder setIsCreateFolderClose={setIsCreateFolderClose}/>
                }
            </div>     
    )
}

export default DashboardNavbar