import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  division: string;
  seats: number;
  isEdit:boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {seats: 200, division: 'Division 1',isEdit:true},
  {seats: 250, division: 'Division 2',isEdit:true},
  {seats: 200, division: 'Division 3',isEdit:true}
];

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  displayedColumns: string[] = ['division', 'seats'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
