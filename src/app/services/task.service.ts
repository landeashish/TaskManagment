import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpService) { }



  getAllTask() {
    const url = `/tasks?userId=${'605de414def7ab00157c8821'}&page=${1}`;
    return this.http.get(url)
  }
}
