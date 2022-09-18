import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FloorWiseData } from './components/admin-panel/admin-panel.component';

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/adminSearch.json';

getConfig(departmentId : any) {
  return this.http.get<FloorWiseData>(this.configUrl);
}

submitDepartmentAllocation(dataObj : FloorWiseData[]){
  return this.http.post<any>(this.configUrl, dataObj);
}

}