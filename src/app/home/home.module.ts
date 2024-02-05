//crea el contenido de este modulo
import { ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './Footer/footer.component';
import { ContentComponent } from './Content/content.component';
import { ProvisionalDatabaseService } from '../interfaces/provisional_database.service';



@NgModule({
  declarations:[NavbarComponent, FooterComponent,ContentComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProvisionalDatabaseService],
  exports: [NavbarComponent, FooterComponent, ContentComponent ]
})
export class HomeModule { }
