import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {
  giphyApi = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

  constructor(public http: Http) { }

  get(searchTerm): Observable<any> {
    const apiLink = this.giphyApi + searchTerm;
    return this.http.request(apiLink).map((res: Response) => {
      const results = res.json().data;
      if (results.length > 0) {
        return results[0].images.original.url;
      } else {
        return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
      }
    });
  }
}
