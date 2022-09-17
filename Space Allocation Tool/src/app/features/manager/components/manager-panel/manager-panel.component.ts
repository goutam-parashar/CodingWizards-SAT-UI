import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styleUrls: ['./manager-panel.component.scss']
})
export class ManagerPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seatList: Seat[] =[  
    {number:1, alloted: "true", selected: "false"},{number:2,alloted: "true",selected: "false"},
    {number:3,alloted: "true",selected: "false"},{number:4,alloted: "true",selected: "false"},
    {number:5,alloted: "false",selected: "false"},{number:6,alloted: "false",selected: "false"},
    {number:7,alloted: "false",selected: "false"},{number:8,alloted: "false",selected: "false"}

  ];
  rowList : Row[] =[
   { seatList :this.seatList},
   { seatList :this.seatList},
   { seatList :this.seatList},
   { seatList :this.seatList},
   { seatList :this.seatList}
  ];

  wingList : Wing[] = [
    { wingName : 'Wing A', rowList : this.rowList},
    { wingName : 'Wing B', rowList : this.rowList},
    { wingName : 'Wing C', rowList : this.rowList},
    { wingName : 'Wing D', rowList : this.rowList}
  ];
  
  // subordinateList: User[] = [{name :'Sub1',id: '1'},{name :'Sub2',id: '2'}] ; 

  subordinateList: User[] = [
    {name: 'Sub1', id: '1'},
    {name: 'Sub2', id: '2'},
    {name: 'Sub3', id: '3'}
  ];
  
  seatsToAllocate : string='' ;

  durationTypes =['Monthly', 'Weekly', 'Custom'];
  selectedDuration : string='';

  onSelect(item: any){
   // console.log(item);
    this.seatsToAllocate='Seats to Allocate : '+30;
  }

  onDurationSelect(duration : any){
  this.selectedDuration=duration.value;
  }

  onSeatClick(obj_ : any, seat: Seat){
    if(obj_.srcElement.className.indexOf('seat occupied')==-1 && obj_.srcElement.className.indexOf('seat')!=-1){
    obj_.srcElement.className='seat selected';
    seat.selected = "true";
    }

    this.seatList.forEach(function (seat : Seat) {
      if(seat.selected=="true"){
      console.log(seat.number);
      }
    });
  }
   
}


interface User{
  name : string;
  id : string;
}

interface Seat {  
  number: number;  
  alloted : string;
  selected : string;
}  


interface Row { 
  // rowNo : number;
  // wingNo : number; 
  seatList: Seat[];  
} 


interface Wing {  
  wingName : string;
  rowList: Row[];  
} 
