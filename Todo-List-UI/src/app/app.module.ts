import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ApiService } from '../api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalComponent as ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
	AppComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatButtonModule,
    MatDialogModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
