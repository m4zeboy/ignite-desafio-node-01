import { buildRoutePath } from '../utils/build-route-path.js';

export class Router {
  #routes =  [];

  post(url,handler) {
    this.#routes.push({
      method: "POST",
      path: buildRoutePath(url),
      handler
    })
  }

  get(url,handler) {
    this.#routes.push({
      method: "GET",
      path: buildRoutePath(url),
      handler
    })
  }
  put(url,handler) {
    this.#routes.push({
      method: "PUT",
      path: buildRoutePath(url),
      handler
    })
  }

  delete(url,handler) {
    this.#routes.push({
      method: "DELETE",
      path: buildRoutePath(url),
      handler
    })
  }

  patch(url,handler) {
    this.#routes.push({
      method: "PATCH",
      path: buildRoutePath(url),
      handler
    })
  }

  find(method, url) {
    return this.#routes.find(route => {
      return route.method === method && route.path.test(url);
    })
  }
}