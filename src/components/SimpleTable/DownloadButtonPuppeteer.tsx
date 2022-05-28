import { DownloadProps } from "../../types/simpletable.type";

export const DownloadButtonPuppeteer = (props: DownloadProps) => {
    const handleInput = () => {
        props.onClick();
    }

    return (
        <div className="flex pb-4">
            <button
                onClick={() => handleInput()}
                className="inline-block px-6 ml-8 bg-gray-600 text-white 
                    font-OpenSans font-medium text-sm rounded-md leading-tight shadow-md 
                    hover:bg-gray-700 hover:shadow-xl focus:bg-gray-800 
                    focus:shadow-lg focus:outline-none focus:ring-0 
                    active:bg-gray-800 active:shadow-lg transition 
                    duration-150 ease-in-out">Save as PDF
            </button>
        </div>
    );
}