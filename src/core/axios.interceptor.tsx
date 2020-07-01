import axios from 'axios';
import { toast } from 'react-toastify';
import { createHashHistory } from 'history';
import './app.default';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    const history = createHashHistory()
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    
    if ( error.response && error.response.data.validationErrors) {
      history.push('/login')
      toast.error(error.response.data.validationErrors[0].errorMessage);
      if ([400, 401].includes(error.response.status)) {
        localStorage.clear()
      }
    } else if(error.response){
  
    }
    return Promise.reject(error);
  });