import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';



export interface FloorWiseData {
  floorId: string;
  floorName: string;
  wingId : string;
  wingName : string;
  seatStartNo:number;
  seatEndNo:number;
}

export interface Department{
  id: string;
  name : string;
}


export interface AllocationData {
  division: string;
  floorwiseData: FloorWiseData;
  }

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  displayedColumns: string[] = ['floorId', 'floorName','wingId', 'wingName','seatStartNo', 'seatEndNo'];
  departmentAllocationData: any;

  deptList : Department[]=[{id : '1', name : 'Department 1'},{id : '2', name : 'Department 2'},{id : '3', name : 'Department 3'}];
  selectedDept : string='';
  selection = new SelectionModel<any>(true, []);
constructor(private adminService : AdminService)
{
  this.selection.clear();
}

  ngOnInit(): void {
   
  }

  onSelect(event: any){
    this.selectedDept=event.value;
    this.showConfig(event.value);
  }

  showConfig(departmentId: any) {
    this.adminService.getConfig(departmentId)
      .subscribe((response : any) => this.departmentAllocationData=response.data);
  }

  submitAllocation(){
    let dep : string= 'DivisionA';
    let requestData={
      "division" : this.selectedDept,
       "data" : this.departmentAllocationData
    }
    this.adminService.submitDepartmentAllocation(requestData, dep)
        .subscribe((response : any)=> console.log(response));
  }
}
