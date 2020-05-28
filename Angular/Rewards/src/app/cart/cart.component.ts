import { Component, OnInit } from '@angular/core';
import { RedeemService } from '../redeem.service';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  showCart: boolean;
  isEmpty: boolean;
  user : Login;
  amount : number;
 
  
  constructor(protected redemService: RedeemService, protected loginService: LoginService,protected router: Router) { }

  ngOnInit(): void {
    
    this.cartItems = this.redemService.getAllCart();
    if(this.cartItems.length==0){
      this.showCart=false;
    }
    else{ 
      this.showCart=true;
      let size = this.cartItems.length;
      this.amount  = 0;
      for(let i=0;i<size;i++){
        this.amount = this.amount + this.cartItems[i].price;
       // console.log(this.bill[i].item.length)
      }
    }
  }
  deleteCartItem(itemId: number){
    this.cartItems = this.redemService.deleteCartItem(itemId);
    if(this.cartItems.length==0){
      this.isEmpty=false;
    }
    else{
      this.isEmpty=true;
    }
  }
   updateRewards() {

      
      let rewards = this.redemService.getRewardPoints();
      if(this.amount<= rewards){
        let res = rewards - this.amount;
        this.user = this.loginService.getLoginDetails();
        //alert(this.user.rewards);
        this.user.rewards = res;
         //alert(res);
        
        //this.redemService.updateRewards(this.user);

        this.redemService.updateRewards(this.user).subscribe(
          (response: any) => {
    
          }
        );
        //alert("updated rewards");
        this.router.navigate(['/list']);
      }
      
   }
}
