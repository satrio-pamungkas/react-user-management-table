import axios from "axios";
import { BASE_URL } from "../helpers/utils";

export const DownloadPDFPuppeteer = async () => {
    return axios.get(`${BASE_URL}/print-pdf`, {
        responseType: 'arraybuffer',
        headers: {
            'Accept': 'application/pdf'
        }
    });
}
