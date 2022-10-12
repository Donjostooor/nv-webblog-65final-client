import axios from 'axios'
export default () => {
 return axios.create({ 
    //baseURL: 'http://localhost:8081'
    baseURL: 'http://10.31.27.240:8081/',
 })
}