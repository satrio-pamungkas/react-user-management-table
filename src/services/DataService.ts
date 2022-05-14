import axios from "axios";

const BASE_URL: string = 'http://localhost:8000/api/v1/users';

const getData = async () => {
    return await axios.get(BASE_URL);
}

const FetchService = { getData };
export default FetchService;