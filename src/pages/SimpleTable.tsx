import { Table } from "../components/SimpleTable/Table";
import { useEffect, useMemo, useState } from "react";
import MockData from "../mocks/Data";
import FetchService from "../services/DataService";

export const SimpleTable = () => {
    const [masterData, setMasterData] = useState([]);
    const [available, setAvailable] = useState(false);
    const columnMock = useMemo(() => MockData.columnMock, []) as any;

    useEffect(() => {
        FetchService.getData()
            .then((response) => {
                setMasterData(response.data.data);
                setAvailable(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            {available && <Table columns={columnMock} data={masterData}/>}
        </div>
    );
}