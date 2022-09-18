import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FloorWiseData } from './components/admin-panel/admin-panel.component';

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:8080/floorplan';

  // submitDeptAllocationUrl = 'http://localhost:8080/allocate';

getConfig(departmentId : any) {
  return this.http.get<FloorWiseData>(this.configUrl);
}

submitDepartmentAllocation(dataObj : any, division: string){
  let submitDeptAllocationUrl = 'http://localhost:8080/allocate?division='+division;
  return this.http.post<any>(submitDeptAllocationUrl, dataObj);
}

}