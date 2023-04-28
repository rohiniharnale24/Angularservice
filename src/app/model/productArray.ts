//import { Pstatus } from '../const/productArrayEnum';

export interface iProduct {
  pname: string;
  pDesc: string;
  //pStatus: 'in Progress' | ' Dispatched' | 'Delivered';
  pStatus: string;
  id: string;
}
