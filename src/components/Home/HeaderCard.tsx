import { HeaderCardProps } from "../types/home.type";

export const HeaderCard = ({ children }: HeaderCardProps) => {
    return (
        <div className="inline-block pt-10 pl-10 pr-10 pb-8 rounded-xl w-md mt-10 hover:shadow-xl shadow-lg bg-white">
            <h1 className="font-OpenSans text-3xl font-bold text-blue-800">Welcome to User Management List!</h1>
            <h3 className="font-OpenSans text-xl font-medium">Please choose table below</h3>
            {children}
        </div>
    );
};