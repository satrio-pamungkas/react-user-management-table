import { ReactNode } from "react";
import { ChildrenProps } from "../types/simpletable.type";

export const FilterContainer = ({ children }: ChildrenProps) => {
    return (
        <div className="flex">
            {children}
        </div>
    );
}
