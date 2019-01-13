import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { RouterModule, Routes } from '@angular/router';

const schoolevents: Routes = [
  { path: 'gallerylist', component: GalleryComponent },
  { path: 'annoucementlist', component: AnnouncementsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(schoolevents)
  ],
  declarations: [
    GalleryComponent,
    AnnouncementsComponent
  ]
})
export class SchooleventsModule { }
