import axios from 'axios';
import {happiApiKey} from '../../config/keys'

const Client = axios.create({
    baseURL: 'https://api.happi.dev/v1/music/',
    timeout: 5000,
    params: {
        apikey:happiApiKey
    },
    headers: {
      Accept: 'application/json;charset=UTF-8',
  },
  });
  //ss
 export default Client;