import axios from "axios";

export default (user = null) => {
  const defaultOptions = {
    headers: { "Authorization": user != null ? "Bearer " + user.token : "" }
  };

  return {
    get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options })
  };
}