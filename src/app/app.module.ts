import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentsModule } from './components/students/students.module';
import { SchooleventsModule } from './components/schoolevents/schoolevents.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent },
  { path: 'maincategory', component: SchoolDetailsComponent },
  { path: 'students', loadChildren: './components/students/students.module#StudentsModule' },
  { path: 'schoolevents', loadChildren: './components/schoolevents/schoolevents.module#SchooleventsModule' },
  { path: 'contact', component: ContactusComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SchoolDetailsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    StudentsModule,
    SchooleventsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
