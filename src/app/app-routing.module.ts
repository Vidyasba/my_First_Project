import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { CompwComponent } from './compw/compw.component';

const routes: Routes = [
  {path:'',redirectTo:'compw',pathMatch:'full'},
  {path:"compw",component:CompwComponent },
  {path:"comp1",component:Comp1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
