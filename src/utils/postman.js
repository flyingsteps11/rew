import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";

import store from "../store";
import { logoutSuccess } from "../actions/auth";

export const postman = axios.create({
    baseURL: "/api",
    paramsSerializer: params => qs.stringify(params, { indices: false })
});

postman.interceptors.response.use(
    resp => {
        return resp.data;
    },
    error => {
        const { data = {}, status } = error.response;
        const { error: errorText = "", message = "" } = data;

        errorText && toast.error(JSON.stringify(errorText) || message || "Ошибка!");

        if(status === 401) {
            store.dispatch(logoutSuccess());
        }

        return Promise.reject(error);
    },
);

export let setAccessToken = token => {
    if(token !== null) {
        postman.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete postman.defaults.headers.common.Authorization;
    }
};
