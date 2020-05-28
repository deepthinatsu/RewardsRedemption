import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class RedeemService {
  cartItems: any;
  
  constructor(protected http: HttpClient) { this.cartItems = [];}

  currentlogin:any;
   rewardPoints: number;

  login(currentlogin:any){
    this.currentlogin=currentlogin; 
   }

  validatelogin(username: string, password: string){
    console.log("h3");
    let credentials= username + ":" + password;
    let headers  = new HttpHeaders();
    headers  =  headers.set('Authorization',credentials);
    console.log(credentials);
    return this.http.get('http://localhost:8083/LoginService/validate', {headers});
  
  }
  
setRewardPoints(rewardPoints: number) {
this.rewardPoints = rewardPoints;
console.log(this.rewardPoints);

}

getRewardPoints() {
  return this.rewardPoints;
  
  
  }

updateRewards(CustomerEntity: any) {
  //alert("updated rewards service");
  return this.http.put("http://localhost:8083/LoginService/update", CustomerEntity);
}
  getAllItems(){
    return this.http.get("http://localhost:8083/productservice/prod/all");
  }
  addToCart(id){
    //let item = this.getItem(itemId+'');
    this.cartItems.push(id);
  }
  getAllCart(){
    return [].concat(this.cartItems);
}
  deleteCartItem(itemId: number){
    let size = this.cartItems.length;
    for(let i=0;i<size;i++){
      if(this.cartItems[i].itemId == itemId){
        this.cartItems.splice(i,1);
        break;
      }
    }
    return [].concat(this.cartItems);
  }
  
}
