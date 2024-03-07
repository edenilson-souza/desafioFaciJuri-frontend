import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/"
});

export const saveAccount = async (data: any) => {
    const response = await instance.post("/signup", data);
    return response;
};

export const getAllAccounts = async (filters: any) => {
    const response = await instance.get("/accounts/1/100", { params: filters });
    return response;
};

export const deleteAccount = async (id: string) => {
    const response = await instance.delete(`/accounts/${id}`);
    return response;
};
