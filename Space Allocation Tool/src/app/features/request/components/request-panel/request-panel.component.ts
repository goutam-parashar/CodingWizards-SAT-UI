import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  manager: string;
  seats: number;
  duration:string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {seats: 20, manager: 'manager 1',duration:'2,5,9',status:'submitted'},
  {seats: 25, manager: 'manager 2',duration:'8,11,18',status:'submitted'},
  {seats: 27, manager: 'manager 3',duration:'4,7,13',status:'submitted'}
];

@Component({
  selector: 'app-request-panel',
  templateUrl: './request-panel.component.html',
  styleUrls: ['./request-panel.component.scss']
})
export class RequestPanelComponent implements OnInit {

  displayedColumns: string[] = ['manager', 'seats','duration','status','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
