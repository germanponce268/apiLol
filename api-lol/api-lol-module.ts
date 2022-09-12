import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ApiLolComponent } from './api-lol.component';
@NgModule({
  declarations:[
    ApiLolComponent
  ],
  exports: [
    ApiLolComponent
  ],
  imports:[
    CommonModule
  ]
})
export class ApiLolModule {}
