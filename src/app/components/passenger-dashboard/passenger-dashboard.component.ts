import { Component, OnInit } from '@angular/core';
import { Pstatus } from 'src/app/const/productArrayEnum';
import { iProduct } from 'src/app/model/productArray';
import { passengerServices } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  passengerInstance!: passengerServices;

  constructor(private _passengerIntance: passengerServices) {
    //angular inself created single instance for service
    console.log(_passengerIntance.passenger);
  }
  productArray = [
    {
      pname: 'Iphone 13pro max',
      pDesc: 'mobile',
      pStatus: Pstatus.inProgress,
      id: this.create_UUID(),
    },
    {
      pname: 'samsung max s23',
      pDesc: 'mobile',
      pStatus: Pstatus.delivered,
      id: this.create_UUID(),
    },
  ];
  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  ngOnInit(): void {
    // this.passengerInstance = new passengerServices();
    // console.log(this.passengerInstance.passengerAge);
    // console.log(this.passengerInstance.passenger);
  }
}
