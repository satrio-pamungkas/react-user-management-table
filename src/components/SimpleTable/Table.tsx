import FetchService from "../../services/DataService";
import { useTable } from "react-table";
import { TableProps } from "../../types/simpletable.type";

export const Table = ({ columns, data }: TableProps) => {

    const { getTableProps, getTableBodyProps, headerGroups,rows, prepareRow } = 
        useTable({ 
            columns, 
            data 
        });

    return (
        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200" id="table-schema">
            <thead className="bg-gray-100">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()} className="font-OpenSans font-bold border">{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()} className="font-OpenSans font-normal border">{cell.render("Cell")}</td>
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}