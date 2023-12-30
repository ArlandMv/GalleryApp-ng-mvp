import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';

const routes: Routes = [
  { path: '', component: ImageListComponent },
  { path: 'image/:id', component: ImageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
