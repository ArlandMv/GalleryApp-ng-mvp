import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsComponent } from './image-details.component';
import { ImageService } from 'src/app/services/image.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailsComponent;
  let fixture: ComponentFixture<ImageDetailsComponent>;
  let imageServiceSpy: jasmine.SpyObj<ImageService>;

  beforeEach(() => {
    const activatedRouteMock = {
      paramMap: of({ get: () => 'test-id' }),
    };

    imageServiceSpy = jasmine.createSpyObj('ImageService', ['getImageById']);

    TestBed.configureTestingModule({
      declarations: [ImageDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: ImageService, useValue: imageServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load image details', () => {
    const mockImage = {
      id: 'test-id',
      title: 'Test Image',
      description: 'Test Description',
      imageUrl: 'test.jpg',
    };
    imageServiceSpy.getImageById.and.returnValue(of(mockImage));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.image).toEqual(mockImage);
  });

  /*
  it('should handle error while loading image details', () => {
    const errorMessage = 'Error loading image details';
  });*/
});
