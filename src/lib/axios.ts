import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/"
});

export const saveAccount = async (data: any) => {
    const response = await instance.post("/signup", data);
    return response;
};

export const getAllAccounts = async () => {
    const response = await instance.get("/accounts/1/10");
    return response;
};
