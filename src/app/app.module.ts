import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './auth/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule, matSelectAnimations } from '@angular/material/select';
import { MatExpansionModule, matExpansionAnimations } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BookingComponent } from './booking/booking.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component'
import { HttpClientModule } from "@angular/common/http";
import { AngularFirestore } from 'angularfire2/firestore';
import { serviceService } from './services/service.service';
//Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule, AngularFireStorage } from "angularfire2/storage"
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GraciasComponent } from './pagina-gracias/gracias/gracias.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
	apiKey: "AIzaSyBtrum3w1Mg3XfP7yiO3WuM-kZm7M7keOs",
	authDomain: "serv-f2b29.firebaseapp.com",
	databaseURL: "https://serv-f2b29.firebaseio.com",
	projectId: "serv-f2b29",
	storageBucket: "serv-f2b29.appspot.com",
	messagingSenderId: "98296449606"
};

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		BookingComponent,
		ExampleDialogComponent,
		GraciasComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFireStorageModule,
		AngularFirestoreModule,
		HttpModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCjgDSWwtQstvHkCB-gytm1l_o7ByUJMyw',
			clientId: '<mandatory>',
			language: 'en',
			libraries: ['geometry', 'places']
		}),
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatTabsModule,
		MatCardModule,
		MatButtonModule,
		MatStepperModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		MatCheckboxModule,
		MatSelectModule,
		MatExpansionModule,
		MatSlideToggleModule,
		MatDialogModule

	],
	providers: [
		AngularFirestore,
		serviceService
	],
	bootstrap: [AppComponent],
	entryComponents: [ExampleDialogComponent]
})
export class AppModule { }
