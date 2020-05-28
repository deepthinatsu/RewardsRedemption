import { Component, OnInit } from '@angular/core';
import { RedeemService } from '../redeem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allItems: any;
  constructor(protected router:Router,protected redemService: RedeemService) {}


  ngOnInit(): void {
   this.redemService.getAllItems().subscribe(
    (response:any)=>{
      this.allItems=response;
    }
   );
  }
  
  addToCart(id){
    this.redemService.addToCart(id);
    this.router.navigate(['list']);
  }
}
