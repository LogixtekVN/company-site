import { service } from "./Service.config";
import { CONTACT } from "../constants/ApiConst";
/**
 * analyze
 * @returns {Promise<AxiosResponse<any> | never | never>}
 */
export function sendContactService(data) {
  return service
    .post(CONTACT.SEND_CONTACT, data)
    .then((res) => res && res.data);
}
