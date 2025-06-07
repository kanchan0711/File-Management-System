const Items = ({ items, type, title }) => {
  console.log(items);
  return (
    <div className="text-black min-h-[40vh]">
      <div className="text-center font-semibold text-2xl border-b-[1px] border-gray-300">
        {title}
      </div>
      <div className="flex flex-wrap mx-14 gap-10 my-10 ">
        {items.map((item, i) => (
          <div
            key={i}
            className="border-[1px] py-4 w-40 border-gray-300 rounded-sm flex flex-col justify-center items-center "
          >
            {type === "folder" ? (
                <div className="w-20">
             <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z" fill="#000000"></path> </g></svg>
              </div>
            ) : (
              ""
            )}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
  

    </div>
  );
};
export default Items;
