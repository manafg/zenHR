import client from './Client';

export const getArtist = async(data) => {
    const response = await client.get(`/artists&page=1`, data);
    const result = await response;
    return result;
}