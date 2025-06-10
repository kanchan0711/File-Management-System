import { useNavigate } from "react-router";

const Items = ({ items, type, title }) => {
  console.log(items);
  const navigate = useNavigate();

  const handleDblClick = (id, type) => {
    if (type === "folder") {
      navigate(`/dashboard/folder/${id}`);
    } else alert("file Clicked");
  };
  return (
    <div className="text-black min-h-[40vh]">
      <div className="text-center font-semibold text-2xl border-b-[1px] border-gray-300">
        {title}
      </div>
      {items.length <= 0 ? (
        <div className="flex justify-center items-center w-full h-40 text-center font-bold text-2xl">
          No {type} present yet
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 m-10 ">
          {items.map((item, i) => (
            <div
              key={i}
              className="border-[1px] py-4 w-40 border-gray-300 rounded-sm flex flex-col justify-center items-center "
              onDoubleClick={() => handleDblClick(item.id, type)}
            >
              {type === "folder" ? (
                <div className="w-20">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" StrokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      StrokeLinecap="round"
                      StrokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M0 1H5L8 3H13V5H3.7457L2.03141 11H4.11144L5.2543 7H16L14 14H0V1Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              ) : (
                <div className="w-20">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" StrokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    StrokeLinecap="round"
                    StrokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M7 0H2V16H14V7H7V0Z" fill="#000000"></path>{" "}
                    <path d="M9 0V5H14L9 0Z" fill="#000000"></path>{" "}
                  </g>
                </svg>
                </div>
              )}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Items;
