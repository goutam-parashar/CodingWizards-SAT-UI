import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManagerService {
  constructor(private http: HttpClient) { }

  

  // submitDeptAllocationUrl = 'http://localhost:8080/allocate';

getAvailableSeats(userId : any) {
    let configUrl = 'http://localhost:8080/myAvailableSeats?id='+userId;
  return this.http.get<any>(configUrl);
}

// submitDepartmentAllocation(dataObj : any, division: string){
//   let submitDeptAllocationUrl = 'http://localhost:8080/allocate?division='+division;
//   return this.http.post<any>(submitDeptAllocationUrl, dataObj);
// }

}