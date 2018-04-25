import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  private prod: string = 'https://app.emmetblue.ng:904/v1';
  private dev: string = 'http://localhost:9982/v1';

  private server: string = this.prod;

  constructor(private http: HttpClient) { }

  submitPotentialBusiness(requestData: any) : any {
    let url = this.server+"/business/new";

  	return this.http.post(url, requestData);
  }
}
