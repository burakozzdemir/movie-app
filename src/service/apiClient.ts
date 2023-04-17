import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    alert(`"Unknown error: ${error.message}`);
    return Promise.reject(error);
  }
);

export default apiClient;
