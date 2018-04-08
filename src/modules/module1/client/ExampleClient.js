import request from 'superagent';

export default class ExampleClient {
  url;

  constructor(url) {
    this.url = url;
  }

  exampleRequest = (id, token) => {
    return request
      .get(`${this.url}/example/${id}`)
      .set('Authorization', 'Bearer ' + token)
      .timeout({
        response: 1000,
        deadline: 5000
      })
      .then(result => result.body);
  }
}
