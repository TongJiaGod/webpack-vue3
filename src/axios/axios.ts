import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
