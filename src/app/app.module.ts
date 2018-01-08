import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { reducerProvider, reducerToken } from '../statemanagement/root.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import '../import-rxjs';
import { AppSandboxService } from './sandbox/app-sandbox.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducerToken),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [
    reducerProvider,
    AppSandboxService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
