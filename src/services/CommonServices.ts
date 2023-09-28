import http from "./http-common";
import jwtDecode from "jwt-decode";

type ControllerName = "Auth";
type ModelName = "Create" | "Login";
type Param = "loginId";


class CommonService {
    get(ControllerName: ControllerName, ModelName: ModelName) {
        return http.get(`/${ControllerName}/${ModelName}`).catch((err: Error) => {
            throw err?.message
        });
    }

    getWithQueryParam(ControllerName: ControllerName, ModelName: ModelName, Param: Param, value: any) {
        return http.get(`/${ControllerName}/${ModelName}?${Param}=${value}`).catch((err: Error) => {
            throw err?.message
        });
    }

    getWithSingleParam(ControllerName: ControllerName, ModelName: ModelName, value: any) {
        return http.get(`/${ControllerName}/${ModelName}/${value}`).catch((err: Error) => {
            throw err?.message
        });
    }

    getWithDoubleParam(ControllerName: ControllerName, ModelName: ModelName, value1: any, value2: any) {
        return http.get(`/${ControllerName}/${ModelName}/${value1}/${value2}`).catch((err: Error) => {
            throw err?.message
        });
    }

    post(ControllerName: ControllerName, ModelName: ModelName, data: any) {
        return http.post(`/${ControllerName}/${ModelName}`, data).catch((err: Error) => {
            throw err?.message
        });
    }
    
    postWithSingleParam(ControllerName: ControllerName, ModelName: ModelName, value1: any,) {
        return http.post(`/${ControllerName}/${ModelName}/${value1}`).catch((err: Error) => {
            throw err?.message
        });
    }

    postWithDoubleParam(ControllerName: ControllerName, ModelName: ModelName, value1: any, value2: any) {
        return http.post(`/${ControllerName}/${ModelName}/${value1}/${value2}`).catch((err: Error) => {
            throw err?.message
        });
    }

    postWithFormData(ControllerName: ControllerName, ModelName: ModelName, data: any) {
        return http.post(`/${ControllerName}/${ModelName}`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).catch((err: Error) => {
            throw err?.message
        });
    }

    postWithFormDataWithQueryParam(ControllerName: ControllerName, ModelName: ModelName, data: any, Param: Param, value: any) {
        return http.post(`/${ControllerName}/${ModelName}?${Param}=${value}`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).catch((err: Error) => {
            throw err?.message
        });
    }
}

export default new CommonService();