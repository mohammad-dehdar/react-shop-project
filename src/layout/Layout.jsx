import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Layout({ children }) {
    const [state] = useCart()

    return (
        <>
            <header className="bg-purple-900 p-5 rounded-md text-white flex justify-between items-center shadow-lg mb-6">
                <Link to="/" className="text-3xl font-bold ">dehdar Shop</Link>
                <div className="relative">
                    <Link to="/chekout" className="text-xl bg-white text-purple-900 p-2 rounded-full"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    {!!state.itemCounters && (<span className="w-4 text-center px-[2px] absolute bottom-6 left-7 bg-orange-600 text-sm rounded-full text-black font-bold">{state.itemCounters}</span>)}
                </div>
            </header>
            {children}
            <footer className="bg-purple-900 p-5 rounded-md text-white flex justify-center items-center shadow-lg mt-6">
                developed by<a href="https://github.com/mohammad-dehdar/react-contact-app" className="text-purple-300 ml-1">Mohammad dehdar ❤️</a>
            </footer>
        </>
    )
}

export default Layout