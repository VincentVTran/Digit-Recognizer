import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL:string = "http://localhost:3000"
  constructor(private http: HttpClient) {
  }

  sendCorrections(body:any):Observable<any>{
    console.log("Sending expected number");
    return this.http.post<any>(this.baseURL+"/correct",body);
  }

  retrievePrediction():Observable<any>{
    console.log("Retrieving predicted number")
    return this.http.get<any>(this.baseURL+"/predict");
  }

  //Adding into a global variable
  trainingSet():Observable<any>{
    console.log("Sending expected number; Retrieving predicted number")
    return this.http.get<any>(this.baseURL+"/pre-train");
  }

  saveModel():Observable<any>{
    console.log("Sending expected number; Retrieving predicted number")
    return this.http.get<any>(this.baseURL+"/save");
  }
}
