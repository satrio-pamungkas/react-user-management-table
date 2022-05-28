import { ReactNode } from "react";

export interface DropdownProps {
    onClick: (rows: number) => void
}

export interface ChildrenProps {
    children: ReactNode
}

export interface SearchProps {
    onClick: (searchText: string) => void
}

export interface TableProps {
    columns: any
    data: any
}

