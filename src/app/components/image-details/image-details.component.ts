import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css'],
})
export class ImageDetailsComponent implements OnInit {
  image: Image | undefined;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    // Extract image ID from route parameters
    const imageId = this.route.snapshot.paramMap.get('id');

    if (imageId) {
      this.loadImageDetails(imageId);
    }
  }

  loadImageDetails(imageId: string): void {
    this.imageService.getImageById(imageId).subscribe(
      (image) => {
        this.image = image;
      },
      (error) => {
        console.error('Error fetching image details:', error);
      }
    );
  }

  buyImage(): void {
    // Simulated purchase process
    alert(`You have purchased ${this.image?.title}!`);
  }
}

/*
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadImageDetails(id);
      }
    });
  }
  */
