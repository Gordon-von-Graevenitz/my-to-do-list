import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzIrukvlvqJSnFhsuQRgZWQi4Wwr2SBkE",
  authDomain: "to-do-list-ac1fd.firebaseapp.com",
  projectId: "to-do-list-ac1fd",
  storageBucket: "to-do-list-ac1fd.appspot.com",
  messagingSenderId: "806924973165",
  appId: "1:806924973165:web:dab57d81cc8738081f3b64"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
