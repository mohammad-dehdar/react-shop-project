import { faCircleCheck, faHashtag, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BasketSidebar({state , clickHandler}) {
  return (
    <div className="w-2/6 space-y-4 bg-purple-300 rounded-lg p-2 *:flex *:items-center *:gap-2 shadow-md shadow-purple-300/40">
        <p className="font-medium bg-purple-400 px-1 rounded-md border border-white"><FontAwesomeIcon icon={faTag} />total: <span className="">{state.total}$</span></p>
        <p className="font-medium bg-purple-400 px-1 rounded-md border border-white"><FontAwesomeIcon icon={faHashtag} />quantity: {state.itemCounters}</p>
        <p className="font-medium bg-purple-400 px-1 rounded-md border border-white"><FontAwesomeIcon  icon={faCircleCheck}/>chekcout: {state.checkOut === false ? "pendig..." : "Done"}</p>
        <button className="text-center rounded-lg border border-white text-white bg-purple-500 shadow-md mx-auto px-6 py-1" onClick={() => clickHandler("CHECKOUT")}>checkOut</button>
    </div>
  )
}

export default BasketSidebar