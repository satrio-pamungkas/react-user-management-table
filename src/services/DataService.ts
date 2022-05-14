import axios from "axios";

const BASE_URL: string = 'http://localhost:8000/api/v1/users';

const getData = async (params?: any) => {
    return await axios.get(BASE_URL, ({ params }));
}

const FetchService = { getData };
export default FetchService;