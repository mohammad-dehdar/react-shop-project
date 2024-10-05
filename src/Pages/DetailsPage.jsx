import { Link, useParams } from "react-router-dom"
import { useProductsDetails } from "../context/ProductProvider"
import Loader from "../components/Loader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faList, faTag } from "@fortawesome/free-solid-svg-icons"

function DetailsPage() {
  const { id } = useParams()
  const productDetails = useProductsDetails(+id)

  if (!productDetails) return <Loader />

  return (
    <div className="flex p-10">
      <img src={productDetails.image} alt={productDetails.title} className="bg-white shadow-md w-1/5 h-fit border-purple-700 border p-5 rounded-3xl" />
      <div className="h-[350px] flex flex-col justify-between ml-5 border border-purple-700 shadow-md bg-white  p-5 rounded-b-3xl rounded-tl-3xl rounded-tr-sm">
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-5">
            {productDetails.title}
          </h3>
          <p className="text-lg">{productDetails.description}</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
          <p className="font-bold flex items-center"><FontAwesomeIcon icon={faList} className="mr-2 text-purple-700" />{productDetails.category}</p>
          <span className="flex items-center font-bold"><FontAwesomeIcon icon={faTag} className="mr-2 text-xl text-purple-700" />{productDetails.price}$</span>
          </div>
          <Link to={"/products"} className="flex items-center transition-all ease-out bg-purple-300 py-1 px-2 rounded-3xl"> <FontAwesomeIcon className="mr-2" icon={faArrowRight} flip="horizontal"/>Back To Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage