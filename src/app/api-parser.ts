import {Response} from "@angular/http";

export class ApiParser {
  constructor() { }

  handle(request) {
    return request.map((res: Response) => {
      return res.json();
    }).filter((data) => {
      return this.isSuccessful(data);
    }).map((data) => {
      return data.data;
    });
  }

  isSuccessful(response) {
    return response.status === 'success';
  }
}
