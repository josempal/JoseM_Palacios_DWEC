import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CcaaComponent } from './components/ccaa/ccaa.component';
import { DataLogComponent } from './components/data-log/data-log.component';
import { UpdateCcaaComponent } from './components/update-ccaa/update-ccaa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CcaaComponent,
    DataLogComponent,
    UpdateCcaaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
