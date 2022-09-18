import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';



@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styleUrls: ['./manager-panel.component.scss']
})
export class ManagerPanelComponent implements OnInit {

  isAllocate = false;
  isView = true;

  constructor(private managerService : ManagerService, private datepipe : DatePipe) { }
  floorList : any []=[];
  selectedWingList : Wing[]=[];
  wingListF1 : Wing[]= []; 
  wingListF2 : Wing[]= [];
  wingListF3 : Wing[]= [];
  wingListF4 : Wing[]= [];
  ngOnInit(): void {
   
  }

  seatList: Seat[] = [
    // { number: 1, alloted: "true", selected: false }, { number: 2, alloted: "true", selected: false },
    // { number: 3, alloted: "true", selected: false }, { number: 4, alloted: "true", selected: false },
    // { number: 5, alloted: "false", selected: false }, { number: 6, alloted: "false", selected: false },
    // { number: 7, alloted: "false", selected: false }, { number: 8, alloted: "false", selected: false },
    // { number: 9, alloted: "false", selected: false }, { number: 10, alloted: "false", selected: false }

  ];
  rowList: Row[] = [
    // { rowNo: 1, seatList: this.seatList },
    // { rowNo: 2, seatList: this.seatList },
    // { rowNo: 3, seatList: this.seatList },
    // { rowNo: 4, seatList: this.seatList },
    // { rowNo: 5, seatList: this.seatList },

  ];

  // wingList: Wing[] = [
  //   { wingName: 'Wing A', rowList: this.rowList },
  //   { wingName: 'Wing B', rowList: this.rowList },
  //   { wingName: 'Wing C', rowList: this.rowList },
  //   { wingName: 'Wing D', rowList: this.rowList }
  // ];



  // subordinateList: User[] = [{name :'Sub1',id: '1'},{name :'Sub2',id: '2'}] ; 

  subordinateList: User[] = [
    { name: 'Sub1', id: '1' },
    { name: 'Sub2', id: '2' },
    { name: 'Sub3', id: '3' }
  ];

  seatsToAllocate: string = '';

  durationTypes = ['Monthly', 'Weekly', 'Custom'];
  selectedDuration: string = '';
  dateSelected : any;
  onSelect(item: any) {
    // console.log(item);
    this.seatsToAllocate = 'Seats to Allocate : ' + 30;
  }

  viewAllocationClicked(){
    // this.isView =!this.isView; this.isAllocate=!this.isAllocate;
    this.managerService.getAvailableSeats("1",this.dateSelected)
    .subscribe((response: any)=>{
       this.floorList.push(response[0].floorId);
       this.wingListF1.push(response[0].wingList[0]);
       this.wingListF1.push(response[0].wingList[1]);
       this.wingListF1.push(response[0].wingList[2]);
       this.wingListF1.push(response[0].wingList[3]);

       this.floorList.push(response[1].floorId);
       this.wingListF2.push(response[1].wingList[0]);
       this.wingListF2.push(response[1].wingList[1]);
       this.wingListF2.push(response[1].wingList[2]);
       this.wingListF2.push(response[1].wingList[3]);

       this.floorList.push(response[2].floorId);
       this.wingListF3.push(response[2].wingList[0]);
       this.wingListF3.push(response[2].wingList[1]);
       this.wingListF3.push(response[2].wingList[2]);
       this.wingListF3.push(response[2].wingList[3]);

       this.floorList.push(response[3].floorId);
       this.wingListF4.push(response[3].wingList[0]);
       this.wingListF4.push(response[3].wingList[1]);
       this.wingListF4.push(response[3].wingList[2]);
       this.wingListF4.push(response[3].wingList[3]);
       // console.log(this.wingListF1);
    });
  }

  onDurationSelect(duration: any) {
    this.selectedDuration = duration.value;
  }
  floorSelected(event : any){
    if(event.value=='L1'){
      this.selectedWingList=this.wingListF1;
 this.selectedWingList=this.wingListF1;
    }else if(event.value=='L2'){
      this.selectedWingList=this.wingListF2;
    }else if(event.value=='L3'){
      this.selectedWingList=this.wingListF3;
     }
     else if(event.value=='L4'){
      this.selectedWingList=this.wingListF4;
     }

  }

  dateChanged(event: any){
    console.log(event.value);
   this.dateSelected= this.datepipe.transform(event.value, 'yyyy-MM-dd');
  //  let latest_date =this.datepipe.transform(this.dateSelected, 'yyyy-MM-dd');
  //  console.log(latest_date);
  }
  onSeatClick(obj_: any, seat: Seat, row: Row) {

    // console.log(obj_.srcElement.className)
    // if (obj_.srcElement.className == 'seat selected') {
    //   obj_.srcElement.className = 'seat'
    // }
    // else {
    //   obj_.srcElement.className = 'seat selected';
    // }
    // seat.selected = !seat.selected;
    // // let cnt = 0;
    // // let allocateS: { rowN: number; colN: number; }[] = [];
    // this.seatList.forEach(function (seat: Seat) {
    //   if (seat.selected == true) {
    //     console.log(seat.number);
    //     console.log('id : ' + row.rowNo + seat.number)
    //     // cnt++;

    //     // allocateS.push({ 'rowN': row.rowNo, 'colN': seat.number })
    //     // console.log(allocateS)
    //     // console.log(row)
    //   }


    // });
    // if (cnt > 1) {
    //   // console.log(row.sea)
    //   // console.log(seat)
    //   allocateS = allocateS.sort(function (a, b) {
    //     return a.colN - b.colN;
    //   });
    //   console.log(allocateS[0])
    //   console.log(allocateS.slice(-1)[0])
    //   this.seatList.forEach(function (seat: Seat) {
    //     let n = allocateS[0].colN;
    //     // for ()
    //     allocateS.slice(-1)[0]
    //   });

    // }


  }

}

// onBookClick(){
//   const isAllocate =! isAllocate;
//   isView=true;
// }

interface User {
  name: string;
  id: string;
}

interface Seat {
  seatNum: string;
  status: string;
  // selected: boolean;
}

interface allocateSeat {
  rowN: number;
  colN: number;
}


interface Row {
  rowNo: string;
  // wingNo : number; 
  seatList: Seat[];
}


interface Wing {
  wingNum: string;
  rowList: Row[];
}

interface Floor {
  floorId: string;
  wingList : Wing[]
}

function onBookClick() {
  throw new Error('Function not implemented.');
}

