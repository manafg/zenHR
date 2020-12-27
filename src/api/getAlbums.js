import client from './Client';

export const getAlbums = async(data) => {
    let artistId =  data ? data :70170;
    const response = await client.get(`/requests/artists/${artistId}/albums`, data);
    const result = await response;
    return result;
}