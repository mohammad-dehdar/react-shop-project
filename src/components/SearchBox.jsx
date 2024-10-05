import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { creatQueryObject } from "../helpers/helper";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function SearchBox({search, setSearch, setQuery}) {
    const searchHandler = () => {
        setQuery((query) => creatQueryObject(query, {search}));
    }
    return (
        <div className="mx-2.5 mb-12">
            <input
                type="text"
                placeholder="search items..."
                value={search}
                onChange={e => setSearch(e.target.value.toLowerCase().trim())}
                className="bg-purple-200 shadow-md shadow-purple-700/15 p-2.5 w-[250px] text-lg text-purple-700 rounded-2xl mr-2.5 focus:outline-purple-700 placeholder:text-purple-400"
            />
            <button className="shadow-md shadow-purple-700/30 bg-purple-700 p-2.5 rounded-xl"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={searchHandler} className="text-white"/></button>

        </div>
    )
}

export default SearchBox