export default function FilterButton({ handleClick, active }) {
    const items = ["All", "Food", "Technology", "Furniture", "Clothes"];

    return (
        <div className="">
            {items.map((item) => (
                <button
                    // className={active === item.toLowerCase() && "active"}
                    className={`${active === item.toLocaleLowerCase() && "active"} +  border border-slate-600 text-white my-2 rounded-sm"}`}
                    onClick={() => handleClick(item.toLowerCase())}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
