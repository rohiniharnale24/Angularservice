import { Component, OnInit } from '@angular/core';
import { iProduct } from './model/productArray';
import { Pstatus } from './const/productArrayEnum';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //we cant use enum directly in html so we have to first store it in field then we use this field in html
  productStatus = Pstatus;
  title = 'service';
  //we have to take array from product service
  productArray: Array<iProduct> = [];
  constructor(private _productInstatnce: ProductService) {}
  ngOnInit(): void {
    //  throw new Error('Method not implemented.');
    this.productArray = this._productInstatnce.productArray;
  }

  onaddProductCard(pname: HTMLInputElement, pdetails: HTMLInputElement) {
    let prodObj: iProduct = {
      pname: pname.value,
      pDesc: pdetails.value,
      pStatus: Pstatus.inProgress,
      id: this.create_UUID(),
    };
    //from here we are passing new obj to addProduct method in service
    this._productInstatnce.addProduct(prodObj);
    pname.value = '';
    pdetails.value = '';
    // this._productInstatnce.OnStatusClick()
  }
  OnStatusClick(id: string, status: string) {
    this.productArray.forEach((prod) => {
      console.log(id, status);
      if (prod.id === id) {
        prod.pStatus = status;
      }
    });
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
}
