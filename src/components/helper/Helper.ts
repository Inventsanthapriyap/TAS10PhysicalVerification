import { ITokenModel } from '@/models/ITokenModel';
import jwt_decode from 'jwt-decode';

export const getTokenDetail = () => {
    try {
        let token: string = localStorage.getItem("star-zero-token") as string;
        let tokendata: ITokenModel = jwt_decode(token);
        return tokendata;
    }
    catch (Error) {
        return null;
    }
}

export const findBrowser = () => {
    if (typeof window !== "undefined" || typeof document !== "undefined") {
        return true;
    }
    else {
        return false;
    }
}

export const findWindow = () => {
    if (typeof window !== "undefined") {
        return true;
    }
    else {
        return false;
    }
}

export const findDocument = () => {
    if (typeof document !== "undefined") {
        return true;
    }
    else {
        return false;
    }
}

export const getEncodeTokenDetail = (token: string) => {
    try {
        let tokendata: ITokenModel = jwt_decode(token);
        return tokendata;
    }
    catch (Error) {
        return null;
    }
}