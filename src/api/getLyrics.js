import client from './Client';

export const getLyrics  = async(data) => {
    const response = await client.get(`/requests/me`, data);
    const result = await response;
    return result;
}