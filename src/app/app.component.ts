import { Address } from './model/address';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 seletedAddress: Address = new Address();
 llamar:boolean=false;

 addressArray: Address[] = [

    {id:1, name:"Odalis", address:"Los Prados. Santo Domingo Este",address2:""},
    {id:2, name:"Nikaury", address:"Los Prados, Santo Domingo Este",address2:""},
    {id:3, name:"Elizabeth", address:"Los Prados, Santo Domingo Este",address2:""}
  ];
  
  addOrEdit(){
    if(this.seletedAddress.id === 0){
      this.seletedAddress.id = this.addressArray.length+1;
      this.addressArray.push(this.seletedAddress);
    }
   
    this.seletedAddress = new Address();
  }
  
  openForEdit(Address: Address){
    this.seletedAddress = Address;
  }

}
