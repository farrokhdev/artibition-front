import { ORDER_BUYERS } from './constant';
import { BASE_URL } from './index';
import axios from './request';

class APIService {
    post(uri, payload) {
        return axios.post(`${BASE_URL}${uri}`, payload)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }

    get(uri, params) {
        return axios.get(`${BASE_URL}${uri}?${params}`)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }

    getById(uri, id) {
        return axios.get(`${BASE_URL}${uri}/${id}`)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }

    delete(uri, id) {
        return axios.delete(`${BASE_URL}${uri}/${id}`)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }

    patch(uri, id, payload) {
        return axios.patch(`${BASE_URL}${uri}/${id}`, payload)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }


    

}

export default new APIService();
