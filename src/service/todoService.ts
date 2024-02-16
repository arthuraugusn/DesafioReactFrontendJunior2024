import axios, { AxiosResponse } from "axios";
import ITodo from "../interface/ITodo";

const url =
  "https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos";

const service = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = (): Promise<ITodo[]> => {
  return service
    .get(url)
    .then((response: AxiosResponse<ITodo[]>) => response.data)
    .catch((e: Error) => {
      throw e;
    });
};
