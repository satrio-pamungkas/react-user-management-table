import { useState } from "react";

type ChildProps = {
    onClick: (searchText: string) => void
}

export const Searchbox = (props: ChildProps) => {
    const [searchText, setSearchText] = useState('');

    const handleInput = () => {
        props.onClick(searchText);
    }

    return (
        <div className="flex pb-4">
            <input 
                placeholder="Search here"
                type="text"
                onChange={e => setSearchText(e.target.value)}
                className="border-2 rounded-lg bg-slate-100 font-OpenSans font-normal font-lg
                    py-1 px-1 hover:bg-slate-200 hover:shadow-sm" 
            />
            <button 
                onClick={() => handleInput()}
                className="inline-block px-6 ml-4 bg-blue-600 text-white 
                    font-OpenSans font-medium text-sm rounded-md leading-tight shadow-md 
                    hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 
                    focus:shadow-lg focus:outline-none focus:ring-0 
                    active:bg-blue-800 active:shadow-lg transition 
                    duration-150 ease-in-out"
            >
            Search    
            </button>
        </div>
    );
}