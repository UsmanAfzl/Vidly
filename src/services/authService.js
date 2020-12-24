import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export function Login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
