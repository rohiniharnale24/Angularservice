import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passengerArray';

@Injectable({
  providedIn: 'root',
})
export class passengerServices {
  passenger: Array<Ipassenger> = [
    {
      id: 1,
      fullName: 'stephen',
      checkedIn: true,
      checkedInDate: 111,
      children: 1,
    },
    {
      id: 2,
      fullName: 'stephen',
      checkedIn: true,
      checkedInDate: 222,
      children: null,
    },
    {
      id: 3,
      fullName: 'stephen',
      checkedIn: true,
      checkedInDate: 122,
      children: 2,
    },
    {
      id: 4,
      fullName: 'stephen',
      checkedIn: true,
      checkedInDate: 113,
      children: 1,
    },
  ];
  passengerAge: number = 45;
}
