const axios = require('axios');
// const { getCookie } = require('./Cookies')
let data = ''
let accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyOTYxMTU1MiwianRpIjoiMDY4N2E2ZjUtMDhlZS00YmI3LTk1NTgtOGUzMzViYWI4YmU4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NTY0MTMxMTY4NDEzMjg2NCwibmJmIjoxNjI5NjExNTUyfQ.bzCz3Jt1wYWPfAAVRza_56AjnKB9xff1IaFXgng5SeM'

// axios.defaults.baseURL = process.env.REACT_APP_DOMAIN
// if(getCookie("__user") && getCookie("__user") !=="")
if(localStorage.getItem('state') && localStorage.getItem('state') !== ""){
    data = JSON.parse(localStorage.getItem('state'))
    // axios.defaults.headers.common['Authorization'] = `Bearer ${data.user.accessToken}`;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
// axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(getCookie("__user")).accessToken}`;

// axios.defaults.headers.common['proxy'] =  "https://fitpeo-api-dev.uc.r.appspot.com"
// axios.defaults.headers.common['proxy'] =  "https://fitpeo-api-dev.uc.r.appspot.com"
// axios.defaults.withCredentials = true


// let user = JSON.parse(localStorage.getItem('state')) && JSON.parse(localStorage.getItem('state')).user.login
// if(user) axios.defaults.headers.common['Token'] = user.token;

// Make a request for a common post records
exports.axiosPost = (url,payload) => axios.post("https://fitpeo-api-dev.uc.r.appspot.com/api/v1"+url, payload)
exports.axiosGet = (url,payload) => axios.get("https://fitpeo-api-dev.uc.r.appspot.com/api/v1"+url, payload)
