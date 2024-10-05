import { useEffect, useState } from "react"

import { useSearchParams } from "react-router-dom"
import { useProducts } from "../context/ProductProvider"


import Cards from "../components/Cards"
import Loader from "../components/Loader"
import SearchBox from "../components/SearchBox"
import Sidebar from "../components/Sidebar"

import { filteredProducts, getInitialQuery, searchProducts } from "../helpers/helper"


function ProductsPage() {
    const [search, setSearch] = useState("")
    const [displayed, setDisplayed] = useState([])
    const [query, setQuery] = useState({})
    const products = useProducts()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setDisplayed(products)
        setQuery(getInitialQuery(searchParams))
    }, [products])

    useEffect(() => {
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filteredProducts(finalProducts, query.category);
        setSearch(query.search || "")
        setDisplayed(finalProducts);
        setSearchParams(query)
    }, [query])


    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
            <div className="flex justify-between max-sm:flex-col-reverse">
                <div className="w-full flex flex-wrap justify-between">
                    {!displayed.length && <Loader />}
                    {displayed.map(p => (
                        <Cards key={p.id} data={p} />
                    ))}
                </div>
                <Sidebar query={query} setQuery={setQuery} />
            </div>
        </>
    )
}

export default ProductsPage