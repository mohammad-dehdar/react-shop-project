import { RotatingLines } from "react-loader-spinner"


function Loader() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-center">
            <RotatingLines
                width="100px"
                height="100px"
                strokeWidth="3"
                strokeColor="#433878"
            />
        </div>
    )
}

export default Loader