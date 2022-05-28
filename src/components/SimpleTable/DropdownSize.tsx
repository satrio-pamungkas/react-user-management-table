import { ChangeEvent, useEffect, useState } from "react";
import { DropdownProps } from "../types/simpletable.type";

const pageSize: number[] = [5,10,15,20];

export const DropdownSize = (props: DropdownProps) => {
    const [rows, setRows] = useState(pageSize[0]);

    const handleChange = (e: ChangeEvent) => {
        const item: number = parseInt((e.target as HTMLInputElement).value);
        setRows(item);
    }

    useEffect(() => {
        props.onClick(rows);
    }, [rows]);

    return (
        <div className="flex mb-4">
            <p className="py-2 px-2 ml-8 font-OpenSans font-normal">Select Size</p>
            <select
                className="py-2 px-2 ml-2 bg-white font-OpenSans 
                    text-sm font-medium border-2 rounded-lg hover:bg-slate-200"
                onChange={handleChange}
            >
                {pageSize?.map(size => (
                    <option key={size} value={size}>
                        Show {size} rows
                    </option>
                ))}
            </select>
        </div>
    );
}