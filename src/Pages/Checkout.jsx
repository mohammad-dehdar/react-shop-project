import BasketCard from "../components/BasketCard"
import BasketSidebar from "../components/BasketSidebar"
import { useCart } from "../context/CartContext"

function Checkout() {
  const [state, dispatch] = useCart()
  const clickHandler = (type, payload) => {
    dispatch({ type, payload })
  }

  if (!state.itemCounters) return (<div><p>Empty</p></div>)
  return (
    <div className="flex items-start space-x-2">
      <BasketSidebar state={state} clickHandler={clickHandler}/>
      <div className="w-full">
        {state.selectedItems.map((item) => (
          <BasketCard
            key={item.id}
            data={item}
            clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  )
}

export default Checkout