import axios from "axios";
import { BASE_URL, HEADER, METHOD } from "../constants/ApiConst";

class Network {
  // Singleton Network instance
  static instance = new Network();
  constructor() {
    if (Network.instance) {
      throw new Error("Innitialize network fail!");
    }
    Network.instance = this;
  }

  static getInstance() {
    return Network.instance;
  }

  /**
   * Handle Call API
   * @param {string} : type (Authenticate type)
   * @param {string} : method (GET / POST / PUT / DELETE)
   * @param {string} : URL
   * @param {object} : data
   * @param {object} : header
   * @param {object} : responseType
   * @param {string} : signal
   * @returns {Promise<AxiosResponse<any> | never>}
   */
  sendRequest(type, method, baseURL, url, data = {}, header = "") {
    header = Object.assign({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    return axios({
      method: method,
      baseURL: baseURL,
      url: url,
      data: data,
      headers: {
        ...header,
      },
    }).then((response) => response);
  }

  get(url, data) {
    // handle data then concat in url
    return this.sendRequest(null, METHOD.GET, BASE_URL, url);
  }

  post(url, data) {
    return this.sendRequest(
      HEADER.AUTHORIZATION,
      METHOD.POST,
      BASE_URL,
      url,
      data
    );
  }

  put(url, data) {
    return this.sendRequest(
      HEADER.AUTHORIZATION,
      METHOD.PUT,
      BASE_URL,
      url,
      data
    );
  }

  patch(url, data) {
    return this.sendRequest(
      HEADER.AUTHORIZATION,
      METHOD.PATCH,
      BASE_URL,
      url,
      data
    );
  }

  delete(url, data) {
    return this.sendRequest(
      HEADER.AUTHORIZATION,
      METHOD.DELETE,
      BASE_URL,
      url,
      data
    );
  }
}

const service = Network.getInstance();
export { service };
