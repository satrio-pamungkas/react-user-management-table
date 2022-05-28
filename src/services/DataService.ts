import axios from "axios";
import { BASE_URL } from "../helpers/utils";

const getData = async (params?: any) => {
    return await axios.get(`${BASE_URL}/users`, ({ params }));
}

const FetchService = { getData };
export default FetchService;