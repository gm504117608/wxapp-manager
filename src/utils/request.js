import fetch from 'dva/fetch';
import { message } from 'antd';

/**
 * 获取后台返回数据
 */
function parseJSON(response) {
    console.log("parseJSON(response)", response);
    return response.json();
}

/**
 * 校验调用接口返回来的转态码是否正常
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * 对后端返回数据进行处理
 */
function parseBackData(data) {
    console.log("parseBackData", data);
    if (data.code !== 0) {
        message.info(data.message);
    } 
    return data.data;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    console.log("request", url, options);
    return fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => (parseBackData(data)))
      .catch(err => ({ err }));
}
