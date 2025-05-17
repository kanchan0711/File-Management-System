import Items from "./Items";

const ShowItems = () => {
    const file = ["file1file", "fi22le2"]
    const folder = ["folder1", "folder2"]
    return (
        <>
        <Items items={folder} title= "Created Folders"/> 
        <Items items={file} title= "Created Files"/> 
        </>
    )
}

export default ShowItems;