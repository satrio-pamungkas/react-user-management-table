import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode
}

export const FilterContainer = ({ children }: ChildrenProps) => {
    return (
        <div className="flex">
            {children}
        </div>
    );
}
