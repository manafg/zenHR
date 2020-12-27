import client from './Client';

export const getTracks = async(data) => {
    const response = await client.get(`/requests/me`, data);
    const result = await response;
    return result;
}