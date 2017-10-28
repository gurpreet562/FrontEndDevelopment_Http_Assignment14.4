import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
@Injectable()
export class DemoService {
  …
  createFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.post('/api/food/', body, options ).map((res: Response) => res.json());
  }
  updateFood(food) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(food);
    return this.http.put('/api/food/' + food_id, body, options ).map((res: Response) => res.json());
  }
  deleteFood(food_id) {
    return this.http.delete('/api/food/' + food_id);
  }
}
