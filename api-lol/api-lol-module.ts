import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiLolComponent } from './api-lol.component';
@NgModule({
  declarations:[
    ApiLolComponent
  ],
  exports: [
    ApiLolComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class ApiLolModule {}
