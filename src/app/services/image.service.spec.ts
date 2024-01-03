import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ImageService } from './image.service';
import { environment } from 'src/environments/environment.development';
import { Image } from '../models/image.model';

describe('ImageService', () => {
  let service: ImageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImageService],
    });
    service = TestBed.inject(ImageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve images from the API via GET', () => {
    const mockImages = [{ id: '1', description: 'Test Image' }];

    service.getImages().subscribe((images) => {
      expect(images).toEqual(mockImages);
    });

    const req = httpMock.expectOne(
      `${environment.unsplashApi}/collections/8684579/photos?client_id=${environment.clientId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockImages);
  });

  it('should retrieve a single image from the API via GET', () => {
    const mockImage: Image = {
      id: 'gcG_b9ijyqU',
      title: 'Jackfish Tornado',
      description: 'scuba diver watching school of gray fish underwater',
      imageUrl:
        'https://images.unsplash.com/photo-1519327567471-ae47752b8089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDY2MTd8MHwxfGFsbHx8fHx8fHx8fDE3MDM5MDIyMzR8&ixlib=rb-4.0.3&q=80&w=1080',
    };
    const imageId = 'gcG_b9ijyqU';

    service.getImageById(imageId).subscribe((image) => {
      expect(image?.description).toEqual(mockImage.description);
    });

    const req = httpMock.expectOne(
      `${environment.unsplashApi}/photos/${imageId}?client_id=${environment.clientId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockImage);
  });
});
