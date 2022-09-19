import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ManagerService } from '../../manager.service';



@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styleUrls: ['./manager-panel.component.scss']
})
export class ManagerPanelComponent implements OnInit {

  isAllocate = false;
  isView = true;

  constructor(private managerService : ManagerService, private datepipe : DatePipe, private appService : AppService) { }
  floorList : any []=[];
  selectedWingList : Wing[]=[];
  targetWingList : Seat[]=[];
  wingListF1 : Wing[]= []; 
  wingListF2 : Wing[]= [];
  wingListF3 : Wing[]= [];
  wingListF4 : Wing[]= [];
  selectedFloorId:string='';
  selectedSubordinateId:string='';
  startDateSelected: any;
  endDateSelected: any;
  ngOnInit(): void {
   
  }

  subordinateList: User[] = [];

  seatsToAllocate: string = '';

  durationTypes = ['Monthly', 'Weekly', 'Custom'];
  selectedDuration: string = '';
  dateSelected : any;
  onSelect(item: any) {
    console.log(item);
    this.selectedSubordinateId=item.value;
    this.managerService.getSubordinatesSeats(item.value)
    .subscribe((response: any)=>{
      this.seatsToAllocate = 'Seats to Allocate : ' + response*0.6;
    });
    
  }

  seatBtnClicked(){
    this.isView =false; this.isAllocate=true;
    
    
    this.managerService.getSubordinates(this.appService.userId)
    .subscribe((response: any)=>{
console.log(response);
this.subordinateList= response;
    });
  }

  viewAllocationClicked(){
    this.isView =true; this.isAllocate=false;
    this.floorList =[];
  this.selectedWingList =[];
  }

  startDateChanged(dt: any){
    this.startDateSelected= this.datepipe.transform(dt.value, 'yyyy-MM-dd');
  }

  endDateChanged(dt: any){
    this.endDateSelected= this.datepipe.transform(dt.value, 'yyyy-MM-dd');
  }

  submitAllocationClicked(){
    let requestBody={
       "floorId": this.selectedFloorId,
     "subordinateId" : this.selectedSubordinateId,
     "startDate":this.startDateSelected,
     "endDate": this.endDateSelected,
     "seats":this.targetWingList
    }
    
    this.managerService.submitSeatAllocation(requestBody)
    .subscribe((response: any)=>{
      console.log(response);
    });
  }

  pullSeatsData(){
    this.managerService.getAvailableSeats(this.appService.userId,this.dateSelected)
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
    this.selectedFloorId =event.value;
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
   this.pullSeatsData();
  }
  onSeatClick(obj_ : any, seat: Seat, row:Row){

      console.log(obj_.srcElement.className)
      if(obj_.srcElement.className=='seat selected'){
        obj_.srcElement.className='seat'
      }
      else{
        obj_.srcElement.className='seat selected';
      }
      let rowToPush= seat;
      seat.status='allocated';
      this.targetWingList.push(rowToPush);
    //seat.status ="Selected";

    // this.seatList.forEach(function (seat : Seat) {
    //   if(seat.selected==true){
    //   console.log(seat.number);
    //   // console.log('id : ' + row.rowNo+seat.number )
      
    //   // console.log(row)
    //   }
  }
  
}

// onBookClick(){
//   const isAllocate =! isAllocate;
//   isView=true;
// }

interface User {
  fName: string;
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

