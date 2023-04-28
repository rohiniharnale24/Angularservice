import { Injectable } from '@angular/core';
import { iProduct } from './model/productArray';
import { Pstatus } from './const/productArrayEnum';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productArray: Array<iProduct> = [
    {
      pname: 'Samsung ultra s23',
      pDesc:
        'Low light. Camera. Action - A Pro-grade Camera grabs brighter photos and video, dusk to dawn. ',
      pStatus: Pstatus.inProgress,
      id: this.create_UUID(),
    },
  ];
  addProduct(prod: iProduct) {
    this.productArray.push(prod);
    alert(`${prod.pname} is get added to product list`);
  }

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
  constructor() {}
}
