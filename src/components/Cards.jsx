import { faCartArrowDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { productQuantity, shortText } from "../helpers/helper";
import { useCart } from "../context/CartContext";

function Cards({ data }) {
    const { id, title, image, price } = data;
    const [state, dispatch] = useCart()

    const quantity = productQuantity(state, id)

    const clickHandler = (type) => {
        dispatch({ type, payload: data });
    }


    return (
        <div className="w-[270px] m-2.5 p-5 flex flex-col items-start justify-end bg-white rounded-lg shadow-lg shadow-purple-900/20 border max-sm:m-auto max-sm:mb-2">
            <img src={image} alt={title} className="w-[230px] h-[230px] p-5 mb-5 bg-white" />
            <h3 className="text-purple-700 text-lg font-semibold flex flex-col">{shortText(title)}
                <Link to={`/products/${id}`} className="text-sm text-purple-300">more info...</Link>
            </h3>
            <p className="text-stone-600 font-bold mt-2.5 mb-7">{price} $</p>
            <div className="w-full flex space-x-4 justify-center items-center transition-all ease-out bg-purple-900 px-3 py-1 rounded-md text-white">
                {quantity === 0 ? (
                    <button onClick={() => clickHandler("ADD_ITEM")}><FontAwesomeIcon icon={faCartArrowDown} /></button>
                ) : (
                    <>
                        <button onClick={() => clickHandler("INCREASE")}>+</button>
                        <p className="bg-white px-2 rounded-md text-purple-700 font-bold">{quantity}</p>
                        {quantity === 1 ? (
                            <button className="text-md" onClick={() => clickHandler("REMOVE_ITEM")}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        ) : (
                            <button onClick={() => clickHandler("DECREASE")}>-</button>
                        )}
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Cards