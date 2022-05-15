import { Table } from "../components/SimpleTable/Table";
import { useEffect, useMemo, useState } from "react";
import MockData from "../mocks/Data";
import FetchService from "../services/DataService";
import { Searchbox } from "../components/SimpleTable/Searchbox";
import { ErrorData } from "../components/SimpleTable/ErrorData";

interface ShowTableProps {
    status: boolean
    columns: any
    data: any
}

const ShowTable = ({ status, columns, data }:ShowTableProps ) => {
    if (status) {
        return <Table columns={columns} data={data}/>
    } else {
        return <ErrorData/>
    }
}

export const SimpleTable = () => {
    const [masterData, setMasterData] = useState([]);
    const [available, setAvailable] = useState(false);
    const [searchText, setSearchText] = useState('');
    const columnMock = useMemo(() => MockData.columnMock, []) as any;

    const getSearchText = (text: string) => {
        setSearchText(text);
    }

    const getQueryParams = (search?: string, sort_by?: string, order_by?: string, page?: number, size?: number) => {
        let params: any = {};
        
        if (search) params.search = search;
        if (sort_by) params.sort_by = sort_by;
        if (order_by) params.order_by = order_by;
        if (page) params.page = page;
        if (size) params.size = size;

        return params;

    }

    const getUsersData = () => {
        const params = getQueryParams(searchText);

        FetchService.getData(params)
            .then((response) => {
                setMasterData(response.data.data);
                setAvailable(true);
            })
            .catch((err) => {
                setAvailable(false);
            });
    };

    useEffect(getUsersData, [searchText]);

    return (
        <div className="container mx-auto px-4 py-8">
            <Searchbox onClick={getSearchText}/>
            <ShowTable status={available} columns={columnMock} data={masterData}/>
        </div>
    );
}