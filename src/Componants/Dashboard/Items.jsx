const Items = ({items, title}) => {
    console.log(items)
    return(
        <div className="text-black ">
            <div className="text-center font-semibold text-2xl border-b-[1px] border-gray-300">
            {title}
            </div>
            <div className="flex flex-wrap gap-4 mx-10 my-4 ">
            {items.map((item, i) => (
                <div key={i} className="border-[1px] py-3 px-4 border-gray-300 rounded-sm ">{item.name}</div>
            ))}
            </div>
        </div>
    )
}
export default Items