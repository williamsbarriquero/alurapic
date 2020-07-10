import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponet } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [PhotoComponet, PhotoListComponent, PhotoFormComponent],
  imports: [HttpClientModule, CommonModule],
})
export class PhotosModule {}
