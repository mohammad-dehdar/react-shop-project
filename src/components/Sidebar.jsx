import { faListUl } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { creatQueryObject } from "../helpers/helper";
import { NavLink } from "react-router-dom";

const categorys = [
    { id: 1, type: "All" },
    { id: 2, type: "Electronics" },
    { id: 3, type: "Jewelery" },
    { id: 4, type: "Men's Clothing" },
    { id: 5, type: "Women's Clothing" },
]

function Sidebar({ query, setQuery }) {

    const categoryHandler = (e) => {
        const { tagName } = e.target;
        const category = e.target.innerText.toLowerCase();

        setQuery((query) => creatQueryObject(query, { category }));
        if (tagName !== "Li") return;
    }
    return (
        <div className="w-[220px] h-fit m-2.5 p-5 ml-[30px] bg-slate-100 rounded-md shadow-md shadow-purple-400/20 max-sm:m-auto max-sm:w-[270px] max-sm:mb-2">
            <div className="bg-purple-700 flex items-center mb-2.5 p-1.5 rounded-md text-white font-bold gap-2">
                <FontAwesomeIcon icon={faListUl} />
                <p>Category</p>
            </div>
            <ul onClick={categoryHandler} className=" *:cursor-pointer *:transition-all">
                {categorys.map((item) => (
                    <li key={item.id} className={item.type.toLowerCase() === query.category ? "selected" : "p-1.5 cursor-pointer rounded-md hover:bg-purple-400 hover:text-white"}>{item.type}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar