import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compw',
  templateUrl: './compw.component.html',
  styleUrls: ['./compw.component.css']
})
export class CompwComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  gotocomp1(){
    this.router.navigateByUrl("/comp1");
  }
}
