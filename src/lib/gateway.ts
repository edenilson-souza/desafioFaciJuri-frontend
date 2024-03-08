import { instance } from "./axios";

export const saveAccount = async (data: any) => {
    const response = await instance.post("/signup", data);
    return response;
};

export const getAccount = async (id: string) => {
    const response = await instance.get(`/accounts/${id}`);
    return response;
};

export const getAllAccounts = async (filters: any) => {
    const response = await instance.get("/accounts/1/100", { params: filters });
    return response;
};

export const updateAccount = async (id: string, data: any) => {
    const response = await instance.put(`/accounts/${id}`, data);
    return response;
};

export const deleteAccount = async (id: string) => {
    const response = await instance.delete(`/accounts/${id}`);
    return response;
};

export const getRotas = async () => {
    const response = await instance.get("/rotas");
    return response;
};
