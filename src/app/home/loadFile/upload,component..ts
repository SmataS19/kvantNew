//crea el contenido de este modulo
import { ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[ ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [ ]
})
export class UploadFileComponent { }
