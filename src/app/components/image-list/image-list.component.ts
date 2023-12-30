import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  images: any[] | undefined;

  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((data) => {
      this.images = data;
    });
  }

  navigateToImageDetails(id: string): void {
    console.log('Navigating to image details with id:', id);
    this.router.navigate(['/image', id]);
  }
}
