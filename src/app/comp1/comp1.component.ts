import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  items=[ 
          { name:'Apple',type:'fruit'},
          { name:'Papaya',type:'fruit'},
          { name:'Brinjal',type:'veg'},
          { name:'Cucumber',type:'veg'},
          { name:'Custord Apple',type:'fruit'},
          { name:'Ladies Finger',type:'veg'},
          { name:'Green Chilly',type:'veg'},
          { name:'Banana',type:'fruit'},
          { name:'Cashew',type:'dryfruits'},
          { name:'Almond',type:'dryfruits'},
          { name:'Rose',type:'flower'},
          { name:'Jasmine',type:'flower'},
          { name:'Water melon',type:'fruit'},
          { name:'Walnut',type:'dryfruits'},
          { name:'Peanut',type:'dryfruits'},
          { name:'coconut',type:'dryfruits'},
          { name:'Sun Flower',type:'flower'},
          { name:'Lotus',type:'flower'},
          { name:'Bitter Guard',type:'veg'},
          { name:'Onion',type:'veg'},
          { name:'Date Palm',type:'dryfruits'},
          { name:'Hazelnuts',type:'dryfruits'},
          { name:'mango',type:'fruit'},
          { name:'graphes',type:'fruit'},
          { name:'Peacns',type:'dryfruits'},
          { name:'kiwi',type:'fruit'},


        ];
  
 selecteditem:string='';
 ClearDisbale:boolean=true;
 typeofitem:string='';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  find(things:string){
    this.selecteditem=things;
    if(this.selecteditem === 'fruit'){
      console.log('selecteditem',this.selecteditem)
      this.typeofitem=this.selecteditem;
      console.log('typeofitem',this.typeofitem)
      this.ClearDisbale=false;
    }
    else if(this.selecteditem ==='flower'){
      this.typeofitem=this.selecteditem;
      console.log(this.typeofitem)
      this.ClearDisbale=false;
    }
    else if(this.selecteditem ==='veg'){
      this.typeofitem=this.selecteditem;
      console.log(this.typeofitem)
      this.ClearDisbale=false;
    }
    else if(this.selecteditem ==='dryfruits'){
      this.typeofitem=this.selecteditem;
      console.log(this.typeofitem)
      this.ClearDisbale=false;
    }
    else{
      this.ClearDisbale=true;
    }
  }
  disbalebutton(){
    this.ClearDisbale=false;
  }
  toprev(){
    this.router.navigateByUrl("/compw");
  }
}
