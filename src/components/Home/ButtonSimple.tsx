import { Link } from "react-router-dom";

export const ButtonSimple = () => {
    return (
        <Link to="/simple-table">
            <button className="inline-block m-4 px-6 py-2.5 bg-blue-600 text-white 
                font-OpenSans font-medium text-sm rounded-3xl leading-tight uppercase shadow-md 
                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
                focus:shadow-lg focus:outline-none focus:ring-0 
                active:bg-blue-800 active:shadow-lg transition 
                duration-150 ease-in-out">Simple Table
            </button>
        </Link>
    );
}