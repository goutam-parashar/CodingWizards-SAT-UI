import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManagerService {
  constructor(private http: HttpClient) { }

  

  // submitDeptAllocationUrl = 'http://localhost:8080/allocate';

getAvailableSeats(userId : any, dateSelected : any) {
    let configUrl = 'http://localhost:8080/myAvailableSeats?id='+userId+'&dateSelected='+dateSelected;
  return this.http.get<any>(configUrl);
}

getSubordinates(id : any) {
    let configUrl = 'http://localhost:8080/subordinates?id='+id;
  return this.http.get<any>(configUrl);
}

getSubordinatesSeats(id : any) {
    let configUrl = 'http://localhost:8080/subordinates/count?id='+id;
  return this.http.get<any>(configUrl);
 }
submitSeatAllocation(dataObj : any){
  let submitDeptAllocationUrl = 'http://localhost:8080/manager/allocate/seat';
  return this.http.post<any>(submitDeptAllocationUrl, dataObj);
}

}